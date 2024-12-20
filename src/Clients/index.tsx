import { useNavigate } from 'react-router-dom';
import editIcon from '../assets/images/edit-icon.png'
import externalIcon from '../assets/images/External-icon.png'
import Button from '../Components/Button';
import Footer from '../Components/Footer';
import NavBar from "../Components/Navbar";
import './style.scss'

function Clients() {

  const navigate = useNavigate()

  const handleNavigate = () => {
      navigate('/add-client')
  };

  return (
    <>
      <NavBar />
      <div className="container">
        <div className='dflex justify-space-between align-center'>
          <div>
            <div className="page-heading">Clients List</div>
            <div className="page-sub-heading">List of all the clients you have worked with.</div>
          </div>
          <div>
            <Button variant={'primary'} size={'large'} type={'button'} onClick={handleNavigate}>
              Add Client
            </Button>
          </div>
        </div>

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
                      <img src={editIcon} alt={'edit-icon'} />
                      <img src={externalIcon} alt={'external-icon'} />
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
                      <img src={editIcon} alt={'edit-icon'} />
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
                      <img src={editIcon} alt={'edit-icon'} />
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
                      <img src={editIcon} alt={'edit-icon'} />
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

export default Clients;