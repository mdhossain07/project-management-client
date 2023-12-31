import { Link } from "react-router-dom";
import bannerImg from "../../assets/images/undraw_completed_tasks_vs6q.svg";

const Banner = () => {
  return (
    <div
      id="home"
      className="container mx-auto px-8 md:px-16 lg:px-24 min-h-[calc(100vh-64px)] lg:min-h-[calc(100vh-82px)] bg-gradient-to-r from-purple-500 to-pink-500"
    >
      <div className="min-h-[calc(100vh-82px)] flex flex-col lg:flex-row lg:gap-24 items-center">
        <div className="text-white my-10 space-y-5">
          <h2 className="text-4xl lg:text-5xl font-bold  lg:w-[600px] text-center lg:text-start">
            Team Flow brings all your tasks, teammates, and tools together
          </h2>
          <p className="text-center lg:text-start text-lg">
            Keep everything in the same place—even if your team isn’t.
          </p>
          <Link to="/login">
            <div className="flex justify-center lg:justify-start">
              <button className="mt-5 text-center bg-blue-600 p-3 rounded-xl">
                Lets Explore
              </button>
            </div>
          </Link>
        </div>

        <div>
          <img className="w-[400px] lg:w-[500px]" src={bannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
