import React,{useState} from 'react';
import { injectIntl } from 'react-intl';
import { Row,
  Button,
  Card,
  CardBody,
  CardTitle,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Input,
  Label, } from 'reactstrap';

import IntlMessages from '../../../helpers/IntlMessages';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import Vimeo from '@u-wave/react-vimeo';


const DashboardAnalytics = ({ intl, match }) => {
  const [vidLoad, setLoad] = useState(false);
  const [modalRight, setModalRight] = useState(false);

  const bt1={
    float:"right",
		position:"absolute",
		backgroundColor:"white",
		color:"black",
		fontSize:"18px",
		borderColor:"white",
		borderRadius:"100px",
		left:"83%",
		top:"2%"
  }
  const logo1={
		position: 'absolute',
		backgroundSize:"fill",
		width: '75px',
		height: '75px',
		top: '-4%',
		left: '-3%'
	}
  const image1={
    position: "relative"
   }
   const vid={
    transform: "skew(0deg, 0deg)",
    position: "absolute",
    width: "19.84%",
    height: "25%",
    top: "20.2%",
    left: "39.84%"}

   let slido={
     display:"block",
 		position:"absolute",
 		width:"100%",
 		height:"100%",
 		top: '0%',left: '0%'
      }
    const logo={
      display: 'flex', justifyContent: 'center', alignItems: 'center',
                      transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
                      width: '70px', height: '70px',
                      top: '78%',left: '91.31%'
    }

    const vidiloadi={
       position:"relative",
       height:"100%",
       width:"100%",
       overflow:"hidden",
     }

  return (
	   <>
      <div style={image1}>
       <img height="100%" width="100%" style={image1} src="https://ficci-capam.framez.sg/images/lounge.jpg" alt="lounge"/>
       <iframe src="https://player.vimeo.com/video/451526648?autoplay=1&app_id=122963" allowFullScreen allow="autoplay; encrypted-media" style={vid} frameborder="0"></iframe>
       <Button style={logo} onClick={()=>setModalRight(true)}>
						<img src="../../../../assets/logos/chat.png" height="100%" width="100%" style={logo1}/>
	        </Button>
	        <Modal
	          isOpen={modalRight}
	          toggle={() => setModalRight(!modalRight)}
	          wrapClassName="modal-right">
	        <ModalHeader>
					 Chat
					<Button
						color="secondary"
						style={bt1}
						onClick={() => setModalRight(false)}>X
					</Button>
					</ModalHeader>
	        <ModalBody>
						<iframe src="../../user/chat" height="100%" width="100%" style={slido}/>
	        </ModalBody>
	        </Modal>
      </div>
    </>
  );
};
export default injectIntl(DashboardAnalytics);
