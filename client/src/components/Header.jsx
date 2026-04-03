function Header({ data }) {
  return (
    <header className="card header">
      <h1>{data.name}</h1>
      <p>{data.location}</p>
      <div className="links">
        <a href={`tel:${data.phone}`}>{data.phone}</a>
        <a href={`mailto:${data.email}`}>{data.email}</a>
        {data.links.map((link) => (
          <a key={link.label} href={link.url} target="_blank" rel="noreferrer">
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}

export default Header;
