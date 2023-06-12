import { useLocation, } from "react-router-dom";

import UserItem from "../components/UserItem";

function UserDetailPage() {
  const { state } = useLocation();

  return (
    <>
      <h4>User Detail</h4>
      <UserItem user={state} />
    </>
  );
}

export default UserDetailPage;
