import React from 'react';
import { JobListing } from '../../models';
import './JobDescriptionCard.css';
import '../../styles/fonts.css';
import SkillsetTag from '../SkillsetTag/SkillsetTag';

interface JobDescriptionCardProps {
  jobListing: JobListing;
  jobDescriptionCardRef: React.MutableRefObject<HTMLDivElement | null>;
}

const JobDescriptionCard: React.FC<JobDescriptionCardProps> = ({
  jobListing,
  jobDescriptionCardRef,
}) => {
  return (
    <div className="main-card" ref={jobDescriptionCardRef}>
      <div className="main-card-top-row">
        <div className="company-image-container">
          <img
            src={jobListing.photo_url}
            alt="company-logo"
            className="company-image"
          />
        </div>
        <div className="company-description">
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
            <span className="fw-400 fs-14 gray-text updated-at">
              about 15 hours ago
            </span>

            <span className="fw-400 fs-14 gray-text">
              <i className="fas fa-map-marker-alt location-icon" />
              {jobListing.location}
            </span>

            <div className="company-buttons-row">
              <button className="fw-700 parent-button apply-button">
                <img src="https://nodeflair.com/packs/media/company/apply-0aa52bc4.svg" />
                Apply
              </button>
              <button className="fw-700 parent-button share-button">
                Save
              </button>
              <button className="fw-700 parent-button share-button">
                <img
                  className="share-icon"
                  src="https://nodeflair.com/packs/media/reviews/share_icon-e7584c2c.svg"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="job-metadata-info">
        <div className="job-metadata-info-first-row">
          <div className="job-metdata-block">
            <span className="fw-700 fs-14 black-text">Job Type</span>
            <span className="fw-400 fs-14">{jobListing.job_type}</span>
          </div>
          <div className="job-metdata-block">
            <span className="fw-700 fs-14 black-text">Seniority</span>
            <SkillsetTag skillset={jobListing.seniority} />
          </div>
        </div>

        <div>
          <div className="job-metdata-block">
            <span className="fw-700 fs-14 black-text">Years of Experience</span>
            <span className="fw-400 fs-14 black-text">
              {`At least ${jobListing.years_of_experience} years of experience`}
            </span>
          </div>
        </div>
      </div>

      <div className="job-description">
        <span className="fw-700 fs-16 black-text">Job Description</span>
        {Array(12)
          .fill(0)
          .map(() => (
            <p className="fw-400 fs-14 black-text job-description-full-info">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          ))}
      </div>

      <button className="similar-jobs-button">
        <span className="fw-700 fs-14">Search Similiar Jobs</span>
      </button>
    </div>
  );
};

export default JobDescriptionCard;
