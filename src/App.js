import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MonsterListPage from './pages/MonsterListPage';
import MonsterProfilePage from './pages/MonsterProfilePage';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/Navbar';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/dqm1/monsterlist',
    element: <MonsterListPage />,
  },
  {
    path: 'dqm1/monsterlist/:monsterId',
    element: <MonsterProfilePage />
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
