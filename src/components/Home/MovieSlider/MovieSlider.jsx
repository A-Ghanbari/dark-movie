import React from "react";
import uswMovieDB from "../../../hooks/useMovieDB";
import classes from "./MovieSlider.module.scss";
import { Link } from "react-router-dom";
import "swiper/swiper-bundle.css";
import { Card, Spinner } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Pagination,
  Navigation,
  Mousewheel,
  Keyboard,
  Autoplay,
  EffectCoverflow,
} from "swiper";
SwiperCore.use([
  Pagination,
  Navigation,
  Mousewheel,
  Keyboard,
  Autoplay,
  EffectCoverflow,
]);

export default function MovieSlider() {
  const { data, loading } = uswMovieDB(
    "movie/popular",
    `page=${Math.floor(Math.random() * 100)}`
  );
  return (
    <div className={classes.slider}>
      {loading ? (
        <div className={classes.spinner}>
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="info" />
        </div>
      ) : (
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 10,
            modifier: 50,
            slideShadows: true,
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          className={classes.swiper}
        >
          {data?.results.map((movie) => {
            return (
              <SwiperSlide key={movie.id} className={classes.swiperSlide}>
                <Link to={`/movie/${movie.id}`}>
                  <Card>
                    <Card.Img
                      src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    />
                  </Card>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </div>
  );
}
