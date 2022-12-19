import { useState } from "react";
import { Link } from 'gatsby';
import useInterval from "../../custom_hooks/useInterval";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { TitleCard } from "../../components"
import { workCreativeBG, workDevBG, workVideoBG } from '../../media/home'

const SKILLS_TEXT_ARRAY = ["Python", "JavaScript", "Ruby", "React", "HTML/CSS", "Ruby on Rails", "Shell Scripting", "FFmpeg", "Final Cut Pro", "Premiere Pro", "After Effects"]

const TITLE_CARD_INFO = [
  {title: 'SOFTWARE DEVELOPMENT', background: workDevBG, alt:'Software and Web Development Card', category: 'Software'},
  {title:'VIDEO PRODUCTION', background: workVideoBG, alt:'Video Production Card', category: 'Video'},
  {title:'CREATIVE PROJECTS', background: workCreativeBG, alt:'Creative Projects Card', category: 'Creative'}
]

const HomeWork = () => {

  const titleCards = TITLE_CARD_INFO.map(({title, background, alt, category}, index) =>
    <Col lg="4" key={index}>
      <Link to="/work" state={{fromLink: category}}>
        <TitleCard {...{title, background, alt}}></TitleCard>
      </Link>
    </Col>
  );
  
  function CycleSkillsText() {
    const [skillsTextIndex, setskillsTextIndex] = useState(0);
  
    useInterval(() => {
      let index = skillsTextIndex
      index = ++index % SKILLS_TEXT_ARRAY.length
      setskillsTextIndex(index);
    }, 1150);
  
    return SKILLS_TEXT_ARRAY[skillsTextIndex]
  }
  
  return (
    <section className="home-work bg--light">
      <Container fluid className="py-5">
      <Row className="pb-2 pb-lg-4 px-lg-5 px-xl-7">
            <Col xs="8" lg="5" className="mx-auto">
        <h1 className="home-work__header border-bottom border-dark align-self-center card-title text-center pb-3">My Work</h1>
            </Col>
        </Row>
        <Row className="text-center pb-lg-3">
          <Col>
          <p className="home-work__lead lead text-center">I solve technical and <br className="d-md-none"/>creative problems using:
            <br className="d-xl-none"/>
          </p>
          <Link
            className="home-work__skills-button btn btn-outline-dark btn-lg btn-block ms-lg-3 mb-3 mt-3 mt-xl-0"
            role="button"
            to="/work"
          >
            {CycleSkillsText()}
          </Link>
          </Col>
        </Row>
        <Row className="pt-2 px-5 g-3 g-lg-4">
            {titleCards}
        </Row>
      </Container>
    </section>
  );
}

export default HomeWork;