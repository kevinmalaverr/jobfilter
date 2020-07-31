import React from "react";
import "css/app.css";
import data from "data.json";
import JobCard from "components/jobCard";
import { useState } from "react";

const filterJob = (jobs, filters) => {
  let jobsFiltered = [];

  for (let i = 0; i < jobs.length; i++) {
    const job = jobs[i];

    if (filters.level || filters.role) {
      if (job.level != filters.level) {
        continue;
      }
      if (job.role != filters.role) {
        continue;
      }
    }

    let bre = false;
    for (let j = 0; j < filters.languages.length; j++) {
      if (!job.languages.includes(filters.languages[j])) {
        bre = true;
        break;
      }
    }

    if (bre) {
      continue;
    }

    jobsFiltered.push(job);
  }
  console.log(jobsFiltered);
  return jobsFiltered;
};

const App = () => {
  const [filters, setfilters] = useState({
    role: "",
    level: "",
    languages: ["HTML"],
  });
  console.log(data);

  const clear = () => {
    setfilters([]);
  };

  console.log(filters[0]);

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
          {filters.languages.length === 0
            ? data.map((job) => <JobCard data={job} />)
            : filterJob(data, filters).map((job) => <JobCard data={job} />)}
        </div>
      </main>
    </>
  );
};

export default App;
