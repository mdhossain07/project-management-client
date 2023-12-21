import useAuth from "../../hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2>User Profile</h2>
      <img src={user?.photoURL} className=" h-[200px] w-[200px]" alt="" />
      <p>{user?.displayName}</p>
    </div>
  );
};

export default Profile;
