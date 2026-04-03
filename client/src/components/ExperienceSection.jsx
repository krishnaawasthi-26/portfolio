function ExperienceSection({ items }) {
  return (
    <section className="card">
      <h2>Work Experience</h2>
      {items.map((item) => (
        <article key={item.company} className="item">
          <h3>{item.company}</h3>
          <p>{item.role}</p>
          <small>{item.duration} • {item.location}</small>
          <ul>
            {item.highlights.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}

export default ExperienceSection;
