import logo from "./QuizzyAI_logo.png";
import "./App.css";
import Upload from "./components/Upload.jsx";
import Quizz from "./components/Quizz.jsx";
import { QuizProvider } from "./context/QuizContext.js";

function App() {
  return (
    <QuizProvider>
      <div class="flex flex-wrap h-full w-full absolute top-0 z-[-2]  text-white bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <div className=" md:w-1/3 bg-neutral-950  p-4 flex flex-col items-center">
          <img src={logo} alt="Logo" className="w-60 mt-4 mb-16" />
          <p>Makes quizzes from uploaded files in the cloud.</p>
          <Upload />
        </div>

        <div className="w-full md:w-2/3 ">
          <Quizz />
        </div>
      </div>
    </QuizProvider>
  );
}

export default App;
