import NavBar from '../Components/Navbar';
import './style.scss'

import graph from '../assets/images/line-graph.png'
import externalicon from '../assets/images/External-icon.png'
import Footer from '../Components/Footer';

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
                 <img src={graph} alt={'line-graph'} />
              </div>

            </div>

          </div>
        </div>

        <div className="container dflex justify-space-between">
          
          <div className="client-sec">
            <div className="heading">
              Clients & Projects List
            </div>
            <div className='tbl-container'>
              <table>
                <thead>
                  <th>No</th>
                  <th>Project Title</th>
                  <th>Client Name</th>
                  <th>Time Zone</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th></th>
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
                  <th>No</th>
                  <th>Task</th>
                  <th>Due Date</th>
                  <th>Status</th>
                  <th></th>
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