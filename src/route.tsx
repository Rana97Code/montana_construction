import NotFound from "./components/common/NotFound";
import About from "./pages/About";
import Blog from "./pages/Bllog";
import Career from "./pages/Career";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard/AdminLayout";
import AdminHome from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Services from "./pages/Services";
import TermsAndConditions from "./pages/TermsConditions";
import AdminLogin from "./pages/AdminLogin";
import AdminProtectedRoute from "./services/AdminProtectedRoute";
import Projects from "./pages/Projects";
import ApplyJob from "./pages/ApplyJob";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/services", element: <Services /> },
  { path: "/projects", element: <Projects /> },
  { path: "/contact", element: <Contact /> },
  { path: "/about", element: <About /> },
  { path: "/blog", element: <Blog /> },
  { path: "/case-studies", element: <CaseStudies /> },
  { path: "/career", element: <Career /> },
  { path: "/terms", element: <TermsAndConditions /> },
  { path: "/privacy", element: <PrivacyPolicy /> },
  { path: "/career/apply-job", element: <ApplyJob /> },
  {
    path: "/dashboard",
    element: <AdminProtectedRoute element={<Dashboard />} />,
    children: [
      {
        index: true,
        element: <AdminHome />,
      },
    ],
  },
  {
    path: "admin/login",
    element: <AdminLogin />,
  },
  { path: "/*", element: <NotFound /> },
];
