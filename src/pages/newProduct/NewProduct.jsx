import "./newProduct.css";
import React from "react";
import { useState } from "react";
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";

import {MoviesContext} from "../../Context/MoviesContext/MoviesContext";
import { createMovie } from "../../Context/MoviesContext/apiCalls";
import { useContext } from "react";
export default function NewProduct() {
  const [movie, setMovie] = useState(null);
  const [img, setImg] = useState(null);
  const [imgTitle, setImgTitle] = useState(null);
  const [imgSmall, setImgSmall] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);
  const [uploaded, setUploaded] = useState(0);
  const{dispatch}=useContext(MoviesContext)
  // const storage = getStorage();
  const upload = (items) => {
    items.forEach((item) => {
      
      // const uploadTask = storage.ref(`/items/${items.name}`).put(item);
if(!item.file) 
return;
console.log(item.file.name);

      const storageRef = ref(storage, `/items/${item.file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, item.file);

     
  
  uploadTask.on('state_changed',
  (snapshot) => {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    
  }, 
  (error) => {
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break;
      case 'storage/canceled':
        // User canceled the upload
        break;

      // ...

      case 'storage/unknown':
        // Unknown error occurred, inspect error.serverResponse
        break;
    }
  }, 
  () => {
    // Upload completed successfully, now we can get the download URL
    getDownloadURL(uploadTask.snapshot.ref).then((url) => {
      setMovie((prev) => {
                return { ...prev, [item.label]: url };
              });
              setUploaded((prev) => prev + 1);
            });
          }
        );

        });
      }

  const handleUpload = (e) => {
    e.preventDefault();
    upload([
      { file: img, label: "poster_path" },
      { file: imgTitle, label: "backdrop_path" },
      { file: imgSmall, label: "poster_path" },
      { file: trailer, label: "trailer" },
      { file: video, label: "video" },
    ]);
    // console.log(e.target.name);
  };
  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({
      ...movie,
      [e.target.name]: value,
    });

    // console.log(movie);
  };
 const handleSubmission =(e)=>{
  e.preventDefault();
  createMovie(movie,dispatch);
  console.log(movie);
 }
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Movie</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input
            type="file"
            id="img"
            name="img"
            onChange={(e) => setImg(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label> Title image</label>
          <input
            type="file"
            id="imgTitle"
            name="imgTitle"
            onChange={(e) => setImgTitle(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label> Thumbnail image</label>
          <input
            type="file"
            id="imgSmall"
            name="imgSmall"
            onChange={(e) => setImgSmall(e.target.files[0])}
          />
        </div>

        <div className="addProductItem">
          <label>Title</label>
          <input
            type="text"
            placeholder="John Wick"
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Desciption</label>
          <input
            type="text"
            placeholder="Desciption"
            name="description"
            onChange={handleChange}
          />
        </div>

        <div className="addProductItem">
          <label>Limit</label>
          <input
            type="text"
            placeholder="limit"
            name="limit"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>first_air_date</label>
          <input
            type="text"
            placeholder="first_air_date"
            name="year"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <input
            type="text"
            placeholder="genre"
            name="genre"
            onChange={handleChange}
          />
        </div>

        <div className="addProductItem">
          <label>IsSeries</label>
          <select name="isSeries" id="active" onChange={handleChange}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="addProductItem">
          <label> Trailer </label>
          <input
            type="file"
            id="trailer"
            name="trailer"
            onChange={(e) => setTrailer(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label> Video</label>
          <input
            type="file"
            id="video"
            name="video"
            onChange={(e) => setVideo(e.target.files[0])}
          />
        </div>
        {uploaded === 4? (
          <button className="addProductButton"
          
          onClick={handleSubmission}
          >Create</button>
        ) : (
          <button className="addProductButton" onClick={handleUpload}>
            Upload
          </button>
        )}
      </form>
    </div>
  );
}
