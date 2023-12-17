import './App.css';
import SelectQuiz from './select_type_quiz/select_quiz';
import Navbar from './navbar/navbar'; 
import Quiz from './quiz/quiz';
import PostQuizPage from './post_quiz/post_quiz_page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> 
        <Routes>
          <Route path="/" element={<SelectQuiz />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/postquizpage" element={<PostQuizPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
