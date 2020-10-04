import React,{useState} from 'react';
import { injectIntl } from 'react-intl';
import { Row, Button } from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import Vimeo from '@u-wave/react-vimeo';


const DashboardAnalytics = ({ intl, match }) => {
  const [showSlido,setSlidoshow]=useState("none");
  const image1={
    position: "relative"
   }
   const vid={
    cursor: "pointer",
    zIndex: "2",
    transform: "skew(0deg, 0deg)",
    position: "absolute",
    width: "19.5%",
    height: "19.91%",
    top: "22.59%",
    left: "44.2%"}
 
   let slido={
     display:showSlido, justifyContent: 'center', alignItems: 'center',
                    transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
                    width: '500px', height: '600px',
                    top: '5.11%',left: '61.51%'
   }
  const logo={
    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
                    width: '50px', height: '50px',
                    top: '83%',left: '94.31%'
  }
  const slidoToggle=()=>{
    if (showSlido=="flex")
      setSlidoshow("none")
    else
      setSlidoshow("flex")
  }
    return (
    <div>
     <img height="100%" width="100%" style={image1} src="https://ficci-capam.framez.sg/images/lounge.jpg" />

     
     <iframe src="https://player.vimeo.com/video/451526648?autoplay=1&app_id=122963" allowFullScreen allow="autoplay; encrypted-media" style={vid}>      </iframe>
     
     <img src="../../../../assets/logos/chat.png" height="100%" width="100%" style={logo}  onClick={()=>slidoToggle()}/>
     <iframe src="../applications/chat" height="100%" width="100%" style={slido}/>
    </div>
    );
};
export default injectIntl(DashboardAnalytics);
