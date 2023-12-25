import { useForm } from "react-hook-form";



const UserProfile = () => {
    const {register,handleSubmit, reset, formState: { errors }} = useForm();

    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="lg:w-2/3 mx-auto py-10 bg-base-100 ">
                    <h1 className="text-5xl font-bold text-center">Login now!</h1>
                    <form className="card-body">
                    <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" {...register("title", { required: true } ) } name="title" placeholder="title" className="input input-bordered" />
                            {errors.tittle && <p className="text-red-500">title is required</p>}
                       </div>
                    <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" {...register("description", { required: true } ) } name="description" placeholder="description" className="input input-bordered" />
                            {errors.description && <p className="text-red-500">description is required</p>}
                       </div>
                    <div className="form-control">
                            <label className="label">
                                <span className="label-text">Deadline</span>
                            </label>
                            <input type="date" {...register("date", { required: true } ) } name="date"  className="input input-bordered" />
                            {errors.date && <p className="text-red-500">date is required</p>}
                       </div>
                        
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Priority</span>
                            </label>
                            <select
                                type="text" {...register("priority",  ) } name="priority"  className="input input-bordered"
                            >
                                <option value="">Select your priority</option>
                                <option value="Developer">High</option>
                                <option value="Corporate Officer">Medium</option>
                                <option value="Banker">Low</option>
                            </select>
                        </div>

                        <div className="form-control mt-6 w-fit">
                            <button className="btn btn-primary">Create Task</button>
                        </div>


                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;