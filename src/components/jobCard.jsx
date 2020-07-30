import React from "react";
import "css/jobCard.css";
import image from "images/account.svg";

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
    postedAt,
  } = data;

  const isNew = data.new;

  return (
    <div className={`job-card ${featured ? "card-featured" : null}`}>
      <img className="logo" src={image} alt="" />
      <div className="info">
        <div className="top">
          <p>{company}</p>
          {isNew ? <div className="new">NEW!</div> : null}
          {featured ? <div className="featured">FEATURED</div> : null}
        </div>
        <div className="position">
          <p>{position}</p>
        </div>
        <div className="time">
          <p>
            {postedAt} · {contract} · {location}
          </p>
        </div>
      </div>

      <div className="tag-list">
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
