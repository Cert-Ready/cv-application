import { Component } from "react";
import PropTypes from "prop-types";

class Personal extends Component {
  render() {
    const { handlePersonal, personal } = this.props;

    return (
      <div className="grid bg-1 pad-1  pri-brd-rad">
        <h2>Personal</h2>

        <div className="grid pad-1 brd-3 pri-brd-rad">
          <input
            type="text"
            name="fullName"
            placeholder="Name"
            value={personal.fullName}
            onChange={(e) => handlePersonal(e, "personal")}
          />

          <input
            type="text"
            name="title"
            placeholder="Title"
            value={personal.title}
            onChange={(e) => handlePersonal(e, "personal")}
          />

          <input
            type="text"
            name="address"
            placeholder="Address"
            value={personal.address}
            onChange={(e) => handlePersonal(e, "personal")}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={personal.phone}
            onChange={(e) => handlePersonal(e, "personal")}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={personal.email}
            onChange={(e) => handlePersonal(e, "personal")}
          />

          <textarea
            name="description"
            placeholder="Description"
            value={personal.description}
            onChange={(e) => handlePersonal(e, "personal")}
            rows={10}
          />
        </div>
      </div>
    );
  }
}

export default Personal;
Personal.propTypes = {
  handlePersonal: PropTypes.func,
  personal: PropTypes.object,
};
