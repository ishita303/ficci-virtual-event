import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { auth } from '../../helpers/Firebase';

const MessageCard = ({ messageText,
  senderId,
  timestamp }) => {

  return (
    <>
      <Card
        className={`mx-3 d-inline-block mb-3 float-${senderId !== auth.currentUser.uid ? 'left' : 'right'
          }`}
      >
        <div className="position-absolute  pt-1 pr-2 r-0">
          <span className="text-extra-small text-muted">{timestamp}</span>
        </div>
        <CardBody>
          
          <div className="chat-text-left">
            <p className="mb-0 text-semi-muted">{messageText}</p>
          </div>
        </CardBody>
      </Card>
      <div className="clearfix" />
    </>
  );
};

export default React.memo(MessageCard);
