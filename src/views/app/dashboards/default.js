import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { Row } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import { adminRoot } from '../../../constants/defaultValues';
// import Tour from "react-user-tour";
import Vimeo from '@u-wave/react-vimeo';
import Tour, { STATUS } from "react-joyride";
import login from '../../user/login';
import { runTour } from '../../../redux/actions';

const DefaultDashboard = ({ intl,runTourAction, tourRun }) => {
  // const { messages } = intl;
  const [imgi, setimgi] = useState(false);

  const steps = [
    {
      target: "#t2",
      content: "Click here to access Helpdesk",
      disableBeacon: true,
      placement: "top",
    },
    {
      target: "#t3",
      content: "Click here to enter Conference",
      disableBeacon: true,
      placement: "top"
    },
    {
      target: "#t4",
      content: "Click here to enter Networking Lounge",
      disableBeacon: true,
      placement: "top"
    },
    {
      target: "#t5",
      content: "Click here to view Agenda",
      disableBeacon: true,
      placement: "top"
    },
    {
      target: "#t6",
      content: "Click here to view Speaker Profile",
      disableBeacon: true,
      placement: "top"
    },
    {
      target: "#a5",
      content: "Click here to view Document Library",
      disableBeacon: true,
      placement: "top"
    },
    {
      target: "#a6",
      content: "Click here for Technical Support",
      disableBeacon: true,
      placement: "top"
    }
  ]

  const main={
    overflow:"hidden",
  }
  const image={
    position: "relative",
  }
  const hdstyle1={
    display: 'flex', justifyContent: 'center', alignItems: 'center',
                   transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
                   width: '16.63%', height: '14.63%',
                   top: '75.11%',left: '41.51%',
  }
  const hdstyle={
    display: 'flex', justifyContent: 'center', alignItems: 'center',
                   transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
                   width: '16.63%', height: '14.63%',
                   top: '82.11%',left: '41.51%',
  }
  const constyle1={
    display: 'flex', justifyContent: 'center', alignItems: 'center',
                   transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
                   width: '20.52%', height: '20%',
                   top: '50.8%',left: '39.79%',
  }
  const constyle={
    display: 'flex', justifyContent: 'center', alignItems: 'center',
                   transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
                   width: '20.52%', height: '20%',
                   top: '55.93%',left: '39.79%',
  }
  const lounge1={
    display: 'flex', justifyContent: 'center', alignItems: 'center',
                   transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
                   width: '10%', height: '18.07%',
                   top: '51%',left: '21.44%',
  }
  const lounge={
    display: 'flex', justifyContent: 'center', alignItems: 'center',
                   transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
                   width: '10%', height: '18.07%',
                   top: '59.74%',left: '21.44%',
  }
  const speaker1={
    display: 'flex', justifyContent: 'center', alignItems: 'center',
                   transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
                   width: '6.61%', height: '6.37%',
                   top: '62.8%',left: '13.59%',
  }
  const speaker={
    display: 'flex', justifyContent: 'center', alignItems: 'center',
                   transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
                   width: '6.61%', height: '6.37%',
                   top: '68.11%',left: '13.59%',
  }
  const agenda1={
    display: 'flex', justifyContent: 'center', alignItems: 'center',
                   transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
                   width: '6.41%', height: '3.91%',
                   top: '70.5%',left: '13.59%',
  }
  const agenda={
    display: 'flex', justifyContent: 'center', alignItems: 'center',
                   transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
                   width: '6.41%', height: '3.91%',
                   top: '75.13%',left: '13.59%',
  }
  const doc1={
    display: 'flex', justifyContent: 'center', alignItems: 'center',
                   transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
                   width: '6.35%', height: '4.37%',
                   top: '64.2%',left: '78.96%',
  }
  const doc={
    display: 'flex', justifyContent: 'center', alignItems: 'center',
                   transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
                   width: '6.35%', height: '4.37%',
                   top: '69.2%',left: '78.96%',
  }
  const support1={
    display: 'flex', justifyContent: 'center', alignItems: 'center',
                   transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
                   width: '6.35%', height: '5.09%',
                   top: '70.59%',left: '79.01%',
  }
  const support={
    display: 'flex', justifyContent: 'center', alignItems: 'center',
                   transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
                   width: '6.35%', height: '5.09%',
                   top: '74.59%',left: '79.01%',
  }
 const video={
  cursor: "pointer",
  zIndex: 2,
  transform: "skew(0deg, 0deg)",
  position: "absolute",
  width: "17%",
  height: "17.3%",
  top: "24.75%",
  left: "41.65%"}

  const imgiload=()=>{
    if (imgi=="flex")
      setimgi(true)
    }

  return (
    <div style={main}>
    <div style={image}>
      <img style={image} height="100%" width="100%" src="https://ficci-capam.framez.sg/images/lobby.jpg" alt="main"/>
      <iframe src="https://player.vimeo.com/video/451526648?autoplay=1&app_id=122963" allowFullScreen allow="autoplay; encrypted-media" style={video} frameborder="0" alt="video">      </iframe>

      <Tour
        // disableOverlay
        showProgress={true}
        steps={steps}
        run={tourRun}
        continuous={true}
        showSkipButton={true}
        floaterProps={{ disableAnimation: true }}
        callback={data => {
          if ([STATUS.FINISHED, STATUS.SKIPPED].includes(data.status)) {
            // this.setState({ isTouropen: false })
            // this.props.togglehometour(true);
            console.log("skip pressed ")
            runTourAction()
          }
        }}
      />

      <div style={constyle1} id='t3' alt="conference"/>
      <a href={`${adminRoot}/applications/conference1`} alt="conference">
      <div style={constyle} alt="conference">
        <span className="blinkingdot" alt="conference"></span>
      </div>
      </a>

      <div style={lounge1} id='t4'/>
      <a href={`${adminRoot}/dashboards/analytics1`} alt="lounge">
      <div style={lounge}>
        <span className="blinkingdot"></span>
      </div>
      </a>

      <div style={hdstyle1} id='t2'/>
      <a href={`${adminRoot}/ui/help`} alt="help">
      <div style={hdstyle}>
        <span className="blinkingdot"></span>
      </div>
      </a>

      <div style={speaker1} id='t6'/>
      <a href={`${adminRoot}/applications/speaker`}>
      <div style={speaker}>
        <span className="blinkingdot"></span>
      </div>
      </a>
      

      <div style={agenda1} id='t5'/>
      <a href={`${adminRoot}/applications/todo`} alt="agenda">
      <div style={agenda}>
        <span className="blinkingdot"></span>
      </div>
      </a>

      <div style={doc1} id='a5'/>
      <a href={`${adminRoot}/pages/doc-lib`} alt="document">
      <div style={doc}>
        <span className="blinkingdot"></span>
      </div>
      </a>

      <div style={support1} id='a6'/>
      <a href={`${adminRoot}/ui/faq`} alt="faq">
      <div style={support}>
        <span className="blinkingdot"></span>
      </div>
      </a>
  </div>
  </div>
  );
};
const mapStateToProps = ({ authUser }) => {
  const {
    tourRun
  } = authUser;

  return {
    tourRun
  };
};
export default injectIntl(
  connect(mapStateToProps, {
    runTourAction: runTour
  })(DefaultDashboard)
);
