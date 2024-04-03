import './App.css'
import Animais from './pages/Animais/Animais';
import Depoimentos from './pages/Depoimentos/Depoimentos';
import Fotos from './pages/Fotos/Fotos';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import FormAnimal from './components/FormAnimal/FormAnimal';
import { BrowserRouter as Roteador, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
      <Roteador>
        <Routes>

          <Route exact path='/' Component={Home} />
          <Route exact path='/animais' Component={Animais} />
          <Route exact path='/Fotos' Component={Fotos} />
          <Route exact path='/Depoimentos' Component={Depoimentos} />
          <Route exact path='/Login' Component={Login} />
          <Route exact path='/FormAnimal' Component={FormAnimal} />

        </Routes>
      </Roteador>
    </>
  );
}

export default App