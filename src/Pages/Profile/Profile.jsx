import useAuth from "../../hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2 className="text-4xl font-semibold px-5 mt-5">
        Welcome Back, {user?.displayName}
      </h2>
      <img src={user?.photoURL} className=" h-[200px] w-[200px] p-5" alt="" />
      <div className="px-5">
        <p>{user?.displayName}</p>
        <p>{user?.email}</p>
      </div>
    </div>
  );
};

export default Profile;
