import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Directions from './components/Directions';
import Projects from './components/Projects';
import Quiz from './components/Quiz';
import About from './components/About';
import Architecture from './components/Architecture';
import Steps from './components/Steps';
import WinterOffer from './components/WinterOffer';
import Portfolio from './components/Portfolio';
import Investors from './components/Investors';
import Geography from './components/Geography';
import Articles from './components/Articles';
import ContactForm from './components/ContactForm';
import PreFooterBanner from './components/PreFooterBanner';
import Footer from './components/Footer';

// Modals
import ConsultationModal from './components/Modals/ConsultationModal';
import FloorPlanModal from './components/Modals/FloorPlanModal';
import EstimateModal from './components/Modals/EstimateModal';
import ArticleModal from './components/Modals/ArticleModal';

export default function App() {
  // Modal states
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [consultationTitle, setConsultationTitle] = useState('Обсудить строительство');
  const [floorPlanProject, setFloorPlanProject] = useState(null);
  const [estimateProject, setEstimateProject] = useState(null);
  const [activeArticle, setActiveArticle] = useState(null);

  // Toast notification
  const [toastMessage, setToastMessage] = useState('');

  const handleOpenConsultation = (title) => {
    setConsultationTitle(title || 'Обсудить строительство');
    setConsultationOpen(true);
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 4500);
  };

  return (
    <div className="min-h-screen bg-white text-forest-dark selection:bg-bronze selection:text-white font-sans antialiased">
      <Header onOpenConsultation={handleOpenConsultation} />
      
      <main>
        <Hero onOpenConsultation={handleOpenConsultation} />
        <Directions onOpenConsultation={handleOpenConsultation} />
        <Projects
          onOpenFloorPlan={(p) => setFloorPlanProject(p)}
          onOpenEstimate={(p) => setEstimateProject(p)}
        />
        <Quiz onOpenConsultation={handleOpenConsultation} />
        <About />
        <Architecture onOpenConsultation={handleOpenConsultation} />
        <Steps />
        <WinterOffer onOpenConsultation={handleOpenConsultation} />
        <Portfolio onOpenConsultation={handleOpenConsultation} />
        <Investors onOpenConsultation={handleOpenConsultation} />
        <Geography />
        <Articles
          onOpenArticle={(a) => setActiveArticle(a)}
          onOpenConsultation={handleOpenConsultation}
        />
        <ContactForm
          onOpenConsultation={handleOpenConsultation}
          onToast={showToast}
        />
        <PreFooterBanner />
      </main>

      <Footer onOpenConsultation={handleOpenConsultation} />

      {/* Interactive Modals */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        title={consultationTitle}
      />

      <FloorPlanModal
        isOpen={!!floorPlanProject}
        onClose={() => setFloorPlanProject(null)}
        project={floorPlanProject}
      />

      <EstimateModal
        isOpen={!!estimateProject}
        onClose={() => setEstimateProject(null)}
        project={estimateProject}
      />

      <ArticleModal
        isOpen={!!activeArticle}
        onClose={() => setActiveArticle(null)}
        article={activeArticle}
      />

      {/* Global Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#28332F] text-white px-6 py-4 rounded-2xl shadow-2xl border border-bronze/40 flex items-center gap-3 animate-slideUp">
          <span className="w-2.5 h-2.5 rounded-full bg-bronze animate-ping" />
          <p className="text-xs sm:text-sm font-semibold">{toastMessage}</p>
        </div>
      )}
    </div>
  );
}
