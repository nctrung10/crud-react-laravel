import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import UsersRootLayout from './pages/UsersRoot';
import UsersPage, {
  loader as usersLoader,
  action as deleteUserAction
} from './pages/Users';
import EditUserPage from './pages/EditUser';
import UserDetailPage from './pages/UserDetail';
import CreateUserPage from './pages/CreateUser';
import { action as manipulateUserAction } from './components/UserForm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'users',
        element: <UsersRootLayout />,
        children: [
          {
            index: true,
            element: <UsersPage />,
            loader: usersLoader
          },
          {
            path: ':userId',
            children: [
              {
                index: true,
                element: <UserDetailPage />,
              },
              {
                path: 'edit',
                element: <EditUserPage />,
                action: manipulateUserAction,
              },
              {
                path: 'delete', // fake a url for deleting user
                action: deleteUserAction
              }
            ],
          },
          {
            path: 'create',
            element: <CreateUserPage />,
            action: manipulateUserAction,
          }
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
