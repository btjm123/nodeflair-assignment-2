import React from 'react';
import { JobListing } from '../../models';
import './JobListingCard.css';
import '../../styles/fonts.css';
import SkillsetTag from '../SkillsetTag/SkillsetTag';

interface JobListingCardProps {
  jobListing: JobListing;
  selectedJobListing: JobListing;
  setSelectedJobListing: (value: JobListing) => void;
}

const JobListingCard: React.FC<JobListingCardProps> = ({
  jobListing,
  selectedJobListing,
  setSelectedJobListing,
}) => {
  console.log(selectedJobListing);
  return (
    <div
      className={`${
        selectedJobListing === jobListing
          ? 'job-card selected-job-card'
          : 'job-card'
      }`}
      onClick={() => setSelectedJobListing(jobListing)}
    >
      <div className="company-info">
        <div className="company-image-container">
          <img
            src={jobListing.photo_url}
            alt="company-logo"
            className="company-image"
          />
        </div>
        <div className="company-metadata-container">
          {/* This has to be absolutely positoned as the dimensions of the box is cutting into the middle row of the flex container, affecting the vertical margin */}
          <div className="job-scope-container">
            <span className="fw-600 fs-14 green-text">
              {jobListing.job_scope}
            </span>
          </div>
          <div className="company-metadata-top-container">
            <span className="fw-400 fs-14 black-text company-name">
              {jobListing.company_name}
            </span>
            <span className="fw-400 fs-14 black-text">
              {jobListing.star_rating}
              &nbsp;★
            </span>
          </div>

          <div className="company-metadata-mid-container">
            <span className="fw-700 fs-16">{jobListing.job_title}</span>
          </div>

          <div className="company-metadata-bottom-container">
            <span className="fw-700 fs-14 green-text updated-at">
              about 15 hours ago
            </span>

            <span className="fw-400 fs-14 gray-text">
              <i className="fas fa-map-marker-alt location-icon" />
              {jobListing.location}
            </span>
          </div>

          <div className="company-metadata-optional-bottom-container">
            <span className="fw-600 fs-14 black-text">
              USD {jobListing.salary_lower_bound} - USD{' '}
              {jobListing.salary_upper_bound} / mth
            </span>
            <span className="fw-400 fs-14 estimated-salary-tag">EST</span>
          </div>
        </div>
      </div>
      <div className="skillset-info">
        {jobListing.skillsets.map((skillset) => (
          <SkillsetTag skillset={skillset} />
        ))}
      </div>
    </div>
  );
};

export default JobListingCard;
