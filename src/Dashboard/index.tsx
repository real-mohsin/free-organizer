import NavBar from '../Components/Navbar';
import './style.scss'

// import graph from '../assets/images/line-graph.png'
import externalicon from '../assets/images/External-icon.png'
import Footer from '../Components/Footer';

const apiUrl = import.meta.env.VITE_API_URL;

export interface Client {
  id: string;
  name: string;
  projectName: string;
  timeZone: string;
  startDate: string;
  endDate: string;
  amountEarned: string
  platform: string;
}

export interface Todo {
  id: string;
  task: string;
  dueDate: string;
  status: string;
  detail: string;
}

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { useEffect, useState } from 'react';

// Graph Data
const data = [
  {
    name: "Jan",
    Earning: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Feb",
    Earning: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Mar",
    Earning: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Apr",
    Earning: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "May",
    Earning: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Jun",
    Earning: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Jul",
    Earning: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    name: "Aug",
    Earning: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    name: "Sep",
    Earning: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    name: "Oct",
    Earning: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    name: "Nov",
    Earning: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    name: "Dec",
    Earning: 3490,
    pv: 4300,
    amt: 2100
  }
];

function Dashboard() {

  const [clients, setClients] = useState<Client[]>([]);
  const [todos, setTodos] = useState<Todo[]>([]);
  
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchClients = async () => {
    try {
      const response = await fetch(`${apiUrl}/clients`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: Client[] = await response.json(); // Ensure the response matches the Client type
      setClients(data);
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const fetchTodos = async () => {
    try {
      const response = await fetch(`${apiUrl}/todo`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: Todo[] = await response.json(); // Ensure the response matches the Client type
      setTodos(data);
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClients();
    fetchTodos();
  },[])

  return (
    <>
      <NavBar />
        <div className='kpi-bg w-100'>
          <div className='container'>
            <div className='dashboard-title'>Dashboard</div>
            <div className='kpi-graph-sec dflex justify-space-between'>

              <div className='kpi-section dflex justify-space-between'>
                
                <div className='kpi-block'>
                  <div className="title">
                    12
                  </div>
                  <div className='sub-title'>
                    No of clients
                  </div>
                </div>

                <div className='kpi-block'>
                  <div className="title">
                    3
                  </div>
                  <div className='sub-title'>
                    Pending Task(s)
                  </div>
                </div>

                <div className='kpi-block'>
                  <div className="title">
                    $3,000
                  </div>
                  <div className='sub-title'>
                    Earned this month
                  </div>
                </div>

                <div className='kpi-block'>
                  <div className="title">
                    $250
                  </div>
                  <div className='sub-title'>
                    Earned this week
                  </div>
                </div>

              </div>

              <div className='graph-sec'>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={data}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0
                    }}
                  >
                  <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="Earning" stroke="#3B58FF" fill="#6383FA" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

            </div>

          </div>
        </div>

        <div className="container dflex justify-space-between bg-white">
          
          <div className="client-sec">
            <div className="heading">
              Clients & Projects List
            </div>
            
            <div className='tbl-container'>
              <table>
                <thead>
                  <tr>
                    <th>Project Title</th>
                    <th>Client Name</th>
                    <th>Time Zone</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Platform</th>
                    <th>Earning</th>
                  </tr>
                </thead>
                <tbody>
                {clients.map((client) => (
                  <tr key={client.id}>
                    <td>{client.projectName}</td>
                    <td>{client.name}</td>
                    <td>{client.timeZone}</td>
                    <td>{client.startDate}</td>
                    <td>{client.endDate}</td>
                    <td>{client.platform}</td>
                    <td>${client.amountEarned}</td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="tasks-sec">
            <div className="heading">
              TO DO List
            </div>
            <div className='tbl-container'>
              <table>
                <thead>
                  <tr>
                    <th>Task</th>
                    <th>Due Date</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                {todos.map((todo) => (
                  <tr key={todo.id}>
                    <td>{todo.task}</td>
                    <td>{todo.dueDate}</td>
                    <td>{todo.status}</td>
                    <td>
                      <img src={externalicon} alt={'external-link'} />
                    </td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>
        
        </div>

        <Footer />
    </>
    );
}

export default Dashboard;