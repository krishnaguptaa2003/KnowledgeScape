import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/About/AboutPage';
import ContactPage from './pages/Contact/ContactPage';
import LoginPage from './pages/Auth/LoginPage';
import SignupPage from './pages/Auth/SignupPage';
import ForgotPasswordPage from './pages/Auth/ForgotPasswordPage';
import ResetPasswordPage from './pages/Auth/ResetPasswordPage';
import DashboardPage from './pages/Dashboard/DashboardPage';
import ProfilePage from './pages/Dashboard/ProfilePage';
import ProfileSettingsPage from './pages/Dashboard/ProfileSettingsPage';
import NotificationsSettingsPage from './pages/Dashboard/NotificationsSettingsPage';
import QuizHomePage from './pages/Quiz/QuizHomePage';
import QuizPlayPage from './pages/Quiz/QuizPlayPage';
import LearnHomePage from './pages/Learn/LearnHomePage';
import CategoryPage from './pages/Learn/CategoryPage';
import LeaderboardPage from './pages/Leaderboard/LeaderboardPage';
import BlogHomePage from './pages/Blog/BlogHomePage';
import PostPage from './pages/Blog/PostPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/signup" element={<SignupPage />} />
            <Route path="/auth/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/auth/reset-password/:token" element={<ResetPasswordPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/profile/settings" element={<ProfileSettingsPage />} />
            <Route path="/profile/notifications" element={<NotificationsSettingsPage />} />
            <Route path="/quiz" element={<QuizHomePage />} />
            <Route path="/quiz/play" element={<QuizPlayPage />} />
            <Route path="/learn" element={<LearnHomePage />} />
            <Route path="/learn/:category" element={<CategoryPage />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            <Route path="/blog" element={<BlogHomePage />} />
            <Route path="/blog/:postId" element={<PostPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;