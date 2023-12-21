import Card from "../Card/Card";

/* eslint-disable react/prop-types */
const TaskStack = ({ status, tasks, setTasks, todos, doing, completed }) => {
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
    <div className="w-64">
      <StackTitle text={text} bg={bg} count={myTasks?.length} />
      {myTasks.map((task) => (
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
