import {Routes, Route} from 'react-router-dom'
import MenuSuperior from "./components/MenuSuperior"
import InclusaoLivros from "./components/InclusaoLivros"
import ManutencaoLivros from './components/ManutencaoLivros'
import ResumoLivros from './components/ResumoLivros'

function App() {
  return (
    <>
      <MenuSuperior/>
      <Routes>
        <Route path='/' element={<InclusaoLivros />} />
        <Route path='manut' element={<ManutencaoLivros />} />
        <Route path='resumo' element={<ResumoLivros />} />
      </Routes>
    </>
  );
}

export default App;
