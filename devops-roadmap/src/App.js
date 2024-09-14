import React from 'react';
import Header from './components/Header';
import SectionCard from './components/SectionCard';
import Footer from './components/Footer';
import UpdateForm from './components/UpdateForm'; 

const sections = [
  {
    title: 'Operating Systems & Shell Scripting',
    points: ['Linux/Unix', 'Shell Scripting', 'Command Line Proficiency'],
  },
  {
    title: 'Version Control Systems (VCS)',
    points: ['Git', 'GitHub/GitLab/Bitbucket'],
  },
  {
    title: 'CI/CD Pipelines',
    points: ['Jenkins', 'CircleCI/TravisCI', 'GitLab CI'],
  },
  {
    title: 'Containers & Orchestration',
    points: ['Docker', 'Docker Compose', 'Kubernetes'],
  },
  {
    title: 'Cloud Computing',
    points: ['AWS (EC2, S3, Lambda)', 'Azure', 'Google Cloud Platform'],
  },
  {
    title: 'Infrastructure as Code (IaC)',
    points: ['Terraform', 'Ansible/Chef/Puppet'],
  },
  {
    title: 'Monitoring & Logging',
    points: ['Prometheus', 'Grafana', 'ELK Stack', 'Splunk'],
  },
  {
    title: 'Networking & Security',
    points: ['Nginx/Apache', 'SSL/TLS', 'Firewall/Load Balancers'],
  },
  {
    title: 'Automation & Scripting',
    points: ['Python/Bash', 'Groovy', 'PowerShell'],
  },
  {
    title: 'Collaboration Tools',
    points: ['Slack/Microsoft Teams', 'Jira/Trello'],
  },
];

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="sections-container">
        {sections.map((section, index) => (
          <SectionCard key={index} title={section.title} points={section.points} />
        ))}
      </div>
      <Footer />
    </div>
  );
};



export default App;
