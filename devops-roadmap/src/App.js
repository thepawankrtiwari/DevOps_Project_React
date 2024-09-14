import React from 'react';
import Header from './components/Header';
import SectionCard from './components/SectionCard';
import Footer from './components/Footer';
import './App.css';  // Ensure this file is imported to apply the styles

const sections = [
  {
    title: 'Linux Fundamentals',
    points: ['Shell Scripting, Linux/Unix', 'Command Line Proficiency'],
  },
  {
    title: 'Networking Concepts',
    points: ['SDLC, OSI models, TCP/IP Models','IP Addressing'],
  },
  {
    title: 'Version Control Systems (VCS)',
    points: ['Git', 'GitHub/GitLab/Bitbucket'],
  },
  {
    title: 'Language: Java | Golang | Python',
    points: ['Basic Syntax & Data Structures,Modules & Packages, Write & Execute Scripts'],
  },
  {
    title: 'Cloud Computing',
    points: ['AWS (EC2, S3, Lambda)', 'Azure', 'Google Cloud Platform'],
  },
  {
    title: 'Containerization',
    points: ['Docker', 'Docker Compose', 'Kubernetes'],
  },
  {
    title: 'CI/CD Technologies',
    points: ['Jenkins', 'CircleCI/TravisCI', 'GitLab CI'],
  },
  {
    title: 'Orchestration & Management',
    points: ['Architecture of Nodes,Pods & Services,Manage Resources, Scale Applications, Networking Model'],
  },
  {
    title: 'Networking & Security',
    points: ['Nginx/Apache', 'SSL/TLS', 'Firewall/Load Balancers'],
  },
  {
    title: 'Configuration Management Tools',
    points: ['Ansible ( Ansible Playbooks, Roles & Modules, Variables & Templates)','Puppet','Chef'],
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
      
      {/* Container for cards with equal space, no horizontal scroll */}
      <div className="sections-container">
        {sections.map((section, index) => (
          <SectionCard key={index} title={section.title} points={section.points} />
        ))}
      </div>

      {/* Subscribe section above the footer */}
      <div className="subscribe-section">
        <h3>Subscribe to Us!</h3>
        <form>
          <input type="email" placeholder="Enter your email" required />
          <input type="submit" value="Subscribe" />
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default App;
