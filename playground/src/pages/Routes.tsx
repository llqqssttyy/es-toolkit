import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { PlaygroundPage } from './PlaygroundPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PlaygroundPage />,
  },
  {
    path: '*',
    element: <Navigate to="/" replace={true} />,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
