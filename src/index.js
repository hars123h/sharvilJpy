import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateProvider } from './components/StateProvider/Stateprovider';
import reducer, {initialstate} from "./components/StateProvider/reducer"


ReactDOM.render(
  <React.StrictMode>
  <StateProvider initialstate={initialstate} reducer = {reducer}>
       <App />
  </StateProvider>
   </React.StrictMode>,
  document.getElementById('root')
);


