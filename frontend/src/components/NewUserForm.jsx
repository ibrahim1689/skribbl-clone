import React, { Component } from "react";

class NewUserForm extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
    };
  }

  handleChange = (e) => {
    this.setState({ username: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const reqBody = {
      name: this.state.username,
    };

    await fetch("http://localhost:8080/newuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqBody),
    });
  };

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="input-group">
            <input
              onChange={this.handleChange}
              placeholder="Enter Your Name"
              name="username"
              type="text"
              className="input-field input-name"
              required
            />
          </div>
          <div className="input-group">
            <input
              type="submit"
              className="input-field input-submit"
              value="PLAY!"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default NewUserForm;
