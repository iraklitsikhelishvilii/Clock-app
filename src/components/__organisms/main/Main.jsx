import React, { useEffect, useState } from "react";
import "./Main.css";
import styled from "styled-components";
import main_img from "../../../assets/images/jeremy-bishop-dvACrXUExLs-unsplash.svg";
import arrows_img from "../../../assets/images/CombinedShape.svg";
import sun_img from "../../../assets/images/CombinedShape1.svg";
import moon_img from "../../../assets/images/moon.svg";
import Down_arrow_img from "../../../assets/images/down_arrow_img.svg";
import dark_img from "../../../assets/images/dark_img.svg";
import Container from "../../__molecules/container/Container";
import Moving_div from "../../__molecules/moving_div/Moving_div";

function Main() {
  const hours = new Date().getHours();
  const bgimg = hours >= 18 || hours < 6 ? dark_img : main_img;
  const Main_Container = styled.div`
    height: 100vh;
    width: 100%;
    background-image: url(${bgimg});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const element = (
    <p>
      “The science of operations, as derived from mathematics more{" "}
      <br className="desktop" /> especially, is a science of itself, and has its
      own abstract truth <br className="desktop" /> and value.”
    </p>
  );
  const element2 = (
    <p>
      “Since you get more joy out of giving joy to others, you should{" "}
      <br className="desktop" /> put a good deal of thought into the happiness
      that you are <br className="desktop" /> able to give.”
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
    setarrowclicked((prevState) => {
      const newState = !prevState;
      if (newState) {
        setquote(element2);
        setauthor("Eleanor Roosevelt");
      } else {
        setquote(element);
        setauthor("Ada Lovelace");
      }
      return newState;
    });
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

  const dark_line = hours >= 18 || hours < 6 ? "line_div_dark" : "line_div";
  const moving_div_dark =
    hours >= 18 || hours < 6 ? "moving_div_dark" : "moving_div";
  const greeting_text_toggle =
    hours >= 18 || hours < 6
      ? "GOOD EVENING, IT’S CURRENTLY"
      : "GOOD MORNING, IT’S CURRENTLY";
  const Greetig_img_toggle =
    hours >= 18 || hours < 6 ? `${moon_img}` : `${sun_img}`;

  const [location, setLocation] = useState(null);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [continent, setContinent] = useState("");

  const API_KEY = "dc1f03954d004e2f8cbbc65a77f47fd4";

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  }, []);

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation({ latitude, longitude });

    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

    fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.results.length > 0) {
          const city =
            data.results[0].components.city || data.results[0].components.town;
          const country = data.results[0].components.country;
          const continent = data.results[0].components.continent;
          setCity(city);
          setCountry(country);
          setContinent(continent);
        }
      })
      .catch((error) => console.log("Error fetching location data:", error));
  }

  function error() {
    console.log("Unable to retrieve your location");
  }
  return (
    <>
      <Main_Container>
        <Container
          clicked={clicked}
          quote={quote}
          author={author}
          ArrowsClicked={ArrowsClicked}
          arrows_img={arrows_img}
          Greetig_img_toggle={Greetig_img_toggle}
          greeting_text_toggle={greeting_text_toggle}
          date={date}
          click={click}
          text={text}
          Down_arrow_img={Down_arrow_img}
          city={city}
          country={country}
        />
        <Moving_div
          clicked={clicked}
          moving_div_dark={moving_div_dark}
          date={date}
          dark_line={dark_line}
          hours={hours}
          continent={continent}
          city={city}
        />
      </Main_Container>
    </>
  );
}

export default Main;
