import React from "react";
import "css/app.css";
import data from "data.json";
import JobCard from "components/jobCard";

const App = () => {
  console.log(data);
  return (
    <>
      <div className="bg"></div>
      <main>
        <header>
          <div className="search-bar">
            <div className="filter"></div>
            <div className="clear">clear</div>
          </div>
        </header>
        <div className="job-list">
          {data.map((job) => (
            <JobCard data={job} />
          ))}
        </div>
      </main>
    </>
  );
};

export default App;
