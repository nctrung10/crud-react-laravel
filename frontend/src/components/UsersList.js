import { Link, useSubmit } from "react-router-dom";

const UsersList = ({ users }) => {
  const submit = useSubmit();

  const deleteHandler = (userId) => {
    const proceed = window.confirm('Are you sure to delete this one?');
    
    if (proceed) {
      submit(null, { method: 'DELETE', action: `/users/${userId}/delete` });
    }
    
  };

  return (
    <div className="my-3">
      <div className="d-flex justify-content-between align-items-center">
        <h4>Users List</h4>
        <Link to="create" className="btn btn-primary btn-sm">Create User</Link>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Position</th>
            <th scope="col">Email</th>
            <th scope="col" className="text-end">Actions</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {users.map((user, index) => (
            <tr key={index}>
              <th scope="row">{++index}</th>
              <td>{user.name}</td>
              <td>{user.position}</td>
              <td>{user.email}</td>
              <td className="text-end">
                <Link to={`${user.id}/edit`} state={user}>
                  Edit
                </Link>
                <Link className="text-success px-2" to={`/users/${user.id}`} state={user}>
                  Show
                </Link>
                <button
                  className="btn btn-link p-0 text-danger align-baseline"
                  onClick={() => deleteHandler(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
