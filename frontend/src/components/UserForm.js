import { Form, json, redirect, useNavigate, useNavigation } from "react-router-dom";

const UserForm = ({ method, user }) => {
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === 'loading' || navigation.state === 'submitting';

  const cancelHandler = () => {
    navigate(-1);
  };

  return (
    <Form method={method}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          required
          defaultValue={user ? user.name : ''}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          required
          defaultValue={user ? user.email : ''}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="position" className="form-label">Position</label>
        <input
          type="text"
          className="form-control"
          id="position"
          name="position"
          required
          defaultValue={user ? user.position : ''}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="salary" className="form-label">Salary</label>
        <input
          type="number"
          className="form-control"
          id="salary"
          name="salary"
          required
          defaultValue={user ? user.salary : ''}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="address" className="form-label">Address</label>
        <input
          type="text"
          className="form-control"
          id="address"
          name="address"
          required
          defaultValue={user ? user.address : ''}
        />
      </div>

      <button
        type="button"
        className="btn btn-secondary"
        onClick={cancelHandler}
        disabled={isSubmitting}
      >
        Cancel
      </button>
      <button className="btn btn-primary mx-2" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : (user ? 'Save' : 'Create')}
      </button>
    </Form>
  );
};

export default UserForm;

// Add a action() to manipulate the user data
export async function action({ request, params }) {
  const reqMethod = request.method;

  const data = await request.formData();

  const userData = {
    name: data.get('name'),
    email: data.get('email'),
    position: data.get('position'),
    salary: data.get('salary'),
    address: data.get('address'),
  };

  let url = 'http://localhost:8000/api/users';

  if (reqMethod === 'PATCH') {
    url = `http://localhost:8000/api/users/${params.userId}`;
  }

  const response = await fetch(url, {
    method: reqMethod,
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(userData)
  });

  if (!response.ok) {
    throw json({ message: 'Could not save user.' }, { status: 500 });
  }

  return redirect('/users');
}