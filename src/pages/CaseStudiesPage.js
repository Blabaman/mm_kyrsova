import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/CaseStudiesPage.css';
import GlossaryPopup from '../components/GlossaryPopup';


const cases = [
  {
    id: 1,
    label: 'Промова Обами, створена нейромережею для демонстрації можливостей синтезу.',
    type: 'video',
    src: 'assets/videos/case-obama.mp4',
  },
  {
    id: 2,
    label: 'AI-згенероване зображення Кеті Перрі на Met Gala, що ввело фанатів в оману.',
    type: 'image',
    src: 'assets/images/case-Perry.jpg',
  },
  {
    id: 3,
    label: 'Накладання обличчя Гал Гадот у фальшивому відео.',
    type: 'video',
    src: 'assets/videos/case-galgadot.mp4',
  },
  {
    id: 4,
    label: 'Мовна адаптація політичної промови в Індії з використанням діпфейку.',
    type: 'video',
    src: 'assets/videos/case-india-election.mp4',
  },
  {
    id: 5,
    label: 'Кадр з діпфейково відео Ентоні Болтона, використане у шахрайській інвестиційній схемі".',
    type: 'image',
    src: 'assets/images/case-Bolton.png',
  },
];

const CaseStudiesPage = () => {
  const [selectedTab, setSelectedTab] = useState(cases[0].id);

  return (
    <div className="casestudies-page">
      <header className="page-header">
        <h1>Резонансні випадки використання deepfake-технологій</h1>
      </header>

      <main className="content">
        <div className="tabs">
          <ul className="tab-list">
            {cases.map((item) => (
              <li
                key={item.id}
                className={`tab-item ${selectedTab === item.id ? 'active' : ''}`}
                onClick={() => setSelectedTab(item.id)}
              >
                {item.label}
              </li>
            ))}
          </ul>

          <div className="tab-content">
            {cases.map((item) =>
              selectedTab === item.id ? (
                <div key={item.id} className="media-container">
                  {item.type === 'video' ? (
                    <video controls>
                      <source src={item.src} type="video/mp4" />
                      Ваш браузер не підтримує відео.
                    </video>
                  ) : (
                    <img src={item.src} alt={item.label} />
                  )}
                </div>
              ) : null
            )}
          </div>
        </div>
      </main>

      <footer className="page-footer">
        <Link to="/" className="back-link">Повернутися на головну сторінку</Link>
      </footer>
    </div>
  );
};

export default CaseStudiesPage;
