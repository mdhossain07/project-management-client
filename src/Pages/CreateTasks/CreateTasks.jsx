import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CreateTasks = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const newTask = {
      title: data.title,
      priority: data.priority,
      deadline: data.deadline,
      description: data.description,
      status: "todo",
      createdBy: user?.email,
    };
    console.log(newTask);

    axiosPublic.post("/api/v1/add-task", newTask).then((res) => {
      if (res.data.insertedId) {
        Swal.fire("Done", "New Task has been created", "success");
        reset();
        navigate("/dashboard/all-tasks");
      }
    });
  };
  return (
    <div>
      <h2>New Tasks</h2>
      <form
        className="bg-[#F3F3F3] font-medium text-[#444444] mt-10 p-10 lg:w-1/2 mx-auto space-y-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="">Title *</label>
        <br />
        <input
          required
          className="indent-2 w-full py-2 my-2"
          {...register("title")}
        />
        <div className="flex justify-between gap-10">
          <div className="flex-1">
            <label htmlFor="">Priority *</label>
            <br />
            <select
              className="py-2 w-full my-2 indent-2"
              defaultValue="default"
              required
              {...register("priority")}
            >
              <option value="low">Low</option>
              <option value="moderate">Moderate</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
        <label htmlFor="">Task Description *</label>
        <br />
        <textarea
          className="my-2 w-full indent-2 p-3"
          {...register("description")}
          cols="50"
          rows="5"
        ></textarea>
        <br />
        <label htmlFor="">Deadline</label>

        <br />
        <input
          {...register("deadline")}
          type="date"
          className="file-input w-full max-w-xs"
          required
        />
        <br />

        <input className="btn btn-warning" type="submit" value="Add Task" />
      </form>
    </div>
  );
};

export default CreateTasks;
