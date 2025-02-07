import React from "react";
import styled from "styled-components";
const Greeting_div = styled.div`
  display: flex;
  gap: 16px;
`;
const Greeting_p = styled.p`
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 4px;
  @media (max-width: 800px) {
    font-size: 18px;
    letter-spacing: 3.6px;
  }
  @media (max-width: 635px) {
    font-size: 13px;
    line-height: 25px;
    letter-spacing: 3px;
  }
`;
const Clock_p = styled.p`
  color: #fff;
  font-size: 200px;
  font-weight: 700;
  line-height: 200px;
  letter-spacing: -5px;
  margin-top: 16px;
  @media (max-width: 800px) {
    font-size: 175px;
    line-height: 175px;
    letter-spacing: -4.375px;
    margin-top: 0px;
  }
  @media (max-width: 635px) {
    font-size: 100px;
    line-height: 100px;
    letter-spacing: -2.5px;
    margin-top: 16px;
  }
`;
const Span = styled.span`
  color: #fff;
  font-size: 40px;
  font-weight: 300;
  line-height: 28px;
  letter-spacing: 2px;
  margin-left: 11px;

  @media (max-width: 800px) {
    font-size: 32px;
  }
  @media (max-width: 635px) {
    font-size: 15px;
  }
`;
const Location_p = styled.p`
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 4.8px;
  margin-top: 16px;
  @media (max-width: 800px) {
    font-size: 18px;
    letter-spacing: 3.6px;
    margin-top: 0px;
  }
  @media (max-width: 635px) {
    font-size: 15px;
    letter-spacing: 3px;
    margin-top: 16px;
  }
`;
function Greeting_div_func({
  clicked,
  Greetig_img_toggle,
  greeting_text_toggle,
  date,
  weather,
}) {
  return (
    <div className={clicked ? "info_div_clicked" : "info_div"}>
      <Greeting_div>
        <img src={Greetig_img_toggle} alt="" />
        <Greeting_p>{greeting_text_toggle}</Greeting_p>
      </Greeting_div>
      <Clock_p>
        {date.time}
        <Span>BST</Span>
      </Clock_p>
      <Location_p>{weather ? `${weather.name}` : null}</Location_p>
    </div>
  );
}

export default Greeting_div_func;
