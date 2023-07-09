import React, { useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import useStore from "../store/store";

const Card = () => {
  const fetchingData = useStore(state => state.fetchingData);
  const movies = useStore(state => state.movieList);
  useEffect(() => {
    fetchingData();
  }, []);
  return (
    <>
      {movies.map((item) => (
        <Link
          key={item.id}
          to={`/${item.id}`}
          className="bg-black relative transition duration-200 ease-in transform hover:scale-110"
        >
          <div className="h-[20rem] sm:h-[25rem] lg:h-[30rem]">
            <img
              src={'https://www.themoviedb.org/t/p/w220_and_h330_face' + item.backdrop_path}
              alt={item.original_title}
              className="rounded-t-md"
            />
          </div>
          <h1 className="text-center py-2 text-xl">{item.original_title}</h1>
          <div className="absolute top-2 left-2 bg-blue rounded-full px-2 py-1 text-sm flex items-center gap-1">
            <span>{item.vote_average.toFixed(1)}</span>
            <AiFillStar className="text-lg" />
          </div>
        </Link>
      ))}
    </>
  );
};

export default Card;
