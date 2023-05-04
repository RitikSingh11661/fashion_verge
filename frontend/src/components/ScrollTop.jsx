import React from "react";
import ScrollToTop from "react-scroll-to-top";

const ScrollTop = () => {
  return (
    <div>
      <ScrollToTop
        smooth
        width="40"
        color="white"
        style={{ background: "black", borderRadius: "50%" }}
      />
    </div>
  );
};

export default ScrollTop;
