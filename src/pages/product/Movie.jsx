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
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
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
                      <span className="productInfoValue">{movie.first_air_date}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">active:</span>
                      <span className="productInfoValue">yes</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">in stock:</span>
                      <span className="productInfoValue">no</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Movie Name</label>
                  <input type="text" placeholder={movie.title} />
                  <label> first_air_date</label>
                 <input type="text" placeholder={movie.first_air_date} />
                 <label> isSeries</label>
                 <input type="text" placeholder={movie.isSeries} />
                 
                 <label> Genre</label>
                 <input type="text" placeholder={movie.genre} />
                 <label> Limit</label>
                 <input type="text" placeholder={movie.limit} />
                 <label> Trailer</label>
                 <input type="file" placeholder={movie.trailer} />
                 <label> Video</label>
                 <input type="file" placeholder={movie.video} />
                  
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
