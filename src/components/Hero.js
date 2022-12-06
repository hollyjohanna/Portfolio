import heroimg from "./../img/heroimg.png";

const Hero = () => {
  return (
    <div id="hero">
      <div id="hero-text-container">
        <h1>Hello,</h1>
        <div id="h2-container">
          <h2>I'm</h2>
          <h2 id="holliday">Holliday</h2>
        </div>
        <p id="desktop-tagline">Lets make a beautiful website together</p>
      </div>
      <img src={heroimg} alt="Holliday in a yellow striped jumper"></img>
      <p id="mobile-tagline">Lets make a beautiful website together</p>
    </div>
  );
};

export default Hero;
