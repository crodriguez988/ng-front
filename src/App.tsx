import './App.css';
import Menu from './pages/navbar/menu/Menu';
import Home from './pages/home/Home';
import Jeux from './pages/listeJeux/ListeJeux'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import JeuInfos from './pages/jeu/JeuInfos';
import Connexion from './pages/connexion/Connexion';

function App() {
  return (
    <>
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/jeux' element={<Jeux />}/>
          <Route path="/jeuInfos/:id" element={<JeuInfos /> } />
          <Route path="/connexion" element={<Connexion />} />
        </Routes>
      </Router>     
    </>
  );
}

export default App;
