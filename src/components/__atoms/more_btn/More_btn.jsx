import React from "react";
import styled from "styled-components";
const More_button = styled.button`
  height: 56px;
  border-radius: 28px;
  background: #fff;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 13px;
  padding-left: 21px;
  padding-right: 9px;
  cursor: pointer;
`;
const Btn_p = styled.p`
  color: #000;
  font-size: 16px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 5px;
`;
function More_btn({ click, text, clicked, Down_arrow_img }) {
  return (
    <More_button onClick={click}>
      <Btn_p>{text}</Btn_p>
      <div className="More_button_div">
        <img
          className={clicked ? "rotate" : "till_rotate"}
          src={Down_arrow_img}
          alt=""
        />
      </div>
    </More_button>
  );
}

export default More_btn;
