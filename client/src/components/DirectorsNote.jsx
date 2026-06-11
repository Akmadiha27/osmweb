import { DIRECTORS_NOTE } from '../data/directorsNote'

export function DirectorsNote() {
  const { imageSrc, imageAlt, label, title, paragraphs, signOffName, signOffDesignation, signOffSub } =
    DIRECTORS_NOTE

  return (
    <section className="directors-note" aria-labelledby="directors-note-title">
      <div className="directors-note-card">
        <div className="directors-note-media">
          <img src={imageSrc} alt={imageAlt} width={280} height={340} decoding="async" />
        </div>
        <div className="directors-note-content">
          <div className="section-label">{label}</div>
          <h2 className="section-title" id="directors-note-title">
            {title}
          </h2>
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="directors-note-copy">
              {paragraph}
            </p>
          ))}
          <div className="directors-note-signoff">
            <span className="directors-note-name">{signOffName}</span>
            <span className="directors-note-designation">{signOffDesignation}</span>
            <span className="directors-note-college">{signOffSub}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
