import React from 'react';
import './styles/SourcesPage.css';

const sourcesData = [
  {
    title: 'Ілюстрація відео з використаням deepfake-моделей',
    link: 'https://www.youtube.com/@lipsynthesis',
  },
  {
    title: 'Ілюстрація відео з використаням deepfake-моделей',
    link: 'https://www.youtube.com/watch?v=iyiOVUbsPcM',
  },
  {
    title: 'Пошук артефактів у синтетичних зображеннях',
    link: 'https://www.researchgate.net/figure/Grad-CAM-visualization-of-the-EfficientNet-V2-L-based-deepfake-detector-on-randomly_fig1_372843350',
  },
  {
    title: 'Пошук артефактів у синтетичних зображеннях',
    link: 'https://www.researchgate.net/figure/Example-of-Deepfake-Artifacts-a-Faked-face-b-Original-face-c-Abnormal-edges-of_fig2_352884012',
  },
  {
    title: 'Ілюстрація архітектур нейронних мереж',
    link: 'https://www.geeksforgeeks.org/',
  },
  {
    title: 'Доскіч Л. "Фейкові новини як новітній засіб маніпуляції та дезінформації"',
    link: 'https://journals.uran.ua/bdi/article/view/269809',
  },
  {
    title: 'Чемерис Г. Ю. "Deepfakes as a Problem of Modernity: A Brief Overview and Current State"',
    link: 'https://www.semanticscholar.org/paper/DEEPFAKES-AS-A-PROBLEM-OF-MODERNITY%3A-A-BRIEF-AND-Chemerys/2f340b0d9e49274cb03260e0e90ba08a7477bce7',
  },
  {
    title: 'Онлайн-засіб для синтезу мови',
    link: 'https://www.respeecher.com/',
  },
];

const SourcesPage = () => {
  return (
    <div className="sources-page">
      <h1>Used Sources</h1>
      <div className="sources-list">
        {sourcesData.map((source, index) => (
          <div key={index} className="source-item">
            <h3>
              <a href={source.link} target="_blank" rel="noopener noreferrer">{source.title}</a>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SourcesPage;
