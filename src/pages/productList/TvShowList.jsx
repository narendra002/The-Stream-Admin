import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link, useLocation } from "react-router-dom";
import { useState,useEffect, useContext } from "react";
import {MoviesContext} from "../../Context/MoviesContext/MoviesContext"
import {TvShowsContext} from "../../Context/TvShowContext/TvShowsContext"

import {getMovies,deleteMovies} from  "../../Context/MoviesContext/apiCalls"

import React from "react"
import { deleteTvShow, getTvShows } from "../../Context/TvShowContext/apiCalls";
export default function ProductList() {
 
const{tvShows,dispatch}=useContext(TvShowsContext);
useEffect(() => {
  getTvShows(dispatch);

  
}, [dispatch]);

console.log(tvShows);


  const handleDelete = (id) => {
    deleteTvShow(id,dispatch);
  };
  
  const columns = [
   
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "tvshow",
      headerName: "TvShow",
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
    { field: "first_air_date", headerName: "first_air_date", width: 120 },
    { field: "limit", headerName: "limit", width: 120 },
    { field: "isSeries", headerName: "isSeries", width: 120 },
    
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link 
            // to= {"/product/"+params.row._id}  state={{movie:params.row}}
            
            
            
            to={"/tvshow/"+params.row._id}
            state={{tvshow: params.row}}>
            
            
            {/* > */}
            
            
            
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
      <Link to="/newTvShow">
  <button className="productAddButton">Create</button>
</Link>
      <DataGrid
      
        rows={tvShows}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(r)=>r._id}
      />
    </div>
  );
}
