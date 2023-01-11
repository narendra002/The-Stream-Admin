import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
import React from "react"
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import TvShowList from "./pages/productList/TvShowList"
import Movie from "./pages/product/Movie";
import TvShow from "./pages/product/TvShows";
import NewProduct from "./pages/newProduct/NewProduct";
import NewTvShow from "./pages/newProduct/NewTvShow";
function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
     
          <Route path="/users"
         element={<UserList />}/>
          <Route path="/user/:userId"
           element={<User />}/>
      
          <Route path="/newUser"
           element={<User />}/>
          <Route path="/movies"element={<ProductList />}/>
          <Route path="/tvShow"element={<TvShowList />}/>
          <Route path="/movie/:movieId"element={<Movie />}/>
          <Route path="/tvShow/:tvShowId"element={<TvShow />}/>
          <Route path="/newproduct"element={<NewProduct />}/>
          <Route path="/newTvShow"element={<NewTvShow />}/>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
