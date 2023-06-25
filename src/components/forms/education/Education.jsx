import { Component } from "react";
import PropTypes from "prop-types";
import EducationItems from "./EducationItems";

class Education extends Component {
  render() {
    const { education, handleChange, educationList, addItem, deleteItem, editItem } = this.props;
    const { degree, college, startDate, endDate, description } = education;
    const maxItems = 3;
    const listLength = educationList.length;
    const isMaxItems = listLength < maxItems;

    const educationItems = educationList.map((item) => {
      return (
        <EducationItems
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
        <h2>Education</h2>

        {educationItems}

        {isMaxItems && (
          <div className="grid pad-1 brd-3 pri-brd-rad">
            <input
              type="text"
              name="degree"
              value={degree}
              placeholder="Degree"
              onChange={(e) => handleChange(e, "education")}
            />

            <input
              type="text"
              name="college"
              value={college}
              placeholder="College"
              onChange={(e) => handleChange(e, "education")}
            />

            <input
              type="text"
              name="startDate"
              value={startDate}
              placeholder="Start date"
              onChange={(e) => handleChange(e, "education")}
            />

            <input
              type="text"
              name="endDate"
              value={endDate}
              placeholder="End date"
              onChange={(e) => handleChange(e, "education")}
            />

            <textarea
              name="description"
              value={description}
              placeholder="Description"
              onChange={(e) => handleChange(e, "education")}
              rows={10}
            />

            <button
              onClick={() => addItem("education", "educationList")}
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

export default Education;

Education.propTypes = {
  education: PropTypes.object,
  handleChange: PropTypes.func,
  educationList: PropTypes.array,
  addItem: PropTypes.func,
  deleteItem: PropTypes.func,
  editItem: PropTypes.func,
};
