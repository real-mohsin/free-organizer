import NavBar from '../Components/Navbar';
import './style.scss'

// import graph from '../assets/images/line-graph.png'
import externalicon from '../assets/images/External-icon.png'
import Footer from '../Components/Footer';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

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
                    <th>No</th>
                    <th>Project Title</th>
                    <th>Client Name</th>
                    <th>Time Zone</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>01</td>
                    <td>Maverick</td>
                    <td>Mohsin R</td>
                    <td>GMT+5</td>
                    <td>Aug 06, 2023</td>
                    <td>In progress</td>
                    <td>
                      <img src={externalicon} alt={'external-link'} />
                    </td>
                  </tr>
                  
                  <tr>
                    <td>02</td>
                    <td>Inspxt</td>
                    <td>Benjamin W</td>
                    <td>GMT+8</td>
                    <td>Feb 08, 2021</td>
                    <td>June 30, 2022</td>
                    <td>
                      <img src={externalicon} alt={'external-link'} />
                    </td>
                  </tr>

                  <tr>
                    <td>03</td>
                    <td>Aroma ERP</td>
                    <td>Kate Z</td>
                    <td>GMT-5</td>
                    <td>Jan 01, 2020</td>
                    <td>Jan 30, 2021</td>
                    <td>
                      <img src={externalicon} alt={'external-link'} />
                    </td>
                  </tr>

                  <tr>
                    <td>04</td>
                    <td>OBS Transport</td>
                    <td>Khalid Al Amir</td>
                    <td>GMT+4</td>
                    <td>Jun 15, 2019</td>
                    <td>Jun 20, 2019</td>
                    <td>
                      <img src={externalicon} alt={'external-link'} />
                    </td>
                  </tr>

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
                    <th>No</th>
                    <th>Task</th>
                    <th>Due Date</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>01</td>
                    <td>Complete the Maverick UI</td>
                    <td>Sep 04, 2023</td>
                    <td>Complete</td>
                    <td>
                      <img src={externalicon} alt={'external-link'} />
                    </td>
                  </tr>
                  
                  <tr>
                    <td>02</td>
                    <td>Start Maverick front-end development</td>
                    <td>Sep 12, 2023</td>
                    <td>In process</td>
                    <td>
                      <img src={externalicon} alt={'external-link'} />
                    </td>
                  </tr>

                  <tr>
                    <td>03</td>
                    <td>Start Maverick back-end development</td>
                    <td>Oct 01, 2023</td>
                    <td>Pending</td>
                    <td>
                      <img src={externalicon} alt={'external-link'} />
                    </td>
                  </tr>

                  <tr>
                    <td>04</td>
                    <td>Start Maverick front-end integration with back-end</td>
                    <td>Oct 21, 2023</td>
                    <td>Pending</td>
                    <td>
                      <img src={externalicon} alt={'external-link'} />
                    </td>
                  </tr>

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