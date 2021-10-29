import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";
import data from "../shared_data"
import {ReactComponent as WorkIcon} from "../icons/work.svg"
import {ReactComponent as SchoolIcon} from "../icons/school.svg"

class Experience extends Component {

  render() {
    if (data.experience) {
      var sectionName = 'Experiences';
      var work = data.experience.map(function (work, i) {
        const technologies = work.technologies;
        const mainTechnologies = work.mainTech;
        var icon = (work.icon == 'work') ? <WorkIcon /> : <SchoolIcon />;
        var classBadge = 'vertical-timeline-element--' + work.icon;
        var mainTech = mainTechnologies.map((technology, i) => {
          return (
            <Badge pill className="main-badge mr-2 mb-2" key={i}>
              {technology}
            </Badge>
          );
        });
        var tech = technologies.map((technology, i) => {
          return (
            <li key={i}>
              {technology}
            </li>
          );
        });
        return (
          <VerticalTimelineElement
            className={classBadge}
            date={work.years}
            iconStyle={{
              background: "#5B6571",
              color: "#fff",
              textAlign: "center",
            }}
            icon={icon}
            key={i}
          >
            <div style={{ textAlign: "left", marginBottom: "4px" }}>
              {mainTech}
            </div>

            <h3
              className="vertical-timeline-element-title"
              style={{ textAlign: "left" }}
            >
              {work.title}
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ textAlign: "left" }}
            >
              {work.company}
            </h4>
            <p>{work.details}</p>
            <div style={{ textAlign: "left", marginTop: "15px" }} className="vertical-timeline-element-technologies"><ul>{tech}</ul></div>
          </VerticalTimelineElement>
        );
      });
    }

    return (
      <section id="resume" className="section">
        <div className="container-md">
          <div className="row">
            <div className="col-sm-12">
              <h2>{sectionName}</h2>
            </div>
          </div>
          <div className="col-md-10 mx-auto">
            <VerticalTimeline layout="1-column-left">
              {work}
            </VerticalTimeline>
          </div>
        </div>
      </section>
    );
  }
}

export default Experience;
