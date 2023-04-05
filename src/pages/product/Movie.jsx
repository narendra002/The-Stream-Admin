import { Link, useLocation } from "react-router-dom";
import "./product.css";
import React from "react";
import { Publish } from "@material-ui/icons";

export default function Product() {
    const location=useLocation();
    const { movie } = location.state;
 console.log(movie);

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Movie</h1>
       
      </div>
      <div className="productTop">
         
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img className="productInfoImg" src={movie.poster_path}/>
                  <span className="productName">{movie.title}</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">Id: </span>
                      <span className="productInfoValue">{movie._id}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Year:</span>
                      <span className="productInfoValue">{movie.release_date}</span>
                  </div>
                 
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Movie Name</label>
                  <input type="text" placeholder={movie.title} />
                  <label> Release Date</label>
                 <input type="text" placeholder={movie.release_date} />
               
                 
                 <label> Genre</label>
                 <input type="text" placeholder={movie.genre} />
                 <label> Duration</label>
                 <input type="text" placeholder={movie.duration} />
                 <label> Trailer</label>
                 <input type="text" placeholder={movie.trailer} />
                 <label> Video</label>
                 <input type="text" placeholder={movie.video} />
                  
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src={movie.backdrop_path} alt="" className="productUploadImg" />
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton">Update</button>
              </div>
          </form>
      </div>
    </div>
  );
}
