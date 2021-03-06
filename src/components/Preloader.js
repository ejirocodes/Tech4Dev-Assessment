import React from 'react';
import '../css/preloader.css';

export default function Preloader() {
  return (
    <section className="preloader-container">
      <div className="preloader-battery">
        <div className="cssload-liquid"></div>
      </div>
      <p style={{ marginTop: '1rem' }}>Loading...</p>
    </section>
  );
}
