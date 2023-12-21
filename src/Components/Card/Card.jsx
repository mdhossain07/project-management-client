/* eslint-disable react/prop-types */
import { useDrag } from "react-dnd";
import { FaTrash } from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import moment from "moment";

const Card = ({ task, tasks, setTasks }) => {
  const { title, priority, _id, image, deadline } = task;

  const myDate = moment(deadline).format("MMMM D, YYYY");

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
    <div className="mt-2 py-3 h-[330px] w-[300px] shadow-md rounded-md">
      <div
        ref={drag}
        className={` ${isDragging ? "opacity-25" : "opacity-100"}`}
      >
        <img src={image} className="h-[200px] w-full p-3" alt="" />
        <div className="flex gap-10">
          <h2 className="font-medium ml-2 w-[210px]">{title}</h2>
          <button onClick={() => handleRemove(_id)}>
            <FaTrash className="text-red-500" />
          </button>
        </div>

        <div className="flex gap-10 mt-3">
          <p
            className={`rounded-md px-2 capitalize ml-2  ${
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
