import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import LessonViewer from "./pages/LessonViewer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/certificate/:courseId" element={<CertificateViewer />} />
        <Route path="/quiz/:lessonId" element={<QuizViewer />} />
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/lesson/:id" element={<LessonViewer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
