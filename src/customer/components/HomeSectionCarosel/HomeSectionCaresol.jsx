import React from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function HomeSectionCaresol() {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const items = [1, 1, 1, 1, 1,1 ,1,1,1,1].map((item) => <HomeSectionCard />);

  return (
    <div className="px-4 lg:px-8 border border-black">
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableButtonsControls
          autoPlayInterval={2000}
          infinite
          responsive={responsive}
          disableDotsControls
        />
        <Button
          variant="contained"
          className="z-50 bg-white"
          sx={{
            position: "absolute",
            top: "8rem",
            right: "0rem",
            transform: "translateX(50%) rotate(90deg)",
            bgcolor: "white",

          }}
          aria-label="next"
        >
          <ArrowBackIosIcon sx={{transform:"rotate(90deg)", color: "black"}} /> 
          {/* 1:12:40 */}
        </Button>

        <Button
          variant="contained"
          className="z-50 bg-white"
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: "translateX(50%) rotate(-90deg)",
            bgcolor: "white",
            
          }}
          aria-label="next"
        >
          <ArrowBackIosIcon sx={{transform:"rotate(90deg)", color: "black"}} /> 
          {/* 1:12:40 */}
        </Button>
      </div>
    </div>
  );
}

export default HomeSectionCaresol;
