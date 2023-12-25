import { Link, Outlet } from "react-router-dom";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'


const Dashboard = () => {
    return (
        <DndProvider backend={HTML5Backend}>
            <div>
            <div className="flex">
                <div className="w-64 min-h-screen bg-red-100 p-4">
                    <div className="text-center mb-10">
                        {/* <img src={logo} className='w-20' alt="" /> */}
                        <h2 className="text-3xl font-bold uppercase">Task<span className="text-teal-500">Burst</span></h2>
                    </div>
                    <ul className="menu text-lg">
                        <li><Link to="/dashboard/userProfile">
                            Create</Link>
                        </li>
                        <li><Link to="/dashboard/todo">
                            Todo List</Link>
                        </li>
                        <li><Link to="/dashboard/ongoing">
                            Ongoing Task</Link>
                        </li>
                        <li><Link to="/dashboard/completed">
                            Completed Task</Link>
                        </li>
                        <li><Link to="/">
                            Home</Link>
                        </li>
                       
                    </ul>
                </div>
                {/* dashboard content */}
                <div className="flex-1 p-8">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
        </DndProvider>
        
    );
};

export default Dashboard;