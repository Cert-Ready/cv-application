import { Component } from "react";
import PropTypes from "prop-types";
import ExperienceItems from "./ExperienceItems";

class Experience extends Component {
  render() {
    const { experience, experienceList, handleChange, addItem, deleteItem, editItem } = this.props;
    const { company, position, startDate, endDate, description } = experience;
    const maxItems = 3;
    const listLength = experienceList.length;
    const isMaxItems = listLength < maxItems;

    const experienceItem = experienceList.map((item) => {
      return (
        <ExperienceItems
          key={item.id}
          item={item}
          handleDeleteItem={deleteItem}
          handleChange={handleChange}
          handleEdit={editItem}
        />
      );
    });

    return (
      <div className="grid bg-1 pad-1 pri-brd-rad">
        <h2>Experience</h2>

        {experienceItem}

        {isMaxItems && (
          <div className="grid pad-1 brd-3 pri-brd-rad">
            <input
              type="text"
              name="company"
              value={company}
              placeholder="Company"
              onChange={(e) => handleChange(e, "experience")}
            />

            <input
              type="text"
              name="position"
              value={position}
              placeholder="Position"
              onChange={(e) => handleChange(e, "experience")}
            />

            <input
              type="text"
              name="startDate"
              value={startDate}
              placeholder="Start date"
              onChange={(e) => handleChange(e, "experience")}
            />

            <input
              type="text"
              name="endDate"
              value={endDate}
              placeholder="End date"
              onChange={(e) => handleChange(e, "experience")}
            />

            <textarea
              name="description"
              value={description}
              placeholder="Description"
              onChange={(e) => handleChange(e, "experience")}
              rows={10}
            />

            <button
              onClick={() => addItem("experience", "experienceList")}
              className="buttonV01"
            >
              {listLength < maxItems - 1 ? "Save & Add new" : "Save"}
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Experience;
Experience.propTypes = {
  experience: PropTypes.object,
  experienceList: PropTypes.array,
  handleChange: PropTypes.func,
  addItem: PropTypes.func,
  deleteItem: PropTypes.func,
  editItem: PropTypes.func,
};
