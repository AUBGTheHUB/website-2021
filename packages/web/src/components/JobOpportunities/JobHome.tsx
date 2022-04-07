import React from 'react';
import './JobHome.css';
import NavigationJobs from '../HomeComponents/navbar-jobs';
import { Card, Button } from 'react-bootstrap';
import { useEffect } from 'react';

const JobHome = () => {
  return (
    <div className="job-opp-all">
      <NavigationJobs></NavigationJobs>
      <div className="job-holder">
        <div className="job-posting">
          <Card
            className="job-card"
            style={{ width: '18rem' }}
            onClick={() => {
              window.location.href = 'https://droxic.com/en/careers?dialog=2';
            }}
          >
            <Card.Img variant="top" src="/comp_logos/droxic.png" />
            <Card.Body>
              <Card.Title>Sitecore Software Developer</Card.Title>
            </Card.Body>
          </Card>
          <Card
            className="job-card"
            style={{ width: '18rem' }}
            onClick={() => {
              window.location.href = 'https://droxic.com/en/careers?dialog=3';
            }}
          >
            <Card.Img variant="top" src="/comp_logos/droxic.png" />
            <Card.Body>
              <Card.Title>Senior Front-end Expert</Card.Title>
            </Card.Body>
          </Card>
          <Card
            className="job-card"
            style={{ width: '18rem' }}
            onClick={() => {
              window.location.href = 'https://droxic.com/en/careers?dialog=4';
            }}
          >
            <Card.Img variant="top" src="/comp_logos/droxic.png" />
            <Card.Body>
              <Card.Title>.NET Developer (Sitecore) </Card.Title>
            </Card.Body>
          </Card>
          <Card
            className="job-card"
            style={{ width: '18rem' }}
            onClick={() => {
              window.location.href = 'https://droxic.com/en/careers?dialog=5';
            }}
          >
            <Card.Img variant="top" src="/comp_logos/droxic.png" />
            <Card.Body>
              <Card.Title>Magento Back End Developer</Card.Title>
            </Card.Body>
          </Card>
          <Card
            className="job-card"
            style={{ width: '18rem' }}
            onClick={() => {
              window.location.href = 'https://droxic.com/en/careers?dialog=6';
            }}
          >
            <Card.Img variant="top" src="/comp_logos/droxic.png" />
            <Card.Body>
              <Card.Title>QA Specialist</Card.Title>
            </Card.Body>
          </Card>
          <Card
            className="job-card"
            style={{ width: '18rem' }}
            onClick={() => {
              window.location.href = 'https://droxic.com/en/careers?dialog=7';
            }}
          >
            <Card.Img variant="top" src="/comp_logos/droxic.png" />
            <Card.Body>
              <Card.Title>.NET Developer (ASP.NET MVC, .NET Core)</Card.Title>
            </Card.Body>
          </Card>
          <Card
            className="job-card"
            style={{ width: '18rem' }}
            onClick={() => {
              window.location.href = 'https://amplifyanalytix.com/jobs/data-scientist/';
            }}
          >
            <Card.Img variant="top" src="/comp_logos/amplify.png" />
            <Card.Body>
              <Card.Title>Data Scientist</Card.Title>
            </Card.Body>
          </Card>
          <Card
            className="job-card"
            style={{ width: '18rem' }}
            onClick={() => {
              window.location.href = 'https://amplifyanalytix.com/jobs/data-engineer/';
            }}
          >
            <Card.Img variant="top" src="/comp_logos/amplify.png" />
            <Card.Body>
              <Card.Title>Data Engineer</Card.Title>
            </Card.Body>
          </Card>
          <Card
            className="job-card"
            style={{ width: '18rem' }}
            onClick={() => {
              window.location.href = 'https://amplifyanalytix.com/jobs/business-data-analyst/';
            }}
          >
            <Card.Img variant="top" src="/comp_logos/amplify.png" />
            <Card.Body>
              <Card.Title>Business Data Analyst</Card.Title>
            </Card.Body>
          </Card>
          <Card
            className="job-card"
            style={{ width: '18rem' }}
            onClick={() => {
              window.location.href = 'https://amplifyanalytix.com/jobs/product-manager/';
            }}
          >
            <Card.Img variant="top" src="/comp_logos/amplify.png" />
            <Card.Body>
              <Card.Title>Product Manager</Card.Title>
            </Card.Body>
          </Card>
          <Card
            className="job-card"
            style={{ width: '18rem' }}
            onClick={() => {
              window.location.href =
                'https://amplifyanalytix.com/jobs/senior-business-consultant-data-analyst/';
            }}
          >
            <Card.Img variant="top" src="/comp_logos/amplify.png" />
            <Card.Body>
              <Card.Title>Senior Business Consultant – Data Analyst</Card.Title>
            </Card.Body>
          </Card>
          <Card
            className="job-card"
            style={{ width: '18rem' }}
            onClick={() => {
              window.location.href = 'https://www.uber.com/global/en/careers/list/109306/';
            }}
          >
            <Card.Img variant="top" src="/comp_logos/uber_gold.png" />
            <Card.Body>
              <Card.Title>Software Engineering Intern - Sofia</Card.Title>
            </Card.Body>
          </Card>
          <Card
            className="job-card"
            style={{ width: '18rem' }}
            onClick={() => {
              window.location.href =
                'https://www.progress.com/company/careers/c-software-engineer-intern-o1Whifwg';
            }}
          >
            <Card.Img variant="top" src="/comp_logos/progress.png" />
            <Card.Body>
              <Card.Title>C# Software Engineer Intern</Card.Title>
            </Card.Body>
          </Card>
          <Card
            className="job-card"
            style={{ width: '18rem' }}
            onClick={() => {
              window.location.href =
                'https://www.progress.com/company/careers/software-engineering-intern-oG4ejfw1';
            }}
          >
            <Card.Img variant="top" src="/comp_logos/progress.png" />
            <Card.Body>
              <Card.Title>Software Engineering Intern</Card.Title>
            </Card.Body>
          </Card>
          <Card
            className="job-card"
            style={{ width: '18rem' }}
            onClick={() => {
              window.location.href = 'https://careers.paysafe.com';
            }}
          >
            <Card.Img variant="top" src="/comp_logos/paysafe.png" className="paysafe-image" />
            <Card.Body>
              <Card.Title>Career Opportunities</Card.Title>
            </Card.Body>
          </Card>

          <Card
            className="job-card"
            style={{ width: '18rem' }}
            onClick={() => {
              window.location.href = 'https://careers.vmware.com/internships';
            }}
          >
            <Card.Img variant="top" src="/comp_logos/vmware.png" />
            <Card.Body>
              <Card.Title>Internships</Card.Title>
            </Card.Body>
          </Card>
          <Card
            className="job-card"
            style={{ width: '18rem' }}
            onClick={() => {
              window.location.href = 'https://out2bound.com/careers/business-development-trainee/';
            }}
          >
            <Card.Img variant="top" src="/comp_logos/out2bound.png" />
            <Card.Body>
              <Card.Title>Business Development Trainee</Card.Title>
            </Card.Body>
          </Card>
          <Card
            className="job-card"
            style={{ width: '18rem' }}
            onClick={() => {
              window.location.href =
                'https://out2bound.com/careers/business-development-representatives-german/';
            }}
          >
            <Card.Img variant="top" src="/comp_logos/out2bound.png" />
            <Card.Body>
              <Card.Title>Business Development Representatives - German</Card.Title>
            </Card.Body>
          </Card>
          <Card
            className="job-card"
            style={{ width: '18rem' }}
            onClick={() => {
              window.location.href =
                'https://out2bound.com/careers/business-development-representatives-english/';
            }}
          >
            <Card.Img variant="top" src="/comp_logos/out2bound.png" />
            <Card.Body>
              <Card.Title>Business Development Representatives - English</Card.Title>
            </Card.Body>
          </Card>
          <Card
            className="job-card"
            style={{ width: '18rem' }}
            onClick={() => {
              window.location.href = 'https://roiti.com/careers/';
            }}
          >
            <Card.Img variant="top" src="/comp_logos/roiti.png" className="roiti_image" />
            <Card.Body>
              <Card.Title>Junior ETRM Analyst</Card.Title>
            </Card.Body>
          </Card>
          <Card
            className="job-card"
            style={{ width: '18rem' }}
            onClick={() => {
              window.location.href = 'https://roiti.com/careers/';
            }}
          >
            <Card.Img variant="top" src="/comp_logos/roiti.png" className="roiti_image" />
            <Card.Body>
              <Card.Title>Junior Cloud Software Engineer</Card.Title>
            </Card.Body>
          </Card>
          <Card
            className="job-card"
            style={{ width: '18rem' }}
            onClick={() => {
              window.location.href = 'https://roiti.com/careers/';
            }}
          >
            <Card.Img variant="top" src="/comp_logos/roiti.png" className="roiti_image" />
            <Card.Body>
              <Card.Title>Junior Data Engineer</Card.Title>
            </Card.Body>
          </Card>
          <Card
            className="job-card"
            style={{ width: '18rem' }}
            onClick={() => {
              window.location.href = 'https://roiti.com/careers/';
            }}
          >
            <Card.Img variant="top" src="/comp_logos/roiti.png" className="roiti_image" />
            <Card.Body>
              <Card.Title>Junior ETRM Java Developer</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default JobHome;
