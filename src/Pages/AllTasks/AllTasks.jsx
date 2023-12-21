import { useDrag } from "react-dnd";

const AllTasks = () => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "tasks",
    // item: {id: task.id},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  console.log(isDragging);
  return (
    <>
      <h2>All Tasks</h2>
      <div className="flex flex-row ">
        <div ref={drag} className="bg-green-500 size-40">
          <h2 className="shadow p-2">Task 1</h2>
        </div>
        <div className="bg-orange-500 size-40">
          <h2>Doing</h2>
        </div>
        <div className="bg-blue-500 size-40">
          <h2>Completed</h2>
        </div>
      </div>
    </>
  );
};

export default AllTasks;
