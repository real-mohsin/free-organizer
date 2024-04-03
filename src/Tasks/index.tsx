import editIcon from '../assets/images/edit-icon.png'
import externalIcon from '../assets/images/External-icon.png'
import NavBar from "../Components/Navbar";

function Tasks() {
  return (
    <>
      <NavBar />
      <div className="container">

        <div className="page-heading">Tasks</div>
        <div className="page-sub-heading">List of all tasks.</div>

        <div className="bg-white">

        <div className='tbl-container'>
              <table>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Task</th>
                    <th>Due Date</th>
                    <th>Status</th>
                    <th>Detail</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>01</td>
                    <td>Complete the Maverick UI</td>
                    <td>Sep 04, 2023</td>
                    <td>Complete</td>
                    <td>Complete the UI design of Maverick on Figma</td>
                    <td>
                      <img src={editIcon} alt={'edit-icon'} />
                      <img src={externalIcon} alt={'external-icon'} />
                    </td>
                  </tr>
                  
                  <tr>
                    <td>02</td>
                    <td>Start Maverick front-end development</td>
                    <td>Apr 10, 2024</td>
                    <td>Inprocess</td>
                    <td>Start working on the Frontend development of Maverick in ReactJs using Typescript</td>
                    <td>
                      <img src={editIcon} alt={'edit-icon'} />
                      <img src={externalIcon} alt={'external-icon'} />
                    </td>
                  </tr>

                  <tr>
                    <td>03</td>
                    <td>Start Maverick back-end development</td>
                    <td>Nov 04, 2024</td>
                    <td>Pending</td>
                    <td>For backend please use Node.Js, Express and MongoDB</td>
                    <td>
                      <img src={editIcon} alt={'edit-icon'} />
                      <img src={externalIcon} alt={'external-icon'} />
                    </td>
                  </tr>

                  <tr>
                    <td>04</td>
                    <td>Start Maverick front-end integration with back-end</td>
                    <td>Dec 04, 2024</td>
                    <td>Pending</td>
                    <td>Once the endpoints are ready start integrating frontend with backend and deploy it and make it live.</td>
                    <td>
                      <img src={editIcon} alt={'edit-icon'} />
                      <img src={externalIcon} alt={'external-icon'} />
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>

        </div>     


      </div>
    </>
    );
}

export default Tasks;