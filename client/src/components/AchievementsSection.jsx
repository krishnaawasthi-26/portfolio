function AchievementsSection({ items }) {
  return (
    <section className="card">
      <h2>Achievements & Leadership</h2>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default AchievementsSection;
