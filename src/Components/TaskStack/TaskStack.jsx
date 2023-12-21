/* eslint-disable react/prop-types */
import { useDrop } from "react-dnd";
import Card from "../Card/Card";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const TaskStack = ({ status, tasks, setTasks, todos, doing, completed }) => {
  const axiosPublic = useAxiosPublic();

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "tasks",
    drop: (item) => addToStack(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addToStack = (id) => {
    setTasks((prev) => {
      const moveTask = prev.map((task) => {
        if (task._id === id) {
          const updatedStatus = { status };
          axiosPublic
            .patch(`/api/v1/update-task/${id}`, updatedStatus)
            .then((res) => {
              if (res.data.modifiedCount > 0) {
                Swal.fire(
                  "Done",
                  `Task moved to ${updatedStatus.status} Stack`,
                  "success"
                );
              }
            });
          return { ...task, status: status };
        }
        return task;
      });
      console.log(moveTask);

      return moveTask;
    });
  };

  let text = "todo";
  let bg = "bg-orange-500";
  let myTasks = todos;

  if (status === "doing") {
    text = "doing";
    bg = "bg-blue-500";
    myTasks = doing;
  }

  if (status === "completed") {
    text = "completed";
    bg = "bg-green-500";
    myTasks = completed;
  }

  return (
    <div
      ref={drop}
      className={`w-64 rounded-md p-2 ${isOver ? "bg-slate-200" : ""}`}
    >
      <StackTitle text={text} bg={bg} count={myTasks?.length} />

      {myTasks?.map((task) => (
        <Card
          key={task._id}
          task={task}
          tasks={tasks}
          setTasks={setTasks}
        ></Card>
      ))}
    </div>
  );
};

const StackTitle = ({ text, bg, count }) => {
  return (
    <div
      className={`${bg} flex items-center justify-center h-14  uppercase text-white rounded-md`}
    >
      {text}
      <div className="ml-2 flex items-center justify-center rounded-full w-5 h-5 bg-white text-black">
        {count}
      </div>
    </div>
  );
};

export default TaskStack;
