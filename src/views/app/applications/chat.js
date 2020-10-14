/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect, useRef } from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Row } from 'reactstrap';

import { Colxx } from '../../../components/common/CustomBootstrap';

import {
  getContacts,
  getConversations,
  changeConversation,
  addMessageToConversation,
} from '../../../redux/actions';
import ChatApplicationMenu from '../../../containers/applications/ChatApplicationMenu';
import ChatHeading from '../../../components/applications/ChatHeading';
import MessageCard from '../../../components/applications/MessageCard';
import SaySomething from '../../../components/applications/SaySomething';
import { auth, database } from '../../../helpers/Firebase';

const ChatApp = ({
  intl,
  allContacts,
  conversations,
  loadingConversations,
  loadingContacts,
  currentUser,
  selectedUser,
  selectedUserId,

  getContactsAction,
  getConversationsAction,
  changeConversationAction,
  addMessageToConversationAction,
}) => {
  const [activeTab, setActiveTab] = useState('messages');
  const [messageInput, setMessageInput] = useState('');
  const scrollBarRef = useRef(null);
  useEffect(() => {
    document.body.classList.add('no-footer');
    const currentUserId = selectedUser || 0;
    getContactsAction();
    // getConversationsAction(selectedUser);

    return () => {
      document.body.classList.remove('no-footer');
    };
  }, [getContactsAction, getConversationsAction]);

  const focusScrollBottom = () => {
    setTimeout(() => {
      if (scrollBarRef.current) {
        scrollBarRef.current._ps.element.scrollTop =
          scrollBarRef.current._ps.contentHeight;
      }
    }, 100);
  };

  useEffect(() => {
    console.log(conversations.length);
    if (loadingConversations && loadingContacts && selectedUser != null) {
      changeConversationAction(selectedUser);
      focusScrollBottom();
    }
  }, [
    changeConversationAction,
    loadingContacts,
    loadingConversations,
    selectedUser,
    selectedUserId,
    conversations.length
  ]);



  useEffect(() => {
    const setOneToOneChat = (s) => {
      if(s!=null){
      //Check if user1’s id is less than user2's
      console.log('uid: ,', s.uid)
      console.log('uid@: ,', auth.currentUser.uid)
      if (s.uid < auth.currentUser.uid) {
        return s.uid + auth.currentUser.uid;
      }
      else {
        return auth.currentUser.uid + s.uid;
      }
    }else {
      return null;
    }

    }

    const chatID = setOneToOneChat(selectedUser)
    database.ref(`data/${chatID}`).on("child_added", async function (snapshot) {
      getConversationsAction(selectedUser);
    })
    focusScrollBottom();
  }, [selectedUser]);

  const handleChatInputPress = (e) => {
    if (e.key === 'Enter') {
      if (messageInput.length > 0) {
        addMessageToConversationAction(
          currentUser.uid,
          selectedUser.uid,
          messageInput,
          conversations
        );
        setMessageInput('');
        setActiveTab('messages');
        focusScrollBottom();
      }
    }
  };

  const handleSendButtonClick = () => {
    const messageInputt=messageInput.trim()
    if (messageInputt.length > 0) {
      addMessageToConversationAction(
        currentUser.uid,
        selectedUser.uid,
        messageInputt,
        conversations
      );
      setMessageInput('');
      setActiveTab('messages');
      focusScrollBottom();
    }
  };

  const { messages } = intl;

  const selectedConversation =
    null;

  return true ? (
    <>
      <Row className="app-row">
        <Colxx xxs="12" className="chat-app">
          {/* {console.log('conversations: ',conversations)} */}
          {loadingConversations && selectedUser && (

            <ChatHeading
              name={selectedUser.name}
              thumb={selectedUser.thumb}
              lastSeenDate={selectedUser.lastSeenDate}
            />
          )}


          <PerfectScrollbar
            ref={scrollBarRef}
            // containerRef={(ref) => {}}
            options={{ suppressScrollX: true, wheelPropagation: false }}
          >
            {conversations.map((item, index) => {
              {/* console.log("item:", item) */}
              return (
                <MessageCard
                  key={index}
                  senderId={item.senderId}
                  messageText={item.messageText}
                  timestamp={new Date(item.timestamp).toLocaleDateString("en-US")}
                />
              );
            })}
          </PerfectScrollbar>

        </Colxx>
      </Row>
      <SaySomething
        placeholder={messages['chat.saysomething']}
        messageInput={messageInput}
        handleChatInputPress={handleChatInputPress}
        handleChatInputChange={(e) => {
          setMessageInput(e.target.value);
        }}
        handleSendButtonClick={handleSendButtonClick}
      />
      <ChatApplicationMenu activeTab={activeTab} toggleAppMenu={setActiveTab} />
    </>
  ) : (
      <div className="loading" />
    );
};

const mapStateToProps = ({ chatApp }) => {
  const {
    allContacts,
    conversations,
    loadingConversations,
    loadingContacts,
    currentUser,
    selectedUser,
    selectedUserId,
  } = chatApp;

  return {
    allContacts,
    conversations,
    loadingConversations,
    loadingContacts,
    currentUser,
    selectedUser,
    selectedUserId,
  };
};
export default injectIntl(
  connect(mapStateToProps, {
    getContactsAction: getContacts,
    getConversationsAction: getConversations,
    changeConversationAction: changeConversation,
    addMessageToConversationAction: addMessageToConversation,
  })(ChatApp)
);
