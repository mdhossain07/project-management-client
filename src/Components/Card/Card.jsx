/* eslint-disable react/prop-types */
import { useDrag } from "react-dnd";
import { FaTrash } from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const Card = ({ task, tasks, setTasks }) => {
  const { title, status, priority, _id } = task;
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
    });
    const remaining = tasks.filter((task) => task._id !== id);
    setTasks(remaining);
  };

  return (
    <div>
      <div
        ref={drag}
        className="relative p-4 mt-8 shadow-md rounded-md cursor-grab"
      >
        <button
          onClick={() => handleRemove(_id)}
          className="absolute right-1 bottom-5 p-3 "
        >
          <FaTrash className="text-red-500" />
        </button>
        <h2>{title}</h2>
        <p>{priority}</p>
      </div>
    </div>
  );
};

export default Card;
