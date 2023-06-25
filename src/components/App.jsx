import { Component } from "react";
import Header from "./header/Header";
import Forms from "./forms/Forms";
import Preview from "./preview/Preview";
import uniqid from "uniqid";
import sampleData from "../data/sample";
import "../css/App.css";

export default class App extends Component {
  componentDidMount() {
    document.title = "CV - Application";
  }

  constructor() {
    super();

    this.state = {
      isEdit: true,
      personal: {
        fullName: "",
        title: "",
        address: "",
        phone: "",
        email: "",
        description: "",
      },
      education: {
        id: uniqid(),
        degree: "",
        college: "",
        startDate: "",
        endDate: "",
        description: "",
      },
      educationList: [],
      experience: {
        id: uniqid(),
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        description: "",
      },
      experienceList: [],
    };

    this.baseState = this.state;
  }

  toggleEdit = () => {
    this.setState({
      isEdit: !this.state.isEdit,
    });
  };

  handleChange = (e, property) => {
    const { name, value } = e.target;

    this.setState({
      [property]: {
        ...this.state[property],
        [name]: value,
      },
    });
  };

  addItem = (property, propertyList) => {
    this.setState({
      [propertyList]: this.state[propertyList].concat(this.state[property]),
      [property]: { ...this.baseState[property], id: uniqid() },
    });
  };

  deleteItem = (id, propertyList) => {
    const array = [...this.state[propertyList]];
    const i = array.findIndex((obj) => obj.id === id);

    if (i !== -1) {
      array.splice(i, 1);

      this.setState({
        [propertyList]: array,
      });
    }
  };

  editItem = (e, id, list) => {
    const { name, value } = e.target;

    const newList = this.state[list].map((item) => {
      if (item.id === id) {
        return { ...item, [name]: value };
      } else {
        return item;
      }
    });

    this.setState({
      [list]: newList,
    });
  };

  loadSample = () => {
    this.setState({
      ...this.state,
      ...sampleData,
    });
  };

  render() {
    const { isEdit, personal, education, educationList, experience, experienceList } = this.state;

    return (
      <>
        <Header
          editMode={isEdit}
          handleToggleEdit={this.toggleEdit}
          handleLoadSample={this.loadSample}
        />

        {isEdit && (
          <Forms
            personal={personal}
            education={education}
            educationList={educationList}
            experience={experience}
            experienceList={experienceList}
            handleChange={this.handleChange}
            handleAddItem={this.addItem}
            handleDeleteItem={this.deleteItem}
            handleEdit={this.editItem}
          />
        )}

        {!isEdit && <Preview cv={this.state} />}
      </>
    );
  }
}
