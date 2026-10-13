import React, { useState, useEffect, Suspense, lazy } from "react";
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation
} from "react-router-dom";
import { MotionConfig } from "framer-motion";
import Particle from "./components/Particle";
import { PageTransition } from "./components/Motion";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


// Pages load on demand so the first visit only downloads Home. After the page has settled, the most
// visited pages are prefetched in idle time so navigating to them is still instant.
const pageLoaders = {
  HomeDetailed: () => import("./components/Home/HomeDetailed"),
  About: () => import("./components/About/About"),
  Projects: () => import("./components/Projects/Projects"),
  Resume: () => import("./components/Resume/ResumeNew"),
  Expriences: () => import("./components/Experiences/Experiences"),
  Certificates: () => import("./components/Certificates/Certificates"),
  Blog: () => import("./components/Blog/Blog"),
  BlogPost: () => import("./components/Blog/BlogPost"),
  CaseStudies: () => import("./components/CaseStudies/CaseStudies"),
  CaseStudyDetail: () => import("./components/CaseStudies/CaseStudyDetail"),
  EB1O1Dossier: () => import("./components/Immigration/EB1O1Dossier"),
  AdminSubmissions: () => import("./components/Admin/AdminSubmissions"),
};
const HomeDetailed = lazy(pageLoaders.HomeDetailed);
const About = lazy(pageLoaders.About);
const Projects = lazy(pageLoaders.Projects);
const Resume = lazy(pageLoaders.Resume);
const Expriences = lazy(pageLoaders.Expriences);
const Certificates = lazy(pageLoaders.Certificates);
const Blog = lazy(pageLoaders.Blog);
const BlogPost = lazy(pageLoaders.BlogPost);
const CaseStudies = lazy(pageLoaders.CaseStudies);
const CaseStudyDetail = lazy(pageLoaders.CaseStudyDetail);
const EB1O1Dossier = lazy(pageLoaders.EB1O1Dossier);
const AdminSubmissions = lazy(pageLoaders.AdminSubmissions);

function prefetchCommonPages() {
  const idle = window.requestIdleCallback || ((cb) => setTimeout(cb, 1500));
  idle(() => ["Projects", "Blog", "Expriences", "About", "CaseStudies"].forEach((n) => pageLoaders[n]()));
}

// Floating widgets appear after the page is usable, so they load separately too.
const ChatBot = lazy(() => import("./components/ChatBot/ChatBot"));
const VisitorPopup = lazy(() => import("./components/VisitorPopup/VisitorPopup"));
const VoiceAssistant = lazy(() => import("./components/VoiceAssistant/VoiceAssistant"));

// Each route fades in on navigation; keyed by path so it replays per page.
function AnimatedRoutes({ children }) {
  const location = useLocation();
  return (
    <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
      <PageTransition key={location.pathname}>
        <Routes location={location}>{children}</Routes>
      </PageTransition>
    </Suspense>
  );
}

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 250); // was a fixed 1.2s on every visit; keep just enough to avoid a flash

    window.addEventListener("load", prefetchCommonPages, { once: true });
    if (document.readyState === "complete") prefetchCommonPages();
    return () => clearTimeout(timer);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
    <Router>
      <Preloader load={load} />
      <Particle />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <AnimatedRoutes>
          <Route path="/" element={<Home />} />
          <Route path="/detailed" element={<HomeDetailed />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
          <Route path="/experience" element={<Expriences />} />
          <Route path="/ibrahim-eb1-o1-dossier-private" element={<EB1O1Dossier />} />
          <Route path="/admin-leads" element={<AdminSubmissions />} />

          <Route path="*" element={<Navigate to="/"/>} />
        </AnimatedRoutes>
        <Footer />
        <Suspense fallback={null}>
          <ChatBot />
          <VisitorPopup />
          <VoiceAssistant />
        </Suspense>
      </div>
    </Router>
    </MotionConfig>
  );
}

export default App;
