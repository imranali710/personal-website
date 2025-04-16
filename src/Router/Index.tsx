import { Route, Routes, } from 'react-router-dom';


import Header from '../components/navigations/Header';
import HomePage from '../components/pages/HomePage';
import AboutPage from '../components/pages/AboutPage'; 
import ContactPage from '../components/pages/ContactPage';
import ProjectsPage from '../components/pages/ProjectsPage';
import SMSPage from '../components/pages/SMSPage';


const AppRouter = () => {

  return (
    <div className="min-h-screen  bg-white">
      <Header />
        {/* Main Content Area */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects">
          <Route path="school-management-system" element={<SMSPage />} />
          <Route index element={<ProjectsPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRouter;
