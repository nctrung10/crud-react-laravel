import { Suspense } from 'react';
import { json, useLoaderData, Await, defer, redirect } from 'react-router-dom';

import UsersList from '../components/UsersList';

function UsersPage() {
  const { users } = useLoaderData();
  
  const fallbackContent = <p className='text-center mt-3'>Loading users....</p>;

  return (
    <Suspense fallback={fallbackContent}>
      <Await resolve={users}>
        {loadUsers => <UsersList users={loadUsers} />}
      </Await>
    </Suspense>
  );
}

export default UsersPage;

async function loadUsers() {
  const response = await fetch('http://localhost:8000/api/users');

  if (!response.ok) {
    // Using defer(), then could not use thrown Response object
    // So must handle your own ErrorResponse, for example by using `statusText` like this: 
    throw json("", { status: 500, statusText: 'Could not fetch users.'});
  } else {
    const data = await response.json();
    return data;
  }
}

// Add a loader function to get users data (using defer to await upcoming data)
export function loader() {
  return defer({
    users: loadUsers(),
  });
}

// Delete user via action & useSubmit into <UsersList /> + fake url '/delete' in App's router
export async function action({ request, params }) {
  const reqMethod = request.method;

  const url = `http://localhost:8000/api/users/${params.userId}`;

  const response = await fetch(url, {
    method: reqMethod
  });

  if (!response.ok) {
    throw json(
      { message: 'Could not delete user.' },
      { status: 500 }
    );
  }

  return redirect('/users');
}