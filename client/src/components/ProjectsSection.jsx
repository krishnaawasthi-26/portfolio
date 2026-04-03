function ProjectsSection({ items }) {
  return (
    <section className="card">
      <h2>Projects</h2>
      {items.map((item) => (
        <article key={item.name} className="item">
          <h3>{item.name}</h3>
          <p>{item.stack.join(' • ')}</p>
          <ul>
            {item.highlights.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <div className="links">
            {item.links.map((link) => (
              <a key={link.label} href={link.url} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}

export default ProjectsSection;
