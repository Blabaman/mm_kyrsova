// src/layouts/LandingLayout.js

import React from 'react';
import { Link } from 'react-router-dom';
import GlossaryPopup from '../../components/GlossaryPopup';

function LandingLayout() {
  return (
    <div className="landing-wrapper">

      <header className="landing-header">
        <div className="branding">
          <h1><GlossaryPopup term="Deepfake"/>-Технології</h1>
          <p className="tagline">Мультимедійна енциклопедія про <GlossaryPopup term="Deepfake"/>-Технології</p>
        </div>
      </header>

      <main className="landing-main">

        <section className="highlight-section">
          <div className="highlight-text">
            <h2>Зародження та еволюція</h2>
            <p>
              Від перших експериментів в університетських лабораторіях до сучасних систем, здатних генерувати віртуальні обличчя, голоси й емоції за лічені секунди.  
            </p>
            <Link to="/history" className="cta-link">Детальніше</Link>
          </div>
          <div className="image-content">
              <img src="assets/images/Test.png" alt="Test"/>
          </div>
        </section>

        <section className="info-grid">
          <div className="info-card">
            <h3>Архітектури систем</h3>
            <p>Основи генеративних алгоритмів: автокодери, GAN, трансформери та дифузійні моделі.</p>
            <Link to="/architectures">Перейти</Link>
          </div>

          <div className="info-card">
            <h3>Форми дипфейків</h3>
            <p>Синтез голосу й облич, ліпсинхронізація, керування рухами, анімація тіл.</p>
            <Link to="/types">Перейти</Link>
          </div>

          <div className="info-card">
            <h3>Методи виявлення</h3>
            <p>Алгоритмічні та візуальні підходи до розпізнавання фальсифікованих медіа.</p>
            <Link to="/detection">Перейти</Link>
          </div>

          <div className="info-card">
            <h3>Резонансні випадки</h3>
            <p>Інциденти, в яких дипфейки відіграли ключову роль у формуванні подій.</p>
            <Link to="/casestudies">Перейти</Link>
          </div>
        </section>

      </main>

      <footer className="landing-footer">
        <div className="footer-nav">
          <Link to="/">Головна</Link>
          <Link to="/glossary">Словник</Link>
          <Link to="/sources">Джерела</Link>
        </div>
        <p>&copy; {new Date().getFullYear()} Енциклопедія <GlossaryPopup term="Deepfake"/>-Технології</p>
      </footer>

    </div>
  );
}

export default LandingLayout;
