import React from "react";
import styled from "styled-components";
const Quotes_div_minor = styled.div`
  display: flex;
  flex-direction: column;
  display: flex;
  align-items: start;
  gap: 13px;
`;
const Quotes_div_p = styled.p`
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  @media (max-width: 635px) {
    font-size: 12px;
    line-height: 22px;
  }
`;
const Author_p = styled.p`
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  @media (max-width: 635px) {
    font-size: 12px;
    line-height: 22px;
  }
`;
const Arrows_btn = styled.button`
  background-color: transparent;
  border: none;
  margin-top: 11px;
  cursor: pointer;
`;
function Quotes_box({ clicked, quote, author, ArrowsClicked, arrows_img }) {
  return (
    <div className={clicked ? "Quotes_div_dissepare" : "Quotes_div"}>
      <Quotes_div_minor>
        <Quotes_div_p>{quote}</Quotes_div_p>
        <Author_p>{author}</Author_p>
      </Quotes_div_minor>
      <Arrows_btn onClick={ArrowsClicked}>
        <img src={arrows_img} alt="" />
      </Arrows_btn>
    </div>
  );
}

export default Quotes_box;
