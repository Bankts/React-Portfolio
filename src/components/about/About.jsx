import "./about.css";
// import Award from "../../img/award.png";
import bts from "../../img/bts.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={bts}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        Hi, Temitayo here. I'm a creative visual and UI/UX Designer, with 3 years of experience and great attention to detail putting users front and center.
        </p>
        <p className="a-desc">
        Hi! I’m Temitayo, an adept UX/UI Designer with an adequate understanding of UI principles and immense competency in the core UX research processes with over three years of experience working as a full-time staff and on side projects as a freelancer. 
        I specialize in Mobile User Interface and User Experience (UI/UX) for iOS, Android, and website platforms. So far I have worked with various reputed companies and clients all around the globe. I'm happy to provide my service to make your product’s user interface amazing.
        </p>
        
      </div>
    </div>
  );
};

export default About;
