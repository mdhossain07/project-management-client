import developer from "../../assets/images/undraw_developer_activity_re_39tg.svg";
import enterprice from "../../assets/images/Business solution-pana.svg";
import banking from "../../assets/images/undraw_cms_re_asu0.svg";

const Users = () => {
  return (
    <div className="my-10">
      <h2>Users</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-6">
        <div className="text-center space-y-3">
          <img className="w-[200px] h-[200px] mx-auto" src={developer} alt="" />
          <p className="font-semibold  text-xl">Developer</p>
          <p className="w-[300px] text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
            nihil!
          </p>
        </div>

        <div className="text-center space-y-3">
          <img className="w-[200px] h-[200px] mx-auto" src={banking} alt="" />
          <p className="font-semibold  text-xl">Enterprice</p>
          <p className="w-[300px] text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
            nihil!
          </p>
        </div>
        <div className="text-center space-y-3">
          <img
            className="w-[200px] h-[200px] mx-auto"
            src={enterprice}
            alt=""
          />
          <p className="font-semibold  text-xl">Corporate</p>
          <p className="w-[300px] text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
            nihil!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Users;
