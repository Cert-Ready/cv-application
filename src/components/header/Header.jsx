import { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faEye, faPrint, faFile } from "@fortawesome/free-solid-svg-icons";

export default class Header extends Component {
  saveToPDF = () => {
    window.print();
  };

  render() {
    const { editMode, handleToggleEdit, handleLoadSample } = this.props;
    const editIcon = <FontAwesomeIcon icon={faPenToSquare} />;
    const viewIcon = <FontAwesomeIcon icon={faEye} />;

    return (
      <header className="pad-1">
        <h1>CV - Application</h1>

        <div className="flex max-width">
          <button
            onClick={handleToggleEdit}
            className="buttonV01"
          >
            {editMode ? viewIcon : editIcon} {editMode ? "View" : "Edit"}
          </button>

          {editMode && (
            <button
              onClick={handleLoadSample}
              className="buttonV01"
            >
              <FontAwesomeIcon icon={faFile} /> Load Sample
            </button>
          )}

          {!editMode && (
            <button
              onClick={this.saveToPDF}
              className="buttonV01"
            >
              <FontAwesomeIcon icon={faPrint} /> Print
            </button>
          )}
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  editMode: PropTypes.bool,
  handleToggleEdit: PropTypes.func,
  handleLoadSample: PropTypes.func,
};
