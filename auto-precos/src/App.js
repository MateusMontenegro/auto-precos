import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Container from './components/Container';
import MercadoLivre from './pages/Mercadolivre';
import Magalu from './pages/Magalu';
import Inicio from './pages/Inicio';
import ViaVarejo from './pages/ViaVarejo';
import Footer from './components/Footer';

import NavBar from './components/Navbar';


function App() {
  return (
    <div className="App">
       <Router>
         <NavBar/>
         <Container>
         <Routes>
           <Route path='/' exact element={<Inicio/>}>Atualização de Preços</Route>
           <Route path='mercadolivre' element={<MercadoLivre/>}>MercadoLivre</Route>
           <Route path='magalu' element={<Magalu/>}>Magalu</Route>
           <Route path='via' element={<ViaVarejo/>}>Via Varejo</Route>
         </Routes>
         </Container>
         <Footer/>
       </Router>
      
    </div>
  );
}

export default App;
