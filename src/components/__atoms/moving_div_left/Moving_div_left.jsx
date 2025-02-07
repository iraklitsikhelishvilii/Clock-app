import React from "react";
import styled from "styled-components";
const Movin_div_left = styled.div`
  flex-direction: column;
  margin-top: 74px;
  @media (max-width: 635px) {
    margin-top: 0px;
    gap: 20px;
  }
`;

function Moving_div_left({
  hours,
  clicked,
  Movin_div_p_txt,
  Movin_div_p2_txt,
  content,
  content2,
}) {
  const dark_color = hours >= 18 || hours < 6 ? "#FFF" : "#303030";
  const Movin_div_p = styled.p`
    color: ${dark_color};
    font-size: 15px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 3px;
    @media (max-width: 800px) {
      font-size: 13px;
      letter-spacing: 2.6px;
    }
    @media (max-width: 635px) {
      font-size: 10px;
      letter-spacing: 2px;
    }
  `;
  const Movin_div_p2 = styled.p`
    color: ${dark_color};
    font-size: 15px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 3px;
    margin-top: 42px;
    @media (max-width: 800px) {
      font-size: 13px;
      letter-spacing: 2.6px;
    }
    @media (max-width: 635px) {
      font-size: 10px;
      letter-spacing: 2px;
      margin-top: 0px;
    }
  `;
  const Moving_div_h = styled.h1`
    color: ${dark_color};
    font-size: 56px;
    font-weight: 700;
    margin-top: 9px;
    @media (max-width: 800px) {
      font-size: 40px;
      margin-top: 0px;
    }
    @media (max-width: 635px) {
      font-size: 20px;
    }
  `;
  return (
    <Movin_div_left className={clicked ? "movin_div_left" : "dissepare"}>
      <div className="Movin_div_left_minor">
        <Movin_div_p>{Movin_div_p_txt}</Movin_div_p>
        <Moving_div_h>{content}</Moving_div_h>
      </div>
      <div className="Movin_div_left_minor">
        <Movin_div_p2>{Movin_div_p2_txt}</Movin_div_p2>
        <Moving_div_h>{content2}</Moving_div_h>
      </div>
    </Movin_div_left>
  );
}

export default Moving_div_left;
