import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UserContext } from './Context/UsersContext/UsersContext';
import Signin from './pages/login/Signin';
import Home from './pages/home/Home';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import TvShowList from './pages/productList/TvShowList';
import Movie from './pages/product/Movie';
import TvShow from './pages/product/TvShows';
import NewProduct from './pages/newProduct/NewProduct';
import NewTvShow from './pages/newProduct/NewTvShow';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import './App.css';
import { NavigateBefore } from '@material-ui/icons';

function App() {
  const { User } = useContext(UserContext);
  return (
    <Router>
      
      
        {User ? (
          <>
          <Topbar />
          <div className='container'>
            <Sidebar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/users' element={<UserList />} />
              <Route path='/user/:userId' element={<User />} />
              <Route path='/newUser' element={<NewUser />} />
              <Route path='/movies' element={<ProductList />} />
              <Route path='/tvShow' element={<TvShowList />} />
              <Route path='/movie/:movieId' element={<Movie />} />
              <Route path='/tvShow/:tvShowId' element={<TvShow />} />
              <Route path='/newproduct' element={<NewProduct />} />
              <Route path='/newTvShow' element={<NewTvShow />} />
            </Routes>
         </div> </>
        ) : (
          <Routes>
            
            <Route path='/login' element={<Signin />} />
            <Route path='/' element={<Navigate to='/login' />} />
          </Routes>
        )}
      
    </Router>
  );
}

export default App;
