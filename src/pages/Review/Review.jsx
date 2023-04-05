// import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link, useLocation } from "react-router-dom";
import { useState,useEffect, useContext } from "react";
import {MoviesContext} from "../../Context/MoviesContext/MoviesContext"
import {getMoviesReview,deleteMovies,createMovie,deleteReviewMovies} from  "../../Context/MoviesContext/apiCalls"

import React from "react"
export default function ProductList() {
 
const{movies,dispatch}=useContext(MoviesContext);
useEffect(() => {
  getMoviesReview(dispatch);

  
}, [dispatch]);

// console.log(movies);
const handleAccept = (id) => {
  const movieToAccept = movies.find((movie) => movie._id === id);

  // Make API call to add movie to "Movie" collection
  // You will need to implement this API call yourself
  createMovie(movieToAccept);

  // Make API call to delete movie from "Review" collection
  // You will need to implement this API call yourself
  deleteReviewMovies(id);

  // Update the state in the context to reflect the changes
  dispatch({ type: "ACCEPT_MOVIE", payload: id });
};


  const handleDelete = (id) => {
    deleteMovies(id,dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "movie",
      headerName: "Movie",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.poster_path} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "genre", headerName: "Genre", width: 120 },
    { field: "release_date", headerName: "Release_date", width: 120 },
    { field: "duration", headerName: "Duration", width: 120 },
    
    
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/movie/"+params.row._id} state={{movie: params.row}}>
              <button className="productListEdit">Edit</button>
            </Link>
            <button className="productListEdit" onClick={() => handleAccept(params.row._id)}>
              Accept
            </button>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    }
,    
  ];

  return (
    <div className="productList">
       
      <DataGrid
        rows={movies}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(r)=>r._id}
      />
    </div>
  );
}
