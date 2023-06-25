import { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
  faUser,
  faGraduationCap,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

class Preview extends Component {
  render() {
    const { cv } = this.props;
    const { personal, educationList, experienceList } = cv;

    return (
      <div className="preview max-width">
        <div className="personal flex pad-1">
          <div>
            <h1 className="hero">{personal.fullName}</h1>
            <h2>{personal.title}</h2>
          </div>
          <div>
            <p>
              {<FontAwesomeIcon icon={faLocationDot} />} {personal.address}
            </p>
            <p>
              {<FontAwesomeIcon icon={faEnvelope} />} {personal.email}
            </p>
            <p>
              {<FontAwesomeIcon icon={faPhone} />} {personal.phone}
            </p>
          </div>
        </div>

        <div className="profile bg-3 clr-0 pad-1">
          <div className="flex">
            <h3>PROFILE</h3>
            {<FontAwesomeIcon icon={faUser} />}
          </div>
          <div className="bracket bg-0"></div>
          <p>{personal.description}</p>
        </div>

        <div className="pad-1">
          <div className="flex">
            <h3>EDUCATION</h3>
            {<FontAwesomeIcon icon={faGraduationCap} />}
          </div>
          <div className="bracket bg-3"></div>
          {educationList.map((item) => {
            return (
              <div
                key={item.id}
                className="grid grid-col-2"
              >
                <div>
                  <p>{item.startDate}</p>
                  <div className="bracket bg-3 date-bracket"></div>
                  <p>{item.endDate}</p>
                </div>
                <div className="desc pad-left">
                  <h4>{item.degree}</h4>
                  <h5>{item.college}</h5>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="pad-1">
          <div className="flex">
            <h4>EXPERIENCE</h4>
            {<FontAwesomeIcon icon={faBriefcase} />}
          </div>
          <div className="bracket bg-3"></div>
          {experienceList.map((item) => {
            return (
              <div
                key={item.id}
                className="grid grid-col-2"
              >
                <div>
                  <p>{item.startDate}</p>
                  <div className="bracket bg-3 date-bracket"></div>
                  <p>{item.endDate}</p>
                </div>
                <div className="desc pad-left">
                  <h4>{item.company}</h4>
                  <h5>{item.position}</h5>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Preview;

Preview.propTypes = {
  cv: PropTypes.object,
};
