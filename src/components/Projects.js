import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { DefaultProjectCard } from "./DefaultProjectCard";
import img from "../assets/img/img.jpg";
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.jpg";
// import img5 from "../assets/img/img5.jpg";
// import img6 from "../assets/img/img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import CreatePetitionCard from "./CreatePetitionCard";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import { onValue, ref } from "firebase/database";

export const Projects = () => {
  const [petitions, setPetitions] = useState([]);

  useEffect(() => {
    onValue(ref(db, `/`), (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      let arr = [];
      Object.values(data).forEach(e => {
          Object.values(e).forEach(s=>{
            arr.push(s);
          })
      });
      // console.log(arr)
      setPetitions(arr);
    });
  }, []);

  const projects = [
    {
      title: "Toxic Air,Toxic Health",
      description: "Design & Development",
      imgUrl: img1,
    },
    {
      title: "Gender Neutrality",
      description: "Design & Development",
      imgUrl: img2,
    },
    {
      title: "End Racism",
      description: "Design & Development",
      imgUrl: img3,
    },
    {
      title: "Reduce our Carbon Footprint",
      description: "Design & Development",
      imgUrl: img4,
    },
    // {
    //   title: "Tree lives matter",
    //   description: "Design & Development",
    //   imgUrl: img5,
    // },
    // {
    //   title: "Protect our Tigers",
    //   description: "Design & Development",
    //   imgUrl: img6,
    // },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Petitions</h2>
                  <p>
                    Welcome to our Petitions section! Here we have a range of
                    all the existing petitions where you can vote to show your
                    support or Create your own petition to move people towards
                    your cause!
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                      style={{ cursor: "pointer" }}
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Existing Petitions</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Create a Petition</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Petition Policy</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map(e=>(
                            <DefaultProjectCard title={e.title} desc={e.desc} imgUrl={e.imgUrl}/>
                          ))}
                          {petitions.map((e) => (
                            <ProjectCard title={e.title} desc={e.desc} wid={e.walletId} pid={e.petitionId} count={e.count} />
                          ))} 
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <CreatePetitionCard />
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          The aim of HelpingHands.co.in is to create a change
                          while also introducing it's users to the world of
                          WEB-3. With the help of using WEB-3 Wallets to sign
                          you in, we ensure user animosity.All your votes and
                          petitions are created using your unique walletId and
                          not your actual credentials.
                        </p>
                        <p>Happy Helping!</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
