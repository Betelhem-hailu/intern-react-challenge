import { useState, useEffect } from "react";
import Details from "./Details";
import "../style.css";

const ListActor = () => {
  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [detail, getdetail] = useState(null);

  useEffect(() => {
    fetch("https://swapi.dev/api/people")
      .then((response) => {
        if (!response.ok) {
          throw new Error("something went wrong");
        }
        return response.json();
      })
      .then((data) => {
        setDetails(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [details]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (isLoading) {
    return <section class="dots-container">
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  </section>;
  }

  return (
    <div className="wrapper">
      <div className="container">
        {details.results &&
          details.results.map((result) => (
            <div className="person-card">
              <div className="person-name">{result.name}</div>
              <div className="person-other">{result.height}</div>
              <div className="person-other">{result.birth_year}</div>
              <button className="button" onClick={() => getdetail(result)}>
                detail
              </button>
            </div>
          ))}
          </div>
          <div>{detail && <Details detail={detail} />}</div>
    </div>
  );
};

export default ListActor;
