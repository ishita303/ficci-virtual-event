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
	const [vidLoad, setLoad] = useState(false);
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
	 width: "80.3%",
	 height: "54.4%",
	 top: "7.7%",
	 left: "9.8%"
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
									 width: '500px', height: '440px',
									 top: '23.11%',left: '65.51%'
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
		    <div style={image2}>
		     <img height="100%" width="100%" style={image2} src="https://ficci-capam.framez.sg/images/audi3.jpg" />
			 	<iframe src="https://player.vimeo.com/video/451526648?autoplay=1&app_id=122963" allowFullScreen allow="autoplay; encrypted-media" style={vid} frameborder="0"></iframe>

				<Button> <img src="../../../../assets/logos/slido.png" height="100%" width="100%" style={logo} onClick={()=>slidoToggle()}/>
				 <iframe src="https://app.sli.do/event/e1oazdil" height="100%" width="100%" style={slido}/></Button>
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
