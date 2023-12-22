import developer from "../../assets/images/undraw_developer_activity_re_39tg.svg";
import enterprice from "../../assets/images/Business solution-pana.svg";
import banking from "../../assets/images/undraw_cms_re_asu0.svg";

const Users = () => {
  return (
    <div
      id="action"
      className="py-16 bg-cyan-50 container mx-auto px-8 md:px-16 lg:px-24"
    >
      <h2 className="text-4xl font-semibold text-center mt-1">
        Team Flow for Action
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-3 my-10">
        <div className="text-center space-y-3">
          <img className="w-[200px] h-[200px] mx-auto" src={developer} alt="" />
          <p className="font-medium  text-xl">Developer</p>
          <p className="w-[350px] text-sm">
            Connect the apps your team already uses into your Team Flow workflow
            or add a Power-Up to fine-tune your specific needs.
          </p>
        </div>

        <div className="text-center space-y-3">
          <img className="w-[200px] h-[200px] mx-auto" src={banking} alt="" />
          <p className="font-medium text-xl">Enterprice</p>
          <p className="w-[350px] text-sm">
            No-code automation is built into every Team Flow board. Focus on the
            work that matters most and let the robots do the rest.
          </p>
        </div>
        <div className="text-center space-y-3">
          <img
            className="w-[200px] h-[200px] mx-auto"
            src={enterprice}
            alt=""
          />
          <p className="font-medium text-xl">Corporate</p>
          <p className="w-[350px] text-sm">
            The productivity tool teams love, paired with the features and
            security needed for scale.s
          </p>
        </div>
      </div>
    </div>
  );
};

export default Users;
