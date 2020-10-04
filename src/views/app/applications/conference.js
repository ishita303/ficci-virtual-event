import React,{useState} from 'react';
import {
	Route,
	Redirect,
} from 'react-router-dom';
import { injectIntl } from 'react-intl';
import { Row, Button  } from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import Vimeo from '@u-wave/react-vimeo';

const DefaultConference = ({ intl, match }) => {
	const [showSlido,setSlidoshow]=useState("none");
	const logo={
		display: 'flex', justifyContent: 'center', alignItems: 'center',
										transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
										width: '50px', height: '50px',
										top: '81%',left: '94.31%'
	}
	const slidoToggle=()=>{
		if (showSlido=="flex")
			setSlidoshow("none")
		else
			setSlidoshow("flex")
	}
	let slido={
		display:showSlido, justifyContent: 'center', alignItems: 'center',
									 transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
									 width: '350px', height: '440px',
									 top: '25.11%',left: '71.51%'
	}
  const image2={
    position: "relative"
   }
   const vid={
	cursor: "pointer",
	zIndex: "2",
	transform: "skew(0deg, 0deg)",
	position: "absolute",
	width: "54.74%",
	height: "54.81%",
	top: "7.5%",
	left: "22.6%"
   }
    return (
    <div style={image2}>
     <img height="100%" width="100%" style={image2} src="https://ficci-capam.framez.sg/images/audi3.jpg" />
	 <iframe src="https://player.vimeo.com/video/451526648?autoplay=1&app_id=122963" allowFullScreen allow="autoplay; encrypted-media" style={vid}>      </iframe>
     
		 <img src="../../../../assets/logos/slido.png" height="100%" width="100%" style={logo} onClick={()=>slidoToggle()}/>
		 <iframe src="https://app.sli.do/event/e1oazdil" height="100%" width="100%" style={slido}/>
     </div>
    );
};

export default injectIntl(DefaultConference);
