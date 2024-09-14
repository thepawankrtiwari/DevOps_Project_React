import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import SectionCard from './Components/SectionCard';
import Footer from './Components/Footer';
import './App.css';

const sections = {
  foundationalKnowledge: [
    {
      title: 'Operating Systems & Shell Scripting',
      points: ['Linux/Unix', 'Shell Scripting', 'Command Line Proficiency'],
    },
    {
      title: 'Version Control Systems (VCS)',
      points: ['Git', 'GitHub/GitLab/Bitbucket'],
    }
  ],
  automationCICD: [
    {
      title: 'CI/CD Pipelines',
      points: ['Jenkins', 'CircleCI/TravisCI', 'GitLab CI'],
    },
    {
      title: 'Containers & Orchestration',
      points: ['Docker', 'Docker Compose', 'Kubernetes'],
    }
  ],
  cloudInfrastructure: [
    {
      title: 'Cloud Computing',
      points: ['AWS (EC2, S3, Lambda)', 'Azure', 'Google Cloud Platform'],
    },
    {
      title: 'Infrastructure as Code (IaC)',
      points: ['Terraform', 'Ansible/Chef/Puppet'],
    }
  ],
  monitoringCollaboration: [
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
    }
  ]
};

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      
      {/* Flexbox container to align sections horizontally */}
      <div className="section-container">
        <section id="foundational-knowledge">
          <SectionCard title="Foundational Knowledge" points={sections.foundationalKnowledge.map(section => section.title)} />
        </section>

        <section id="automation-ci-cd">
          <SectionCard title="CI/CD Automation" points={sections.automationCICD.map(section => section.title)} />
        </section>

        <section id="cloud-infrastructure">
          <SectionCard title="Cloud & Infrastructure" points={sections.cloudInfrastructure.map(section => section.title)} />
        </section>

        <section id="monitoring-collaboration">
          <SectionCard title="Monitoring & Logging" points={sections.monitoringCollaboration.map(section => section.title)} />
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default App;
