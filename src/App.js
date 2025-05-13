import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import BreedingMechanicsPage from './pages/BreedingMechanicsPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ItemListPage from './pages/ItemPage';
import MonsterListPage from './pages/MonsterListPage';
import MonsterProfilePage from './pages/MonsterProfilePage';
import NotFoundPage from './pages/NotFoundPage';
import SkillListPage from './pages/SkillListPage';
import SkillProfilePage from './pages/SkillProfilePage';

import Layout from './layout/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />
      },
      {
        path: 'contact',
        element: <ContactPage />
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
    ],
  }
]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
