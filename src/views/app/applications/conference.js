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
										width: '70px', height: '70px',
										top: '79%',left: '91.31%'
	}
	const vid={
	 transform: `skew(${0}deg, ${0}deg)`,
	 position: 'absolute',
	 width: "50%",
	 height: "55%",
	 top: "7.7%",
	 left: "29.3%"
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
									 top: '23.11%',left: '68.51%'
	}
  const image2={
    position: "relative"
   }

    return (
    <div>
     <img height="100%" width="100%" style={image2} src="https://ficci-capam.framez.sg/images/audi3.jpg" />
		 <iframe src="https://player.vimeo.com/video/451526648?autoplay=1&app_id=122963" allowFullScreen allow="autoplay; encrypted-media" style={vid} frameborder="0"></iframe>
		 <img src="../../../../assets/logos/slido.png" height="100%" width="100%" style={logo} onClick={()=>slidoToggle()}/>
		 <iframe src="https://app.sli.do/event/e1oazdil" height="100%" width="100%" style={slido}/>
     </div>
    );
};

export default injectIntl(DefaultConference);
