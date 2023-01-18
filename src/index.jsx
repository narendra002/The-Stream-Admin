import React from "react"
import ReactDOM from 'react-dom/client'
import App from './App'
import {MoviesContextProvider} from './Context/MoviesContext/MoviesContext'
import {TvShowContextProvider} from './Context/TvShowContext/TvShowsContext'
import { UserContextProvider } from "./Context/UsersContext/UsersContext"
import reportWebVitals from './reportWebVitals';
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<UserContextProvider>
		<MoviesContextProvider>
			<TvShowContextProvider>
		<App />
		
		</TvShowContextProvider>
	</MoviesContextProvider>	
	</UserContextProvider>
	</React.StrictMode>
) 
reportWebVitals();