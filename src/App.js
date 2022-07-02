import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Cardsdetails from './component/Cardsdetails';
import Cards from './component/Cards';
function App() {
  return (
    <>
   <Header/>
   <Routes>
     <Route path='/' element={<Cards/>} />
     <Route path='/Cart/:id' element={<Cardsdetails/>} />
   </Routes>
    </>

  );
}

export default App;
