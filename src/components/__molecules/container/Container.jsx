import React from "react";
import styled from "styled-components";
import More_btn from "../../__atoms/more_btn/More_btn";
import Greeting_div_func from "../../__atoms/greeting_div/Greeting_div";
import Quotes_box from "../../__atoms/quotes_box/Quotes_box";

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
  @media (max-width: 635px) {
    margin-top: 79px;
    margin-bottom: 40px;
  }
`;

function Container({
  clicked,
  quote,
  author,
  ArrowsClicked,
  arrows_img,
  Greetig_img_toggle,
  greeting_text_toggle,
  date,
  city,
  country,
  click,
  text,
  Down_arrow_img,
}) {
  return (
    <div className={clicked ? "container_clicked" : "container"}>
      <Quotes_box
        clicked={clicked}
        quote={quote}
        author={author}
        ArrowsClicked={ArrowsClicked}
        arrows_img={arrows_img}
      />
      <Main_div>
        <Greeting_div_func
          clicked={clicked}
          Greetig_img_toggle={Greetig_img_toggle}
          greeting_text_toggle={greeting_text_toggle}
          date={date}
          city={city}
          country={country}
        />
        <More_btn
          click={click}
          text={text}
          clicked={clicked}
          Down_arrow_img={Down_arrow_img}
        />
      </Main_div>
    </div>
  );
}

export default Container;
