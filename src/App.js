import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import MonsterListPage from "./pages/MonsterListPage";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dqm1/monsterlist" element={<MonsterListPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
