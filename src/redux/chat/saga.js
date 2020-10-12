import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { getCurrentTime } from '../../helpers/Utils';
// import _, { forEach, range } from 'lodash';
import firebase from 'firebase'
import {
  CHAT_GET_CONTACTS,
  CHAT_GET_CONVERSATIONS,
  CHAT_ADD_MESSAGE_TO_CONVERSATION,
  CHAT_CREATE_CONVERSATION,
} from '../actions';

import {
  getContactsSuccess,
  getContactsError,
  getConversationsSuccess,
  getConversationsError,
} from './actions';

// import contactsData from '../../data/chat.contacts.json';
// import conversationsData from '../../data/chat.conversations.json';
import { auth, database, firestore } from '../../helpers/Firebase';
import { connectAdvanced } from 'react-redux';
// import { array } from 'prop-types';
// import { firestore } from 'firebase';
// import { array } from 'prop-types';
let contactsData = [];
let conversationsData = [];
let conversationStatus = ''
function* loadContacts() {
  try {
    contactsData = []
    yield loadContactsAsync()
    yield put(getContactsSuccess(contactsData, auth.currentUser));
  } catch (error) {
    yield put(getContactsError(error));
  }
}

const loadContactsAsync = async () => {
  // const contacts = contactsData.data;
  // const currentUser = contacts[0];
  // return await new Promise(async (success, fail) => {
  // setTimeout(() => {
  //   success({ contacts, currentUser });
  // }, 2000);
  if (auth.currentUser != null) {
    try {
      contactsData = []
      const uData = firestore.collection('users');
      // let response=null;
      const snapshot = await uData.get()

      if (snapshot.empty) {
        console.log('No matching documents.');
        return;
      }

      snapshot.forEach(doc => {
        contactsData.push(doc.data());
      });
      console.log(contactsData);
      return;
      // success([contactsData,auth.currentUser])
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log("auth user not found")
  }

  // })
  //   .then((response) => response)
  //   .catch((error) => error);
};
function* loadConversations(userId) {
  try {
    console.log("loading convo: ", userId)
    conversationsData = []
    yield loadConversationsAsync(userId)

    console.log("convo Data: ", conversationStatus);
    if (conversationStatus === 'emptyArray') yield put(getConversationsSuccess([], userId));
    else yield put(getConversationsSuccess(conversationsData, userId));
  } catch (error) {
    yield put(getConversationsError(error));
  }
}

const setOneToOneChat = (uid) => {
  //Check if user1’s id is less than user2's
  console.log('uid: ,', uid)
  console.log('uid@: ,', auth.currentUser.uid)
  if (uid < auth.currentUser.uid) {
    return uid + auth.currentUser.uid;
  }
  else {
    return auth.currentUser.uid + uid;
  }

}

const loadConversationsAsync = async (userID) => {
  // return await new Promise((success, fail) => {
  //   setTimeout(() => {
  //     success({ conversations, selectedUser });
  //   }, 1000);
  if (auth.currentUser != null) {
    try {
      console.log("function call ho rha h");

      const chatID = setOneToOneChat(userID.payload.uid)

      conversationsData = []
      await database.ref(`data/${chatID}`).on("child_added", async function (snapshot) {
        console.log("sanpshot: ", snapshot.toJSON());


        if (snapshot.exists()) {
          const messages = snapshot.toJSON()


          conversationsData.push(messages)


          // console.log("ConvoData: ", conversationsData);
          conversationStatus = 'convos'
        }
        else {
          conversationStatus = 'emptyArray'

        }

        return;

      })



    } catch (error) {
      console.log(error);
    }
  } else {
    console.log("auth user not found")
  }


};

function* addMessageToConversation({ payload }) {
  try {
    const {
      currentUserId,
      selectedUserId,
      message,
      allConversations,
    } = payload;
    console.log('selectedUser:', selectedUserId)
    const newMessage = { messageText: `${message}`, receiverId: `${selectedUserId}`, senderId: `${auth.currentUser.uid}`, timestamp: firebase.database.ServerValue.TIMESTAMP }
    const newMessageLocal = { messageText: `${message}`, receiverId: `${selectedUserId}`, senderId: `${auth.currentUser.uid}`, timestamp: new Date().toUTCString() }
    yield
    addMessageToConversationAsync(
      currentUserId,
      selectedUserId,
      newMessage,
      allConversations
    )
    // conversationsData.push(newMessageLocal);
    console.log('Message Sent:', conversationsData)

    yield put(getConversationsSuccess(conversationsData, selectedUserId));
  } catch (error) {
    yield put(getConversationsError(error));
  }
}
const addMessageToConversationAsync = async (
  currentUserId,
  selectedUserId,
  newMessage,
  allConversations
) => {

  const chatID = setOneToOneChat(selectedUserId)
  await database.ref(`data/${chatID}`).push(newMessage)


  return;
};

function* createNewConversation({ payload }) {
  try {
    const { currentUserId, selectedUserId, allConversations } = payload;
    const response = yield call(
      createNewConversationAsync,
      currentUserId,
      selectedUserId,
      allConversations
    );
    const { conversations, selectedUser } = response;
    yield put(getConversationsSuccess(conversations, selectedUser));
  } catch (error) {
    yield put(getConversationsError(error));
  }
}

const createNewConversationAsync = async (
  currentUserId,
  selectedUserId,
  allConversations
) => {
  const conversation = {
    id: allConversations.length + 1,
    users: [currentUserId, selectedUserId],
    lastMessageTime: '-',
    messages: [],
  };

  allConversations.splice(0, 0, conversation);
  return await new Promise((success, fail) => {
    setTimeout(() => {
      success({
        conversations: allConversations,
        selectedUser: selectedUserId,
      });
    }, 500);
  })
    .then((response) => response)
    .catch((error) => error);
};

export function* watchGetContact() {
  yield takeEvery(CHAT_GET_CONTACTS, loadContacts);
}
export function* watchGetConversation() {
  yield takeEvery(CHAT_GET_CONVERSATIONS, loadConversations);
}
export function* watchAddMessageToConversation() {
  yield takeEvery(CHAT_ADD_MESSAGE_TO_CONVERSATION, addMessageToConversation);
}
export function* watchCreateConversation() {
  yield takeEvery(CHAT_CREATE_CONVERSATION, createNewConversation);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetContact),
    fork(watchGetConversation),
    fork(watchAddMessageToConversation),
    fork(watchCreateConversation),
  ]);
}
