import { useEffect, useState } from "react";
import axios from 'axios';


//  /movie/popular?

/* const api_key= 'c4084f4ff50cb99442df8d12e1551bdc'
// const baseURL="https://api.themoviedb.org/3"
const baseURL="https://api.themoviedb.org/3/movie/popular?api_key=c4084f4ff50cb99442df8d12e1551bdc&language=en-US&page=1"
 */ 

const LearnPage = () => {
    
  const [videoPost, setvideoPost] = useState(null);
  const [err, setErr] = useState(null);
  useEffect(() => {
   /*  setLoading(true); */
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=c4084f4ff50cb99442df8d12e1551bdc&language=en-US&page=2"
      )
      .then((res) => {
        setvideoPost(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => {
        setErr(err);
      })
      .finally(() => {
        /* setLoading(false); */
      });
  }, []);




    return ( 
  <div className="container">

{ videoPost && videoPost.map ((video)=> {
    
    return(
   <div className="video__section">
<div className="video__container">
<div className="image__section">
<img src={`https://image.tmdb.org/t/p/w200${video.poster_path}`} alt="" />

</div>

<div className="header">
  <h4> {video.title} </h4>
  <p> {`Popularity ${video.popularity}`} </p>
</div>


</div>


   </div>
    );
    
  })}

  </div>
 
    );
}
 
export default LearnPage;