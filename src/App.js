
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import English from './pages/English/English';
import Jpy from './pages/Jpy/Jpy';


function App() {
  return (
    <>


      <Router>
        <Routes>
          <Route path="/" element={<English />} />
          <Route path="/jpy" element={<Jpy />} />

        </Routes>
      </Router>

    </>
  );
}

export default App;
