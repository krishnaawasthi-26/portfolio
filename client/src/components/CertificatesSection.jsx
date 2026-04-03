function CertificatesSection({ data }) {
  return (
    <section className="card">
      <h2>Certificates</h2>
      {data.providers.map((provider) => (
        <article key={provider.name} className="item">
          <h3>{provider.name}</h3>
          <ul>
            {provider.items.map((certificate) => (
              <li key={certificate.name}>
                <a href={certificate.url} target="_blank" rel="noreferrer">
                  {certificate.name}
                </a>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}

export default CertificatesSection;
