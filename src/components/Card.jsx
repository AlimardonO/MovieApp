import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMWRjMjdjYjA0NDJmNjI3OGYzOGE3YTE2ZmMxYmExNCIsInN1YiI6IjY0YTQyMzY5ZTlkYTY5MDBlNDBjM2VlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3Vjf82atS12q4hbf5rHS07J5Vv_xAKnwyOrJz1-9Wh4'
  }
};

const Card = () => {
  const [movie, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const fetchingData = () => {
    if (isFetching) {
      setCurrentPage(state => state + 1);
      fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${currentPage}`, options)
        .then(async resp => await resp.json())
        .then(data => setData([...movie, ...data.results]))
        .finally(() => setIsFetching(false))
    }
  }
  useEffect(() => {
    fetchingData();
  }, [isFetching]);
  // const scrollFunc = (e) => {
  //   if (e.target.documentElement.scrollHeight - (window.innerHeight + e.target.documentElement.scrollTop) < 100) {
  //     setIsFetching(false);
  //   }
  // }
  // useEffect(() => {
  //   document.addEventListener('scroll', scrollFunc)
  //   return function () {
  //     return document.removeEventListener('scroll', scrollFunc)
  //   }
  // }, []);
  return (
    <>
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-10">
        {movie.map((item) => (
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
      </section>
      <Button variant="contained" fullWidth onClick={() => setIsFetching(true)}>Load More</Button>
    </>
  );
};

export default Card;
