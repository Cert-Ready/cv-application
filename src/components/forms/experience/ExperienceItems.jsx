import { Component } from "react";
import PropTypes from "prop-types";

class ExperienceItems extends Component {
  render() {
    const { item, handleDeleteItem, handleEdit } = this.props;
    const { id, company, position, startDate, endDate, description } = item;

    return (
      <div className="grid pad-1 brd-3 pri-brd-rad">
        <input
          type="text"
          name="company"
          defaultValue={company}
          placeholder="Company"
          onChange={(e) => handleEdit(e, id, "experienceList")}
        />

        <input
          type="text"
          name="position"
          defaultValue={position}
          placeholder="Position"
          onChange={(e) => handleEdit(e, id, "experienceList")}
        />

        <input
          type="text"
          name="startDate"
          defaultValue={startDate}
          placeholder="Start date"
          onChange={(e) => handleEdit(e, id, "experienceList")}
        />

        <input
          type="text"
          name="endDate"
          defaultValue={endDate}
          placeholder="End date"
          onChange={(e) => handleEdit(e, id, "experienceList")}
        />

        <textarea
          name="description"
          defaultValue={description}
          placeholder="Description"
          onChange={(e) => handleEdit(e, id, "experienceList")}
          rows={10}
        />

        <button
          onClick={() => handleDeleteItem(id, "experienceList")}
          className="buttonV01"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default ExperienceItems;

ExperienceItems.propTypes = {
  item: PropTypes.object,
  handleDeleteItem: PropTypes.func,
  handleEdit: PropTypes.func,
};
