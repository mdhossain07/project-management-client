/* eslint-disable react/prop-types */
import { useDrag } from "react-dnd";
import { FaTrash } from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import moment from "moment";

const Card = ({ task, tasks, setTasks }) => {
  const { title, priority, _id, image, deadline } = task;

  const myDate = moment(deadline).format("MMMM Do YYYY");

  const axiosPublic = useAxiosPublic();

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "tasks",
    item: { id: _id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const handleRemove = (id) => {
    axiosPublic.delete(`/api/v1/remove-task/${id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        Swal.fire("Done", "Task is removed from the list", "success");
      }
      const remaining = tasks?.filter((task) => task._id === id);
      setTasks(remaining);
    });
  };

  return (
    <div className="border mt-10 border-red-500 h-[300px] w-[300px] shadow-md ">
      <div
        ref={drag}
        className={` ${isDragging ? "opacity-25" : "opacity-100"}`}
      >
        <button
          onClick={() => handleRemove(_id)}
          className="absolute right-1 bottom-5 p-3 "
        >
          <FaTrash className="text-red-500" />
        </button>
        <img src={image} className="h-[200px] w-full" alt="" />
        <h2 className="font-medium">{title}</h2>
        <div className="flex gap-16">
          <p
            className={`rounded-md px-2 capitalize  ${
              priority === "moderate" && "bg-yellow-400"
            } || 
            ${priority === "high" && "bg-red-500 text-white"}
            || ${priority === "low" && "bg-purple-500"}`}
          >
            {priority}
          </p>
          <p>{myDate}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
