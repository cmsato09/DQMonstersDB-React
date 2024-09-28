import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MonsterListPage from "./pages/MonsterListPage";
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/dqm1/monsterlist',
    element: <MonsterListPage />,
  }
]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
