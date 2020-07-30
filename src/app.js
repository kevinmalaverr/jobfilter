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
          <div className="search-bar"></div>
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
