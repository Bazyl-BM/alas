import React from "react";
import SliderContext from "./context";
import ShowDetailsButton from "./ShowDetailsButton";
import "./Item.scss";

const Item = ({ movie }) => (
  <SliderContext.Consumer>
    {({ onSelectSlide, currentSlide, elementRef }) => {
      return (
        <div ref={elementRef} className={"item"}>
          <img src={movie.image} alt="" />
          <ShowDetailsButton title={movie.title} />
        </div>
      );
    }}
  </SliderContext.Consumer>
);

export default Item;
