
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import English from './pages/English/English';
import Jpy from './pages/Jpy/Jpy';
import { useStateValue } from './components/StateProvider/Stateprovider';


function App() {
  const [page, dispatch] = useStateValue()
  console.log(page);
  return (
    <>


          {
            page?<Jpy />:<English/>
          }
        
   
    </>
  );
}

export default App;
