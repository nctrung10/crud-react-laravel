import { useLocation } from "react-router-dom";

import UserForm from "../components/UserForm";

function EditUserPage() {
  const { state } = useLocation();

  return (
    <div className="row">
      <div className="col-12 col-sm-8 mx-auto">
        <h4 className="mb-3">Edit User</h4>
        <UserForm user={state} method="patch" />
      </div>
    </div>
  );
}

export default EditUserPage;