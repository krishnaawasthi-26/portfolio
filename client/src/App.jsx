import { useEffect, useState } from 'react';
import Header from './components/Header';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import AchievementsSection from './components/AchievementsSection';
import CertificatesSection from './components/CertificatesSection';

const API_BASE = import.meta.env.VITE_API_URL ?? 'http://localhost:5000';

function App() {
  const [portfolio, setPortfolio] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadPortfolio() {
      try {
        const response = await fetch(`${API_BASE}/api/portfolio`);
        if (!response.ok) {
          throw new Error('Could not load portfolio content.');
        }
        const data = await response.json();
        setPortfolio(data);
      } catch (err) {
        setError(err.message);
      }
    }

    loadPortfolio();
  }, []);

  if (error) {
    return <main className="status">{error}</main>;
  }

  if (!portfolio) {
    return <main className="status">Loading portfolio...</main>;
  }

  return (
    <main className="container">
      <Header data={portfolio.header} />
      <EducationSection items={portfolio.education} />
      <SkillsSection skills={portfolio.skills} />
      <ExperienceSection items={portfolio.experience} />
      <ProjectsSection items={portfolio.projects} />
      <AchievementsSection items={portfolio.achievements} />
      <CertificatesSection data={portfolio.certificates} />
    </main>
  );
}

export default App;
