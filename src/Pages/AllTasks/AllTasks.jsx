import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import TaskStack from "../../Components/TaskStack/TaskStack";

const AllTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [todos, setTodos] = useState([]);
  const [doing, setDoing] = useState([]);
  const [completed, setCompleted] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const getTodos = tasks?.filter((task) => task?.status === "todo");
    const getDoing = tasks?.filter((task) => task?.status === "doing");
    const getcompleted = tasks?.filter((task) => task?.status === "completed");

    setTodos(getTodos);
    setDoing(getDoing);
    setCompleted(getcompleted);
  }, [tasks]);

  useEffect(() => {
    axiosPublic.get("/api/v1/tasks").then((res) => {
      setTasks(res.data);
    });
  }, [axiosPublic]);

  const statuses = ["todo", "doing", "completed"];

  return (
    <div>
      <h2 className="text-center text-3xl font-semibold">All Tasks</h2>

      <div className="flex gap-5 lg:gap-16 overflow-x-auto">
        {statuses?.map((status, index) => (
          <TaskStack
            key={index}
            status={status}
            tasks={tasks}
            setTasks={setTasks}
            todos={todos}
            doing={doing}
            completed={completed}
          ></TaskStack>
        ))}
      </div>
    </div>
  );
};

export default AllTasks;
