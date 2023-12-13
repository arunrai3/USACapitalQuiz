import './App.css';
import SelectQuiz from './select_type_quiz/select_quiz';
import Quiz from './quiz/quiz';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SelectQuiz />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
