import { useState } from "react";
import Footer from "../Components/Footer";
import InputField from "../Components/InputField";
import NavBar from "../Components/Navbar";
import Button from "../Components/Button";

function AddClient() {



  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {

  };

  return (
    <>
      <NavBar />
      <div className="page-container bg-white">
        <InputField type={'text'} label={'Client Name'} value={''} name={'clientName'} placeholder={'jon@example.com'} onChange={handleInputChange} />

        <InputField type={'text'} label={'Project Title'} value={''} name={'clientName'} placeholder={'jon@example.com'} onChange={handleInputChange} />

        <InputField type={'date'} label={'Start Date'} value={''} name={'clientName'} placeholder={'jon@example.com'} onChange={handleInputChange} />

        <InputField type={'date'} label={'End Date'} value={''} name={'clientName'} placeholder={'jon@example.com'} onChange={handleInputChange} />

        <InputField type={'text'} label={'Time Zone'} value={''} name={'clientName'} placeholder={'jon@example.com'} onChange={handleInputChange} />

        <Button type='submit' variant="primary" size="medium" onClick={() => console.log('Submit button clicked')}>
          Save
        </Button>

      </div>
      <Footer />
    </>
  );
}

export default AddClient;