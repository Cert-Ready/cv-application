import { Component } from "react";
import PropTypes from "prop-types";
import Personal from "./personal/Personal";
import Education from "./education/Education";
import Experience from "./experience/Experience";

class Forms extends Component {
  render() {
    const {
      handleChange,
      personal,
      education,
      educationList,
      experience,
      experienceList,
      handleAddItem,
      handleDeleteItem,
      handleEdit,
    } = this.props;

    return (
      <div className="grid wrapper max-width">
        <Personal
          personal={personal}
          handlePersonal={handleChange}
        />
        <Education
          education={education}
          educationList={educationList}
          handleChange={handleChange}
          addItem={handleAddItem}
          deleteItem={handleDeleteItem}
          editItem={handleEdit}
        />
        <Experience
          experience={experience}
          experienceList={experienceList}
          handleChange={handleChange}
          addItem={handleAddItem}
          deleteItem={handleDeleteItem}
          editItem={handleEdit}
        />
      </div>
    );
  }
}

export default Forms;

Forms.propTypes = {
  handleChange: PropTypes.func,
  personal: PropTypes.object,
  education: PropTypes.object,
  educationList: PropTypes.array,
  experience: PropTypes.object,
  experienceList: PropTypes.array,
  handleAddItem: PropTypes.func,
  handleDeleteItem: PropTypes.func,
  handleEdit: PropTypes.func,
};
