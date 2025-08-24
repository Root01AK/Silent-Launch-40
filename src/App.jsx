import './App.css'
import { Route, Routes } from 'react-router'


import Home from './Pages/home'
import Navbar from './Components/Navbar'
import Signin from './Pages/signin'
import Signup from './Pages/Signup'
import Package from './Pages/Packages'
import Upload from './Pages/upload'
import ISBN from './Pages/ISBN'
import Plagarism from './Pages/Plagarism'
import Editor from './Pages/Editor'
import ReviewList from './Pages/ReviewList'
import Areview from './Pages/Areview'
import ReviewDetail from "./Pages/ReviewDetail";
import LanguageEditor from "./Pages/LanguageEditor";
import CoverDesigner from "./Pages/CoverDesigner";
import Finalsubmit from './Pages/finalssubmit';
import Contact from './Pages/Contact'
// import Main from './Pages/main'
import About from './Pages/About'
import Footer from './Components/Footer';
import Login from './Pages/Login'
import Support from './Pages/Support'
import ProtectedRoute from "./ProtectedRoute";
import Terms from './Pages/terms';
import Privacy from './Pages/privacy';
import FinalReviewPage from './Pages/FinalReviewPage'
import FreelancerHub from './Components/FreelancerHub'

function App() {
  return (
    <>
      <Navbar />
      <div className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/package" element={<Package />} />
          <Route path="/file" element={<Upload />} />
          <Route path="/isbn" element={<ISBN />} />
          <Route path="/plagarism" element={<Plagarism />} />
          {/* <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="support" element={<Support />} />
          <Route
            path="/editor-page"
            element={
              <ProtectedRoute>
                <Editor />
              </ProtectedRoute>
            }
          />
          <Route path="/review-list" element={<ReviewList />} />
          <Route path="/review-detail/:docId" element={<ReviewDetail />} />
          <Route path="/edit/:docId" element={<LanguageEditor />} />
          <Route path="/cover-design/:docId" element={<CoverDesigner />} />
          <Route path="/arevi" element={<Areview />} />
          <Route path="/submit" element={<Finalsubmit />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/main" element={<Main />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/FreelancerHub" element={<FreelancerHub />} />
          <Route path="/finalReviewPage/:docId" element={<FinalReviewPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App
