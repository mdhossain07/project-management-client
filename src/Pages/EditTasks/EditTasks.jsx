import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const EditTasks = () => {
  const axiosPublic = useAxiosPublic();

  const [editTask, setEditTask] = useState([]);
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axiosPublic
      .get(`/api/v1/get-task/${id}`)
      .then((res) => setEditTask(res.data));
  }, [axiosPublic, id]);

  const onSubmit = async (data) => {
    const updateTask = {
      title: data.title,
      priority: data.priority,
      image: data.image,
      deadline: data.deadline,
      description: data.description,
    };
    console.log(updateTask);

    axiosPublic.patch(`/api/v1/update-task/${id}`, updateTask).then((res) => {
      if (res.data.modifiedCount > 0) {
        Swal.fire("Done", "Task is edited", "success");
        reset();
        navigate("/dashboard/all-tasks");
      }
    });
  };
  return (
    <div>
      <h2 className="text-center text-3xl font-semibold my-8">Edit Tasks</h2>
      <form
        className="bg-[#F3F3F3] font-medium text-[#444444] p-5 lg:w-1/2 mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="">Title *</label>
        <br />
        <input
          required
          className="indent-2 w-full py-2 my-2"
          defaultValue={editTask?.title}
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
        <label htmlFor="">Image URL</label>
        <br />
        <input
          required
          className="indent-2 w-full py-2 my-2"
          defaultValue={editTask?.image}
          {...register("image")}
        />
        <label htmlFor="">Task Description *</label>
        <br />
        <textarea
          className="my-2 w-full indent-2 p-3"
          {...register("description")}
          defaultValue={editTask?.description}
          cols="50"
          rows="5"
        ></textarea>
        <br />
        <label htmlFor="">Deadline</label>

        <br />
        <input
          {...register("deadline")}
          type="date"
          className="file-input w-full max-w-xs p-3"
          defaultValue={editTask?.deadline}
          required
        />
        <br />
        <br />

        <input
          className="btn bg-blue-500 text-white w-full"
          type="submit"
          value="Update Task"
        />
      </form>
    </div>
  );
};

export default EditTasks;
