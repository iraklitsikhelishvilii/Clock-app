import React from "react";
import styled from "styled-components";
import Moving_div_left from "../../__atoms/moving_div_left/Moving_div_left";
const Moving_div_main = styled.div`
  max-width: 1110px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 74px;
  @media (max-width: 800px) {
    justify-content: start;
    gap: 84px;
  }
  @media (max-width: 635px) {
    flex-direction: column;
    gap: 20px;
    padding-right: 26px;
    padding-left: 26px;
    justify-content: space-between;
    margin-bottom: 0px;
  }
`;

function Moving_div({
  clicked,
  moving_div_dark,
  date,
  dark_line,
  hours,
  weather,
}) {
  return (
    <div className={clicked ? `${moving_div_dark}` : "short_div"}>
      <Moving_div_main>
        <Moving_div_left
          hours={hours}
          clicked={clicked}
          date={date}
          weather={weather}
          Movin_div_p_txt="CURRENT TIMEZONE"
          Movin_div_p2_txt="Day of the year"
          content={weather ? `${weather.name}` : null}
          content2={date.day}
        />
        <div className={clicked ? `${dark_line}` : "dissepare"}></div>

        <Moving_div_left
          hours={hours}
          clicked={clicked}
          date={date}
          weather={weather}
          Movin_div_p_txt="Day of the week"
          Movin_div_p2_txt="Week number"
          content={date.dayofweek}
          content2={date.week}
        />
      </Moving_div_main>
    </div>
  );
}

export default Moving_div;
