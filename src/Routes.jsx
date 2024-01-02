import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import ImageGallery from "pages/Hover/ImageGallery";
const Home1 = React.lazy(() => import("pages/Hover/ImageGallery"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/hover" element={<ImageGallery />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
