import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';


import HistoryPage from './pages/HistoryPage';
import ArchitecturesPage from './pages/ArchitecturesPage';
import TypesPage from './pages/TypesPage';
import DetectionPage from './pages/DetectionPage';
import CaseStudiesPage from './pages/CaseStudiesPage';

import GlossaryPage from './pages/GlossaryPage';
import SourcesPage from './pages/SourcesPage';


const AppRoutes = () => (
  <>
    <Route exact path="/" component={HomePage} />
    <Route path="/history" component={HistoryPage} />
    <Route path="/architectures" component={ArchitecturesPage} />
    <Route path="/types" component={TypesPage} />
    <Route path="/detection" component={DetectionPage} />
    <Route path="/casestudies" component={CaseStudiesPage} />

    <Route path="/glossary" component={GlossaryPage} />
    <Route path="/sources" component={SourcesPage} />
  </>
);

export default AppRoutes;
