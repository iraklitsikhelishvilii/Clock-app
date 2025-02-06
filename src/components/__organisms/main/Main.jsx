import React, { useEffect, useState } from "react";
import "./Main.css";
import styled from "styled-components";
import main_img from "../../../assets/images/jeremy-bishop-dvACrXUExLs-unsplash.svg";
import arrows_img from "../../../assets/images/CombinedShape.svg";
import sun_img from "../../../assets/images/CombinedShape1.svg";
import Down_arrow_img from "../../../assets/images/Group3.svg";
const Main_Container = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${main_img});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

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
`;
const Author_p = styled.p`
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
`;
const Arrows_btn = styled.button`
  background-color: transparent;
  border: none;
  margin-top: 11px;
  cursor: pointer;
`;
const Main_div = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: end;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: baseline;
    gap: 80px;
  }
`;

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
    font-size: 18;
    letter-spacing: 3.6px;
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
`;
const More_btn = styled.button`
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
const Moving_div = styled.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(20.387113571166992px);
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    padding-left: 64px;
  }
`;
const Moving_div_main = styled.div`
  max-width: 1110px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 800px) {
    justify-content: start;
    gap: 84px;
  }
`;
const Movin_div_left = styled.div`
  flex-direction: column;
  margin-top: 74px;
`;
const Movin_div_p = styled.p`
  color: #303030;
  font-size: 15px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 3px;
  @media (max-width: 800px) {
    font-size: 13px;
    letter-spacing: 2.6px;
  }
`;
const Movin_div_p2 = styled.p`
  color: #303030;
  font-size: 15px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 3px;
  margin-top: 42px;
  @media (max-width: 800px) {
    font-size: 13px;
    letter-spacing: 2.6px;
  }
`;
const Moving_div_h = styled.h1`
  color: #303030;
  font-size: 56px;
  font-weight: 700;
  margin-top: 9px;
  @media (max-width: 800px) {
    font-size: 40px;
    margin-top: 0px;
  }
`;
function Main() {
  const element = (
    <p>
      “The science of operations, as derived from mathematics more <br />{" "}
      especially, is a science of itself, and has its own abstract truth <br />{" "}
      and value.”
    </p>
  );
  const element2 = (
    <p>
      “Since you get more joy out of giving joy to others, you should <br /> put
      a good deal of thought into the happiness that you are <br /> able to
      give.”
    </p>
  );
  const [clicked, setclicked] = useState(false);
  const [text, settext] = useState("More");
  const [arrowclicked, setarrowclicked] = useState(false);
  const [quote, setquote] = useState(element);
  const [author, setauthor] = useState("Ada Lovelace");
  const click = () => {
    setclicked(!clicked);
    if (text === "More") {
      settext("Less");
    } else {
      settext("More");
    }
  };
  const ArrowsClicked = () => {
    setarrowclicked(!arrowclicked);
    if (arrowclicked) {
      setquote(element2);
      setauthor("Eleanor Roosevelt");
    } else {
      setquote(element);
      setauthor("Ada Lovelace");
    }
  };
  function GetDate() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const day = Math.floor(diff / oneDay);

    let dayofweek = date.getDay();
    if (dayofweek === 0) {
      dayofweek = 7;
    }

    const currentDate = new Date();
    const week = Math.ceil(
      ((currentDate - new Date(currentDate.getFullYear(), 0, 1)) /
        (24 * 3600 * 1000) +
        1) /
        7
    );

    return {
      time: `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`,
      day,
      dayofweek,
      week,
    };
  }

  const [date, setdate] = useState(GetDate());

  useEffect(() => {
    setdate(GetDate());
    const interval = setInterval(() => {
      setdate(GetDate());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Main_Container>
        <div className={clicked ? "container_clicked" : "container"}>
          <div className={clicked ? "dissepare" : "Quotes_div"}>
            <Quotes_div_minor>
              <Quotes_div_p>{quote}</Quotes_div_p>
              <Author_p>{author}</Author_p>
            </Quotes_div_minor>
            <Arrows_btn onClick={ArrowsClicked}>
              <img src={arrows_img} alt="" />
            </Arrows_btn>
          </div>
          <Main_div>
            <div className={clicked ? "info_div_clicked" : "info_div"}>
              <Greeting_div>
                <img src={sun_img} alt="" />
                <Greeting_p>GOOD MORNING, IT’S CURRENTLY</Greeting_p>
              </Greeting_div>
              <Clock_p>
                {date.time}
                <Span>BST</Span>
              </Clock_p>
              <Location_p>IN LONDON, UK</Location_p>
            </div>
            <More_btn onClick={click}>
              <Btn_p>{text}</Btn_p>
              <img
                className={clicked ? "rotate" : ""}
                src={Down_arrow_img}
                alt=""
              />
            </More_btn>
          </Main_div>
        </div>
        <Moving_div className={clicked ? "moving_div" : "short_div"}>
          <Moving_div_main>
            <Movin_div_left
              className={clicked ? "movin_div_left" : "dissepare"}
            >
              <Movin_div_p>CURRENT TIMEZONE</Movin_div_p>
              <Moving_div_h>Europe/London</Moving_div_h>
              <Movin_div_p2>Day of the year</Movin_div_p2>
              <Moving_div_h>{date.day}</Moving_div_h>
            </Movin_div_left>
            <div className={clicked ? "line_div" : "dissepare"}></div>
            <Movin_div_left
              className={clicked ? "movin_div_left" : "dissepare"}
            >
              <Movin_div_p>Day of the week</Movin_div_p>
              <Moving_div_h>{date.dayofweek}</Moving_div_h>
              <Movin_div_p2>Week number</Movin_div_p2>
              <Moving_div_h>{date.week}</Moving_div_h>
            </Movin_div_left>
          </Moving_div_main>
        </Moving_div>
      </Main_Container>
    </>
  );
}

export default Main;
