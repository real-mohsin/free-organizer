import InputField from "../Components/InputField";
import NavBar from "../Components/Navbar";
import './style.scss'

function Clients() {
  return (
    <>
      <NavBar />
      <div className="container">

        <div className="page-heading">Clients List</div>
        <div className="page-sub-heading">List of all the clients you have worked with.</div>

        <div className="bg-white">

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
                  </tr>
                  
                  <tr>
                    <td>02</td>
                    <td>Inspxt</td>
                    <td>Benjamin W</td>
                    <td>GMT+8</td>
                    <td>Feb 08, 2021</td>
                    <td>June 30, 2022</td>
                  </tr>

                  <tr>
                    <td>03</td>
                    <td>Aroma ERP</td>
                    <td>Kate Z</td>
                    <td>GMT-5</td>
                    <td>Jan 01, 2020</td>
                    <td>Jan 30, 2021</td>
                  </tr>

                  <tr>
                    <td>04</td>
                    <td>OBS Transport</td>
                    <td>Khalid Al Amir</td>
                    <td>GMT+4</td>
                    <td>Jun 15, 2019</td>
                    <td>Jun 20, 2019</td>
                  </tr>

                </tbody>
              </table>
            </div>

        </div>     


      </div>
    </>
    );
}

export default Clients;