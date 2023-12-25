
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";



const UserProfile = () => {


    const handleAddTask = event => {
        event.preventDefault();
        const form = event.target;

        const title = form.title.value;
        const description = form.description.value;
        const date = form.date.value;
        const priority = form.priority.value;

        const newTask = { description, title, date, priority };
        console.log(newTask);

        // send data 

        fetch('https://job-task-server-woad-tau.vercel.app/createTask', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newTask)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'task created successfully.',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }


    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="lg:w-2/3 mx-auto py-10 bg-base-100 ">
                    <h1 className="md:text-4xl font-bold text-center">Create Task</h1>
                    <form onSubmit={handleAddTask} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" name="title" placeholder="title" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name="description" placeholder="description" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Deadline</span>
                            </label>
                            <input type="date" name="date" className="input input-bordered" required />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Priority</span>
                            </label>
                            <select
                                type="text" name="priority" className="input input-bordered"
                            >
                                <option value="">Select your priority</option>
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>
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