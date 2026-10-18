import React from 'react';
import './CardholderLinks.css';

export default function CardholderLinks() {
  const documents = [
    {
      id: 1,
      title: 'Ինչ անել, եթե բողոք ունեք (01.09.2026թ.)',
      url: '#'
    },
    {
      id: 2,
      title: 'Համալիր բանկային ծառայությունների մատուցման պայմաններ 16.05.2025թ.',
      url: '#'
    }
  ];

  return (
    <div className="cardholder-page">
      {/* Ձախ կողմի սոց. ցանցերի ֆիքսված կոճակներ */}
      <div className="social-side-bar">
        <a href="#facebook" aria-label="Facebook">f</a>
        <a href="#linkedin" aria-label="LinkedIn">in</a>
        <a href="#instagram" aria-label="Instagram">
          <span className="ig-icon">📷</span>
        </a>
      </div>

      <div className="cardholder-container">
        {/* Breadcrumbs */}
        <nav className="cardholder-breadcrumbs">
          <a href="/" className="crumb-home">🏠</a>
          <span className="crumb-separator">›</span>
          <span className="crumb-current">Հղումներ Բանկի քարտապանների համար</span>
        </nav>

        {/* Վերնագիր */}
        <h1 className="cardholder-main-title">
          Հղումներ Բանկի քարտապանների համար
        </h1>

        {/* Փաստաթղթեր բաժին */}
        <div className="documents-section">
          <h2 className="docs-title">Փաստաթղթեր</h2>

          <div className="docs-list">
            {documents.map((doc) => (
              <a key={doc.id} href={doc.url} className="doc-item-card">
                <div className="doc-icon">
                  <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 0H2C0.9 0 0 0.9 0 2V26C0 27.1 0.9 28 2 28H22C23.1 28 24 27.1 24 26V10L14 0Z" fill="#F0E8FF"/>
                    <path d="M14 0V10H24L14 0Z" fill="#D3BFFF"/>
                    <path d="M12 11V21M12 21L8.5 17.5M12 21L15.5 17.5" stroke="#7000FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="doc-text">{doc.title}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Թարմացման ամսաթիվ */}
        <div className="cardholder-updated-info">
          Թարմացվել է` 06/08/2026 11:03
        </div>
      </div>
    </div>
  );
}