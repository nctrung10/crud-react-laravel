import { useNavigate } from "react-router-dom";

const UserItem = ({ user }) => {
  const navigate = useNavigate();

  const backHandler = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="card my-3">
        <div className="card-body">
          <div className="row">
            <div className="col-md-4">
              <img src="" alt={`user-${user.id}_img`} width="100%" />
            </div>
            <div className="col-md-8">
              <p>Name: {user.name}</p>
              <p>Position: {user.position}</p>
              <p>Salary: ${user.salary}</p>
              <p>Email: {user.email}</p>
              <p>Address: {user.address}</p>
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn-secondary" onClick={backHandler}>Back</button>
    </>
  );
};

export default UserItem;