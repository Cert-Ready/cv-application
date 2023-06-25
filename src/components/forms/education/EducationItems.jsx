import { Component } from "react";
import PropTypes from "prop-types";

class EducationItems extends Component {
  render() {
    const { item, handleDeleteItem, handleEdit } = this.props;
    const { id, degree, college, startDate, endDate, description } = item;

    return (
      <div className="grid pad-1 brd-3 pri-brd-rad">
        <input
          type="text"
          name="degree"
          defaultValue={degree}
          placeholder="Degree"
          onChange={(e) => handleEdit(e, id, "educationList")}
        />

        <input
          type="text"
          name="college"
          defaultValue={college}
          placeholder="College"
          onChange={(e) => handleEdit(e, id, "educationList")}
        />

        <input
          type="text"
          name="startDate"
          defaultValue={startDate}
          placeholder="Start date"
          onChange={(e) => handleEdit(e, id, "educationList")}
        />

        <input
          type="text"
          name="endDate"
          defaultValue={endDate}
          placeholder="End date"
          onChange={(e) => handleEdit(e, id, "educationList")}
        />

        <textarea
          name="description"
          defaultValue={description}
          placeholder="Description"
          onChange={(e) => handleEdit(e, id, "educationList")}
          rows={10}
        />

        <button
          onClick={() => handleDeleteItem(id, "educationList")}
          className="buttonV01"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default EducationItems;

EducationItems.propTypes = {
  item: PropTypes.object,
  handleDeleteItem: PropTypes.func,
  handleEdit: PropTypes.func,
};
