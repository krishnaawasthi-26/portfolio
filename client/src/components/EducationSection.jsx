function EducationSection({ items }) {
  return (
    <section className="card">
      <h2>Education</h2>
      {items.map((item) => (
        <article key={item.institution} className="item">
          <h3>{item.institution}</h3>
          <p>{item.program}</p>
          <small>{item.duration} • {item.location}</small>
        </article>
      ))}
    </section>
  );
}

export default EducationSection;
