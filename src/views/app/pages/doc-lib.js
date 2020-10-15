import React, { useState } from 'react';
import {
  Row,
  Card,
  CardBody,
  CardTitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Input,
  Label, } from 'reactstrap';
import IntlMessages from '../../../helpers/IntlMessages';
import {
  Colxx,
  Separator,
} from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import { NavLink } from 'react-router-dom';

const BlogList = ({ match }) => {
  const [modalBasic, setModalBasic] = useState(false);
  const [backdrop, setBackdrop] = useState(true);
  const [closeAll, setCloseAll] = useState(false);
  const [modalLarge, setModalLarge] = useState(true);
  const [modalLarge1, setModalLarge1] = useState(true);
  const [modalLarge2, setModalLarge2] = useState(false);
  const [modalLarge3, setModalLarge3] = useState(false);
  const [modalLarge4, setModalLarge4] = useState(false);
  const [modalLarge5, setModalLarge5] = useState(false);
  const [modalLarge6, setModalLarge6] = useState(false);
  const [myLink, setLink] = useState("https://ficci-capam.framez.sg/docs/Sponsors.pdf");
  const maindivi={
    position:"inline-block",
  }
  const divi={
    width:"27%",
    float:"right",
    position:"relative",
    borderRadius:"20px",
    border: "2px solid rgba(34,41,47,.125"
  }
  const leftdivi={
    height:"400px",
    width:"70%",
    float:"left",
    position:"relative"
  }
  const list={
    listStyle:'none',
    float:"right"
  }
  const listitem={
    position:"relative",
    padding: "3px 5px 5px 0px",
    backgroundcolor: "#fff",
    fontSize:"14px",
  }
  const listitemactive={
    position:"relative",
    padding: "10px 5px 5px 0px",
    backgroundcolor: "#fff",
    textcolor:"purple" ,
    fontSize:"14.6px",
    fontAlign:"center"
  }
  const listitemlast={
    position:"relative",
    padding: "5px 50px 5px 5px",
    marginBottom: "5px",
    backgroundcolor: "#fff",
    fontSize:"14.6px",
  }

  return (
    <>
    <div>
        <Modal
                isOpen={modalLarge1}
                toggle={() => setModalLarge1(!modalLarge1)}
                style={{maxWidth: "800px"}}
              >
                <ModalHeader>
                  DOCUMENT LIBRARY
                </ModalHeader>
                <ModalBody>
                <div style={maindivi}>
                  <div style={leftdivi}>
                  <iframe src={myLink} height="500px" width="100%">
                    <embed width="100%" height="100%" src={myLink} type="application/pdf" />
                  </iframe>
                  </div>
                  <div style={divi}>
                  <ul style={list}>
                    <li style={listitemactive}
                      onClick={() => setLink("https://ficci-capam.framez.sg/docs/Sponsors.pdf")}>SPONSORS<hr/></li>
                    <li style={listitem}
                        onClick={() => setLink("https://ficci-capam.framez.sg/docs/FICCI%20EOS%20-%20July%202020.pdf")}>FICCI EOS - JULY 2020 <hr/></li>
                    <li style={listitem}
                        onClick={() => setLink("https://ficci-capam.framez.sg/docs/Sponsors.pdf")}>MANUFACTURING SURVEY REPORT <hr/></li>
                    <li style={listitem}
                        onClick={() => setLink("https://ficci-capam.framez.sg/docs/FICCI%20EOS%20-%20July%202020.pdf")}>FICCI DHRUVA SURVEY <hr/></li>
                    <li style={listitem}
                        onClick={() => setLink("https://ficci-capam.framez.sg/docs/Sponsors.pdf")}>WOB_FINAL REPORT_3103_V12 <hr/></li>
                    <li style={listitem}
                        onClick={() => setLink("https://ficci-capam.framez.sg/docs/FICCI%20EOS%20-%20July%202020.pdf")}>CAPAM COMPENDIUM 2020 <hr/></li>
                    <li style={listitemlast}
                        onClick={() => setLink("https://ficci-capam.framez.sg/docs/Sponsors.pdf")}>L&T PROFILE </li>
                  </ul>
                  </div>
                </div>
                </ModalBody>
                <ModalFooter>
                  <Button
                    color="secondary"
                    onClick={() => setModalLarge1(false)}
                  >
                    Cancel
                  </Button>
                </ModalFooter>
              </Modal>
      </div>
      </>
  );
};

export default BlogList;
