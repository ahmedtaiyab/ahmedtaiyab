import React from "react";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "react-awesome-slider/dist/styles.css";
import styles from "./styles.module.css";
import Slide from "../Slide/Slide";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const AnimatedSlider = () => {
  return (
    <AutoplaySlider
      animation="cubeAnimation"
      play={false}
      cancelOnInteraction={true}
      interval={3000}
      className={styles.slider}
      buttons={false}
      bullets={false}
    >
      <div style={{ backgroundColor: "#fff", height: "100vh" }}>
        <Slide
          image={"https://picsum.photos/200/300?random=1"}
          title={"Explore Laces"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem."
          }
          action={"Explore"}
        />
      </div>
      <div style={{ backgroundColor: "#fff", height: "100vh" }}>
        <Slide
          image={"https://picsum.photos/200/300?random=2"}
          title={"Explore Accessories"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem."
          }
          action={"Explore"}
        />
      </div>
      <div style={{ backgroundColor: "#fff", height: "100vh" }}>
        <Slide
          image={"https://picsum.photos/200/300?random=3"}
          title={"Explore Fabrics"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem."
          }
          action={"Explore"}
        />
      </div>
    </AutoplaySlider>
  );
};

export default AnimatedSlider;
