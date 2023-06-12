import UserForm from "../components/UserForm";

function CreateUserPage() {

  return (
    <div className="row">
      <div className="col-12 col-sm-8 mx-auto">
        <h4 className="mb-3">Create User</h4>
        <UserForm method="post" />
      </div>
    </div>
  );
}

export default CreateUserPage;


