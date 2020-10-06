import React from "react";
import 'animate.css';
import Background from "./assets/ACS_SC_39_SDCC_EvieAssassination_watermark_211604.0.jpg";
import {CarouselComponent} from "./components/CarouselComponent";

export const Home = () => {
  return (
    <div>
      <CarouselComponent />
      <p class="animate__animated animate__fadeInUp" style={{fontWeight: "bold"}}>Check out my Discord Server!</p>
      <iframe src="https://discordapp.com/widget?id=338216289304707072&theme=dark" width="100%" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
    </div>
  );
};
