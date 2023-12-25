import { useEffect, useState } from "react";
import { useDrag } from "react-dnd";
import { FaRegTrashAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";


const TodoList = () => {
    const[ tasks, setTask] = useState([]);
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "tasks",
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
        })
      }))
      console.log(isDragging)

    const { title, description, date, priority, _id} = tasks

    const handleDelete = id =>{
        const proceed =
        
        toast.success("Are You Sure to Delete?", {
            position: toast.POSITION.TOP_CENTER
          });
        
        
        
          if(proceed) {
            fetch(`https://job-task-server-woad-tau.vercel.app/createTask${id}`,{
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                
                    Swal.fire({
                        title: "Are you sure?",
                        text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, delete it!"
                      })
                      .then((result) => {
                        if (result.isConfirmed) {
                          Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                        }
                      });  
                   
                      const remaining = tasks?.filter(task => task._id != id)
                      setTask(remaining)
                }
            
            })
        
          }
        }
    useEffect(() => {
        
        fetch('https://job-task-server-woad-tau.vercel.app/createTask')
            .then(res => res.json())
            .then(data => {
                setTask(data)
            })
    }, [])
    return (
        <div className="px-10 my-20" ref={drag}>
        <h2 className="text-3xl lg:text-4xl text-green-800 text-center my-8">Your todo task: {tasks.length}</h2>
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Priority</th>
                        <th>Date</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks?.map(task => 
                        <tr key={task._id}>
                        <td>{task.title}</td>
                        <td>{task.description}</td>
                        <td>{task.priority}</td>
                        <td>{task.date}</td>
                       
                        <td><button onClick={() => { handleDelete(_id) }}><FaRegTrashAlt className="text-xl text-red-500"></FaRegTrashAlt></button></td>
                    </tr>
                    )
                    }
                    
                   
                    
                </tbody>
            </table>
        </div>
        <ToastContainer />
    </div>
    );
};

export default TodoList;