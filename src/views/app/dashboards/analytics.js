import React,{useState} from 'react';
import { injectIntl } from 'react-intl';
import { Row, Button } from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import Vimeo from '@u-wave/react-vimeo';


const DashboardAnalytics = ({ intl, match }) => {
  const [showSlido,setSlidoshow]=useState("none");
  const [vidLoad, setLoad] = useState(false);

  const image1={
    position: "relative"
   }
   const vid={
    transform: "skew(0deg, 0deg)",
    position: "absolute",
    width: "19.84%",
    height: "22%",
    top: "21%",
    left: "39.84%"}

   let slido={
     display:showSlido, justifyContent: 'center', alignItems: 'center',
                    transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
                    width: '500px', height: '600px',
                    top: '3.11%',left: '59.51%'
      }
    const logo={
      display: 'flex', justifyContent: 'center', alignItems: 'center',
                      transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
                      width: '70px', height: '70px',
                      top: '78%',left: '91.31%'
    }
    const slidoToggle=()=>{
      if (showSlido=="flex")
        setSlidoshow("none")
      else
        setSlidoshow("flex")
    }
    const vidiloadi={
       position:"relative",
       height:"100%",
       width:"100%",
       overflow:"hidden",
     }

  return vidLoad ? (
	   <>
      <div style={image1}>
       <img height="100%" width="100%" style={image1} src="https://ficci-capam.framez.sg/images/lounge.jpg" alt="lounge"/>
       <iframe src="https://player.vimeo.com/video/451526648?autoplay=1&app_id=122963" allowFullScreen allow="autoplay; encrypted-media" style={vid} frameborder="0"></iframe>
       <Button><img src="../../../../assets/logos/chat.png" height="100%" width="100%" style={logo}  onClick={()=>slidoToggle()}/></Button>
       <iframe src="../applications/chat" height="100%" width="100%" style={slido}/>
      </div>
    </>
    ) : (
      <div>
        <video autoPlay="true" onEnded={() => setLoad({isLoaded: true})} style={vidiloadi}>
          <source src={'https://ficci-capam.framez.sg/lobbyvideo/help_to_lounge.mp4'} type="video/mp4" />
        </video>
      </div>
    );
};
export default injectIntl(DashboardAnalytics);
