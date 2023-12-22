import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import TaskStack from "../../Components/TaskStack/TaskStack";
import useAuth from "../../hooks/useAuth";

const AllTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [todos, setTodos] = useState([]);
  const [doing, setDoing] = useState([]);
  const [completed, setCompleted] = useState([]);
  const axiosPublic = useAxiosPublic();
  const { user, loading } = useAuth();

  useEffect(() => {
    axiosPublic.get(`/api/v1/task/${user?.email}`).then((res) => {
      setTasks(res.data);
    });
  }, [axiosPublic, user?.email]);

  useEffect(() => {
    const getTodos = tasks?.filter((task) => task?.status === "todo");
    const getDoing = tasks?.filter((task) => task?.status === "doing");
    const getcompleted = tasks?.filter((task) => task?.status === "completed");

    setTodos(getTodos);
    setDoing(getDoing);
    setCompleted(getcompleted);
  }, [tasks, user]);

  const statuses = ["todo", "doing", "completed"];

  return (
    <div>
      <h2 className="text-center text-3xl font-semibold my-10">All Tasks</h2>
      <div>
        {loading ? (
          <span className="loading loading-infinity loading-lg"></span>
        ) : (
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-16 ml-5 lg:px-24">
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
        )}
      </div>
    </div>
  );
};

export default AllTasks;
