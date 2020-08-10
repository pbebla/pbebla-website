import React from "react";
import ReactTwitchEmbedVideo from "react-twitch-embed-video";
import { CarouselComponent } from "./components/CarouselComponent";

export const Home = () => {
  return (
    <div>
      <CarouselComponent />
      <p>Home</p>
      <ReactTwitchEmbedVideo
        channel="cynaschism"
        height="480"
        muted={false}
        targetId="twitch-embed"
        width="100%"
        layout="video-with-chat"
      />
    </div>
  );
};
