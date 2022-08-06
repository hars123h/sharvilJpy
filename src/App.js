
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import English from './pages/English/English';
import Jpy from './pages/Jpy/Jpy';
import { useEffect, useState } from 'react';


function App() {
  // localStorage.setItem('Eng',true)
  const[Eng, setEng] = useState(localStorage.getItem('Eng'))
  // localStorage.setItem('Eng',Eng)
  useEffect(() => {
    localStorage.setItem('Eng',Eng)
    setCurrentPage(localStorage.getItem('Eng'))
  }, [Eng])
  const [Page, setCurrentPage] = useState()
  const setPage =()=>{
  
    setEng(Eng === "Jpy"?"Eng":"Jpy")
    window.location.reload()
  }
 
  
  return (
    <>


          {
            Page==="Jpy"?<Jpy setPage={setPage} />:<English setPage={setPage} />
          }
        
   
    </>
  );
}

export default App;
