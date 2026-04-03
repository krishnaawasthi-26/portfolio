function SkillsSection({ skills }) {
  return (
    <section className="card">
      <h2>Technical Skills</h2>
      <ul className="skill-grid">
        {Object.entries(skills).map(([category, values]) => (
          <li key={category}>
            <strong>{category}</strong>
            <p>{values.join(', ')}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SkillsSection;
