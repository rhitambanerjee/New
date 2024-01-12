import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

function Forms() {
  const getCurrentDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
  };
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    dateadded: getCurrentDate(),
    dateofbirth: '',
    custtype: '',
    khatano: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    const newValue = name === 'dateadded' ? getCurrentDate() : value;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Utility function to get CSRF token from cookies
function getCSRFToken() {
  const csrfCookie = document.cookie
    .split('; ')
    .find((cookie) => cookie.startsWith('csrftoken='));

  if (csrfCookie) {
    return csrfCookie.split('=')[1];
  }

  return null;
}

// Your handleSubmit function with CSRF token inclusion
const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    // Replace the URL with your actual API endpoint
    const apiUrl = 'http://homelab.srinjoy.co/ins/customer/create/';

    // Perform a POST request to save form data to the database
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log('Form submitted and data saved to the database.');
      console.log(formData, "line 38");
      // Optionally, you can reset the form after successful submission
      setFormData({
        name: '',
        address: '',
        phone: '',
        dateadded: '',
        dateofbirth: '',
        custtype: '',
        khatano: '',
      });
    } else {
      console.error('Error submitting form data.');
      console.log(formData,"line 66")
    }
  } catch (error) {
    console.error('Error:', error);
    console.log(formData, "line 54");
  }
};


  return (
    <div>
      <span className='uk-text-bold uk-text-secondary' style={{fontSize:"20px",marginTop:"3px"}}>Customer Management</span>
      <form className="uk-form-stacked uk-margin-top" onSubmit={handleSubmit}>
        <div className='uk-flex uk-flex-row'>
          <div className="uk-margin uk-width-1-2 ">
            <label className="uk-form-label" htmlFor="form-stacked-text" style={{fontSize:"16px",fontWeight:"700"}}>Name</label>
            <div className="uk-form-controls">
              <input
                className="uk-input"
                id="form-stacked-text"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={{ borderRadius: "5px" }}
              />
            </div>
          </div>
          <div className="uk-margin-remove-top uk-width-1-2 uk-margin-medium-left ">
            <label className="uk-form-label" htmlFor="form-stacked-text" style={{fontSize:"16px",fontWeight:"700"}}>Address</label>
            <div className="uk-form-controls">
              <input
                className="uk-input"
                id="form-stacked-text"
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                style={{ borderRadius: "5px" }}
              />
            </div>
          </div>
        </div>

        <div className='uk-flex uk-flex-row'>
          <div className="uk-margin uk-width-1-2 ">
            <label className="uk-form-label" htmlFor="form-stacked-text" style={{fontSize:"16px",fontWeight:"700"}}>Phone</label>
            <div className="uk-form-controls">
              <input
                className="uk-input"
                id="form-stacked-text"
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                style={{ borderRadius: "5px" }}
              />
            </div>
          </div>
          <div className="uk-margin-remove-top uk-width-1-2  uk-margin-medium-left">
            <label className="uk-form-label" htmlFor="form-stacked-text" style={{fontSize:"16px",fontWeight:"700"}}>Date Of Birth</label>
            <div className="uk-form-controls">
              <input
                className="uk-input"
                id="form-stacked-text"
                type="date"
                name="dateofbirth"
                value={formData.dateofbirth}
                onChange={handleChange}
                style={{ borderRadius: "5px" }}
              />
            </div>
          </div>
        </div>

        <div className='uk-flex uk-flex-row'>
          <div className="uk-margin-remove-top uk-width-1-2  ">
            <label className="uk-form-label" htmlFor="form-stacked-text" style={{fontSize:"16px",fontWeight:"700"}}>Cust Type</label>
            <div className="uk-form-controls">
            <select
            className="uk-select"
            name="custtype"
            value={formData.custtype}
            onChange={handleChange}
            style={{ borderRadius: "5px" }}
          >
            <option>Please select a value</option>
            <option value="New">New</option>
            <option value="Existing">Existing</option>
          </select>
            </div>
          </div>
          <div className="uk-margin-remove-top uk-width-1-2  uk-margin-medium-left"> 
            <label className="uk-form-label" htmlFor="form-stacked-text" style={{fontSize:"16px",fontWeight:"700"}}>Khatano</label>
            <div className="uk-form-controls">
              <input
                className="uk-input"
                id="form-stacked-text"
                type="text"
                name="khatano"
                value={formData.khatano}
                onChange={handleChange}
                style={{ borderRadius: "5px" }}
              />
            </div>
          </div>
        </div>
        <Button className='uk-margin' type="submit" style={{color:"white",backgroundColor:"black"}}>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Forms;