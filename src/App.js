import React from 'react';
import { HashRouter  as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';

import HistoryPage from './pages/HistoryPage';
import ArchitecturesPage from './pages/ArchitecturesPage';
import TypesPage from './pages/TypesPage';
import DetectionPage from './pages/DetectionPage';
import CaseStudiesPage from './pages/CaseStudiesPage';

import GlossaryPage from './pages/GlossaryPage';
import SourcesPage from './pages/SourcesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/history" element={<HistoryPage />} />
        <Route path="/architectures" element={<ArchitecturesPage />} />
        <Route path="/types" element={<TypesPage />} />
        <Route path="/detection" element={<DetectionPage />} />
        <Route path="/casestudies" element={<CaseStudiesPage />} />

        <Route path="/glossary" element={<GlossaryPage />} />
        <Route path="/sources" element={<SourcesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
