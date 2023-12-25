import { useEffect, useState } from "react";


const TodoList = () => {
    const[ tasks, setTask] = useState([]);
    const { title, description, date, priority, _id} = tasks
    useEffect(() => {
        
        fetch('http://localhost:5000/createTask')
            .then(res => res.json())
            .then(data => {
                setTask(data)
            })
    }, [])
    return (
        <div className="px-10 my-20">
        <h2 className="text-3xl lg:text-4xl text-green-800 text-center my-8">Your todo task: {tasks.length}</h2>
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Room Name</th>
                        <th>City</th>
                        <th>Date</th>
                        
                    </tr>
                </thead>
                {/* <tbody>
                    {
                        bookings?.map(booking => <Bookings 
                        key={booking._id}
                        booking={booking}
                        handleDelete={handleDelete}
                        
                        >
                        </Bookings>)
                    }
                    
                   
                    
                </tbody> */}
            </table>
        </div>
        <ToastContainer />
    </div>
    );
};

export default TodoList;