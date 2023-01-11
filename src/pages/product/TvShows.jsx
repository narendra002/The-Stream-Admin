import { Link, useLocation } from "react-router-dom";
import "./product.css";
import React from "react";
import { Publish } from "@material-ui/icons";

export default function Product() {
    const location=useLocation();
    const { tvshow } = location.state;
 console.log(tvshow);

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Tv Show</h1>
        <Link to="/newTvShow">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
         
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img className="productInfoImg" src={tvshow.poster_path}/>
                  <span className="productName">{tvshow.title}</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">Id: </span>
                      <span className="productInfoValue">{tvshow._id}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Year:</span>
                      <span className="productInfoValue">{tvshow.first_air_date}</span>
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
                  <label>TvShow Name</label>
                  <input type="text" placeholder={tvshow.title} />
                  <label> first_air_date</label>
                 <input type="text" placeholder={tvshow.first_air_date} />
                 <label> isSeries</label>
                 <input type="text" placeholder={tvshow.isSeries} />
                 
                 <label> Genre</label>
                 <input type="text" placeholder={tvshow.genre} />
                 <label> Limit</label>
                 <input type="text" placeholder={tvshow.limit} />
                 <label> Trailer</label>
                 <input type="file" placeholder={tvshow.trailer} />
                 <label> Video</label>
                 <input type="file" placeholder={tvshow.video} />
                  
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src={tvshow.backdrop_path} alt="" className="productUploadImg" />
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
