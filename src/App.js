import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Quiz from "./pages/Quiz";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/quiz/:quizId" element={<Quiz />} />
    </Routes>
  );
}

export default App;
