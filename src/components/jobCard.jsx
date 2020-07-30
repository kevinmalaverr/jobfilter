import React from "react";
import "css/jobCard.css";

const JobCard = ({ data }) => {
  const {
    logo,
    company,
    contract,
    featured,
    level,
    location,
    position,
    role,
    languages,
    tools,
    isNew,
    postedAt,
  } = data;

  return (
    <div className={`job-card ${featured ? "featured" : null}`}>
      <img src={logo} alt="" />
      <div className="info">
        <div className="top">
          <p>{company}</p>
          {isNew ? <p>NEW!</p> : null}
          {featured ? <p>featured</p> : null}
        </div>
        <p>{position}</p>
        <p>
          {postedAt} *{contract} *{location}
        </p>
      </div>
      <hr />

      <div className="list">
        <div className="tag">{role}</div>
        <div className="tag">{level}</div>
        {languages
          ? languages.map((language) => <div className="tag">{language}</div>)
          : null}
        {tools ? tools.map((tool) => <div className="tag">{tool}</div>) : null}
      </div>
    </div>
  );
};

export default JobCard;
