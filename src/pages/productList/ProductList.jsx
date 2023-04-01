import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link, useLocation } from "react-router-dom";
import { useState,useEffect, useContext } from "react";
import {MoviesContext} from "../../Context/MoviesContext/MoviesContext"
import {getMovies,deleteMovies} from  "../../Context/MoviesContext/apiCalls"

import React from "react"
export default function ProductList() {
 
const{movies,dispatch}=useContext(MoviesContext);
useEffect(() => {
  getMovies(dispatch);

  
}, [dispatch]);

// console.log(movies);


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
            <Link 
          
            
            
            
            to={"/movie/"+params.row._id}
            state={{movie: params.row}}>
    
            
            
            
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
       <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
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
