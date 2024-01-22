import React from "react";

class AddContact extends React.Component {
  render() {
    return (
        <div className="ui main" style={{ marginTop: '50px' }}>
          <h2>Add Contact</h2>
          <form className="ui form">
            <div className="field">
              <label>Name</label>
              <input type="text" name="name" placeholder="Name" />
            </div>
            <div className="field">
              <label>Email</label>
              <input type="text" name="email" placeholder="Email" />
            </div>
            {/* Add other form fields as needed */}
            <button className="ui button blue">
              Add
            </button>
          </form>
        </div>
      );
    }
  }
  
  export default AddContact;
  
  
  