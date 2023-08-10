import { JobEmploymentType, JobScope, JobSeniority } from '.';

type JobListing = {
  id: number;
  company_name: string;
  star_rating: string;
  job_title: string;
  // Assumption: There can only be so many job scopes
  job_scope: JobScope;
  location: string;
  photo_url: string;
  // Assumption: Salaries are in SGD unit of currency and not all companies reveal their salaries
  salary_lower_bound?: number;
  salary_upper_bound?: number;
  skillsets: string[];
  created_at: Date;
  updated_at: Date;
  job_type: JobEmploymentType;
  seniority: JobSeniority;
  years_of_experience: number;
};

export { type JobListing };
