import JobDescriptionCard from '../../components/JobDescriptionCard/JobDescriptionCard';
import JobListingCard from '../../components/JobListingCard/JobListingCard';
import './JobListingPage.css';
import data from '../../data';
import { useState } from 'react';
import { JobListing } from '../../models';

const JobListingPage = () => {
  const jobListings = data;
  const [selectedJobListing, setSelectedJobListing] = useState<JobListing>(
    jobListings[0]
  );

  return (
    <div className="job-listing-page">
      <div className="job-listing-view">
        {jobListings.map((jobListing) => (
          <JobListingCard
            key={jobListing.id}
            selectedJobListing={selectedJobListing}
            jobListing={jobListing}
            setSelectedJobListing={setSelectedJobListing}
          />
        ))}
      </div>

      <div className="job-description-view">
        <JobDescriptionCard jobListing={selectedJobListing} />
      </div>
    </div>
  );
};

export default JobListingPage;
