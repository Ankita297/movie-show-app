import React, { useEffect, useState } from "react";
import "./style.css";
import MovieCard from "../MovieCard/MovieCard";

const Home = () => {
  const [list, setList] = useState([]);

  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const responsedata = async () => {
    setLoading(true);
    setIsError(false);
    try {
      const response = await fetch("https://api.tvmaze.com/search/shows?q=all");

      const result = await response.json();
      console.log(result);
      setList(result);
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    responsedata();
  }, []);

  return (
    <div className="mt-5 pt-5">
      {isError && <div>Something went wrong ...</div>}

      {loading && !isError && "loading"}

      {!loading && !isError && (
        <>
          {list.map((x, index) => {
            return <MovieCard x={x} index={index} />;
          })}
        </>
      )}
    </div>
  );
};

export default Home;
