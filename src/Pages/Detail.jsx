import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import Loader from "./Loader";
const Detail = () => {
  const [show, setShow] = useState(false);
  const [currentMovie, setCurrentMovie] = useState();
  const m = useParams();
  const options2 = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMWRjMjdjYjA0NDJmNjI3OGYzOGE3YTE2ZmMxYmExNCIsInN1YiI6IjY0YTQyMzY5ZTlkYTY5MDBlNDBjM2VlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3Vjf82atS12q4hbf5rHS07J5Vv_xAKnwyOrJz1-9Wh4'
    }
  };
  const fetching = async () => {
    const result = await fetch(`https://api.themoviedb.org/3/movie/${m.id}?language=en-US`, options2);
    const json = await result.json();
    setCurrentMovie(json);
  };
  useEffect(() => {
    fetching();
  }, []);
  // box array for seat
  const box = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,];
  if (!currentMovie) {
    return <Loader />
  }
  else {
    return (
      <section
        className={`max_width px-4 grid md:grid-cols-2 lg:grid-cols-3 h-screen place-items-center pt-10 gap-4 ${show ? "overflow-hidden" : ""
          }`}
      >
        {/* img section  */}
        <div className="h-[25rem] md:h-[35rem]">
          <img
            src={'https://www.themoviedb.org/t/p/w220_and_h330_face' + currentMovie?.backdrop_path}
            alt={currentMovie?.original_title}
            className="rounded-xl"
          />
        </div>

        {/* summary section  */}
        <div className="lg:col-span-2 space-y-5 max-w-[50rem]">
          <Link
            to="/"
            className="text-para_text transition duration-200 ease-in hover:text-white hover:tracking-wider"
          >
            Home / {currentMovie?.id}
          </Link>
          <h1 className="text-6xl font-bold text-center py-2">{currentMovie?.original_title}</h1>
          <div className="flex justify-between items-center gap-4">
            <div>
              {currentMovie?.genres?.map((item) => (
                <span
                  key={item.id}
                  className="border border-white/50 rounded-lg px-3 py-1 mr-3"
                >
                  {item.name}
                </span>
              ))}
            </div>
            <button
              className="bg-blue px-4 py-1 text-xl font-semibold rounded-2xl hover:bg-blue/80 active:scale-90"
              onClick={() => setShow(true)}
            >
              Book Now
            </button>
          </div>
          <div className="px-2">
            <h1 className="font-bold text-xl mb-1">STORY:</h1>
            <p className="text-para_text">
              {currentMovie?.overview}
            </p>
          </div>
          <div className="text-para_text px-2 pb-10">
            <h1 className="text-white font-bold text-xl mb-1">DETAILS:</h1>
            <p>Status: {currentMovie?.status}</p>
            <p>First air date: {currentMovie?.release_date || "Unknown"}</p>
            <p>Spoken language: {currentMovie?.original_language}</p>
            <p>Runtime: {currentMovie?.runtime || "Unknown"} minute</p>
          </div>
        </div>

        {/* booking model  */}
        {show && (
          <form className="absolute top-0 bg-black/95 w-full h-full grid place-items-center">
            <div
              className="absolute top-3 right-3 text-4xl cursor-pointer"
              onClick={() => setShow(false)}
            >
              <RxCross2 />
            </div>
            <section className="max-w-[40rem] mx-auto border border-para_text rounded-lg p-5 ">
              <h1 className="text-center font-bold text-4xl pb-5 ">
                Booking Details
              </h1>
              <div className="flex gap-1">
                <h1>Movie Name:</h1>
                <span className="text-blue">{currentMovie?.original_title}</span>
              </div>
              <div className="flex gap-4 max-w-[20rem] flex-wrap justify-center mx-auto py-10">
                {box.map((item) => (
                  <span
                    key={item}
                    className="w-[2rem] h-[2rem] bg-white hover:bg-para_text border border-white rounded-md cursor-pointer"
                  />
                ))}
              </div>
              <Link to="/">
                <button className="bg-blue rounded-2xl px-4 py-1 w-full">
                  Submit
                </button>
              </Link>
            </section>
          </form>
        )}
      </section>
    )
  }
};

export default Detail;