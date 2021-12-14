import "./about.css";
import { reactLogo } from "../../assets";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            className="a-img"
            src="https://images.pexels.com/photos/4218883/pexels-photo-4218883.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          ></img>
        </div>
      </div>

      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        {/* <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p> */}
        <p className="a-desc">
          Hello I'am a web design and frontend developer, I create Web App,
          Single Page Web, Web Landing and Other Application using React Js.
        </p>
        <p className="a-desc">
          React.js is an open-source JavaScript library that is used for
          building user interfaces specifically for single-page applications.
          It’s used for handling the view layer for web and mobile apps.
        </p>
        <div className="a-award">
          <img src={reactLogo} className="a-award-img"></img>
          <div className="a-award-texts">
            <h4 className="a-award-title">Why Using React Js ?</h4>
            <p className="a-award-desc">
              React also allows us to create reusable UI components. React was
              first created by Jordan Walke, a software engineer working for
              Facebook. React first deployed on Facebook’s newsfeed in 2011 and
              on Instagram.com in 2012.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
