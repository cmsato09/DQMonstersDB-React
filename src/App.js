import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BreedingMechanicsPage from './pages/BreedingMechanicsPage';
import HomePage from './pages/HomePage';
import ItemListPage from './pages/ItemPage';
import MonsterListPage from './pages/MonsterListPage';
import MonsterProfilePage from './pages/MonsterProfilePage';
import NotFoundPage from './pages/NotFoundPage';
import SkillListPage from './pages/SkillListPage';
import SkillProfilePage from './pages/SkillProfilePage';

import Navbar from './components/Navbar';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/dqm1/breedingmechanics',
    element: <BreedingMechanicsPage />
  },
  {
    path: '/dqm1/monsterlist',
    element: <MonsterListPage />,
  },
  {
    path: 'dqm1/monsterlist/:monsterId',
    element: <MonsterProfilePage />,
  },
  {
    path: 'dqm1/skills',
    element: <SkillListPage />,
  },
  {
    path: 'dqm1/skills/:skillId',
    element: <SkillProfilePage />,
  },
  {
    path: 'dqm1/items',
    element: <ItemListPage />
  },

]);


function App() {
  return (
    <div>
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
