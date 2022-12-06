import holliday from "./../img/holliday.png";
import painting from "./../img/painting.jpg";
import painting2 from "./../img/painting2.jpg";
import painting3 from "./../img/painting3.jpg";
import { ArrowDownCircle } from "react-bootstrap-icons";

const AboutMe = () => {
  return (
    <div id="about-page">
      <div id="about-heading-section">
        <div id="heading-text-container">
          <h1>Oh Hi!</h1>
          <h2>You want to know more?</h2>
          <ArrowDownCircle />
        </div>
        <img src={holliday} alt="Face shot of me!"></img>
      </div>
      <div id="about-text-container">
        <p>
          I've been a web developer and UX designer since the beginning of 2022
          when I started my diploma in Web/UX design and since then have become
          obsessed with coding awesome fun sites that are fully desiged by me!
        </p>
        <p>
          I have since become a skilled designer and a passionate developer,
          creating fun little websites in my spare time and continuing to learn
          and extend my knowledge.
        </p>
        <p>
          Before Web and UX design I spent most of my time creating art, I love
          painting, drawing, crafting and creating and I have always been a very
          logical and precise artist so Web Development fits me well!
        </p>
      </div>
      <div id="art-section">
        <h2>Some Of My Art</h2>
        <img src={painting} alt="swirly hippy painting"></img>
        <img
          src={painting2}
          alt="concentric circles blue and purple painting"
        ></img>
        <img src={painting3} alt="purple and green swirling grid"></img>
        <button>See More Art</button>
      </div>
      <div id="final-text">
        <p>
          Apart from art, I love a great many different hobbies, I like to play
          music, mostly on my ukulele, I enjoy roller skating, surfing, sewing
          clothes and being social.
        </p>
        <p>Also I'm obsessed with unicorns!</p>
      </div>
    </div>
  );
};

export default AboutMe;
