import React,{useState} from 'react';
import {
	Route,
	Redirect,
} from 'react-router-dom';
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
  Label,  } from 'reactstrap';
import IntlMessages from '../../../helpers/IntlMessages';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import Vimeo from '@u-wave/react-vimeo';

const DefaultConference = ({ intl, match }) => {
	const [vidLoad, setLoad] = useState(false);
	const [modalRight, setModalRight] = useState(false);

	const logo={
		display: 'flex', justifyContent: 'center', alignItems: 'center',
										transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
										width: '70px', height: '70px',
										top: '79%',left: '91.31%'
	}
	const logo1={
		position: 'absolute',
		backgroundSize:"fill",
		width: '75px',
		height: '75px',
		top: '-4%',
		left: '-3%'
	}
	const bt1={
		float:"right",
		position:"absolute",
		borderRadius:"100px",
		left:"83%",
		top:"2%"
	}
	const vid={
	 transform: `skew(${0}deg, ${0}deg)`,
	 position: 'absolute',
	 width: "80.3%",
	 height: "54.4%",
	 top: "7.7%",
	 left: "12.8%"
 }

	let slido={
		display:"block",
		position:"absolute",
		width:"97%",
		height:"95%",
		top: '1%',left: '1%'
	}
  const image2={
    position: "relative"
   }
	const vidiloadi={
		 position:"relative",
		 height:"100%",
		 width:"100%",
		 overflow:"hidden",
	 }

    return vidLoad ? (
	    <>
		    <div>
			    <img height="100%" width="100%" style={image2} src="https://ficci-capam.framez.sg/images/audi3.jpg" />
				 	<iframe src="https://player.vimeo.com/video/451526648?autoplay=1&app_id=122963" allowFullScreen allow="autoplay; encrypted-media" style={vid} frameborder="0"></iframe>
					<Button style={logo} onClick={()=>setModalRight(true)}>
						<img src="../../../../assets/logos/slido.png" height="100%" width="100%" style={logo1}/>
	        </Button>
	        <Modal
	          isOpen={modalRight}
	          toggle={() => setModalRight(!modalRight)}
	          wrapClassName="modal-right">
	        <ModalHeader>
					 Slido
					<Button
						color="secondary"
						style={bt1}
						onClick={() => setModalRight(false)}>X
					</Button>
					</ModalHeader>
	        <ModalBody>
						<iframe src="https://app.sli.do/event/e1oazdil" height="100%" width="100%" style={slido}/>
	        </ModalBody>
	        </Modal>
		   	</div>
				</>
			) : (
				<div>
					<video autoPlay="true" onEnded={() => setLoad({isLoaded: true})} style={vidiloadi}>
						<source src={'https://ficci-capam.framez.sg/lobbyvideo/help_to_audi.mp4'} type="video/mp4" />
					</video>
				</div>
	);
};

export default injectIntl(DefaultConference);
