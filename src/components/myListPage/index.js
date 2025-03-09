import { useSelector } from "react-redux";

import MovieCard from "../common/MovieCard";

const MyList = () => {
  const myList = useSelector((state) => state.myList.myList);

  console.log(myList);

  return (
    <>
      {myList.length === 0 ? <p>Brak filmów w liście</p> : null}
      {myList.map((movie) => (
        <MovieCard
          key={movie.title}
          linkto={`/detail/${movie.id}`}
          src={movie.cardImg}
          alt={movie.title}
        />
      ))}
    </>
  );
};

export default MyList;
