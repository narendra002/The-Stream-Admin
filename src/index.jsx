import React from "react"
import ReactDOM from 'react-dom/client'
import App from './App'
import {MoviesContextProvider} from './Context/MoviesContext/MoviesContext'
import reportWebVitals from './reportWebVitals';
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<MoviesContextProvider>
		<App />
	</MoviesContextProvider>	
	</React.StrictMode>
) 
reportWebVitals();