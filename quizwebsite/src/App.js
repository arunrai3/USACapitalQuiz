import './App.css';
import SelectQuiz from './select_type_quiz/select_quiz';
import Navbar from './navbar/navbar'; 
import Quiz from './quiz/quiz';
import PostQuizPage from './post_quiz/post_quiz_page';
import CreateAccount from './login_create_account/create_account';
import Login from './login_create_account/login';
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
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
