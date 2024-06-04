import React, { useContext, useState , useEffect} from 'react';
import { QuizContext } from '../context/QuizContext';
import logo from "../biglogo.png";
import Loader from './Loader'; 

const Quiz = () => {
  const { quizzes , isLoading} = useContext(QuizContext);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsSubmitted(false);
  }, [quizzes]);

  
  const handleSubmit = () => {
    if (!selectedOption) {
      alert('Please select an option before submitting.');
      return;
    }
    setIsSubmitted(true);
  };

  const handleOptionClick = (option) => {
    if (!isSubmitted) {
      setSelectedOption(option);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizzes.quiz.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    }
  };

  if (isLoading) {
    return <Loader/>;
  }


  if (!quizzes.quiz) {
    return (
      <div className='w-full h-full '>
    <div className='flex flex-col p-28 justify-center items-center text-2xl'>
      <img src={logo} alt="Logo" className="w-48 mb-4" />
    <h3 className='text-2xl mb-4'>Welcome to QuizzyAI</h3>
    <p className='text-xl font-thin'>The ideal platform to test your knowledge and have fun.</p>
  </div>
      </div>

    );
  }
  const num_max = quizzes.num_questions;
  const currentQuestion = quizzes.quiz[currentQuestionIndex];
  const correctAnswer = currentQuestion.answer;


if (!currentQuestion) {
  return <div>Loading...</div>;
}

  return (
    <div className="flex flex-col w-full items-center justify-center h-full">
      <div className="p-6 text-center w-11/12 md:w-1/2 py-16">
        <h2 className="text-xl font-semibold">
          Question {currentQuestionIndex + 1} - {num_max}
        </h2>
        <h3 className="text-xl mt-8 font-normal mb-4">
          {currentQuestion.question}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {currentQuestion.options.map((option, index) => {
            const optionText = Object.values(option)[0];
            const isSelected = selectedOption === optionText;
            const isCorrectOption = optionText === correctAnswer;
            const optionStyle = isSelected
              ? isSubmitted
                ? isCorrectOption
                  ? 'bg-green-500'
                  : 'bg-red-500'
                : 'bg-violet-300'
              : 'bg-neutral-900';

            return (
              <div
                key={index}
                className={`p-4 rounded cursor-pointer ${optionStyle}`}
                onClick={() => handleOptionClick(optionText)}
              >
                <p className="text-base font-medium">{optionText}</p>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center gap-4 mt-8">
          <button
            className="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-neutral-950 font-medium text-neutral-200 hover:bg-red-900 transition-all duration-300 hover:w-32"
            onClick={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
          >
            <div className="inline-flex whitespace-nowrap opacity-0 transition-all duration-200 group-hover:translate-x-3 group-hover:opacity-100">
              Previous
            </div>
            <div className="absolute left-3.5">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 rotate-180"
              >
                <path
                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </button>
          <button
            className="relative h-12 overflow-hidden rounded bg-neutral-950 px-5 py-2.5 text-white transition-all duration-200 hover:bg-violet-900 hover:ring-offset-2 active:ring-2 active:ring-neutral-800"
            onClick={handleSubmit}
            disabled={!selectedOption}
          >
            Confirm
          </button>
          <button
            className="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-neutral-950 font-medium text-neutral-200 hover:bg-green-900 transition-all duration-300 hover:w-32"
            onClick={handleNextQuestion}
            disabled={currentQuestionIndex === quizzes.quiz.length - 1}
          >
            <div className="inline-flex whitespace-nowrap opacity-0 transition-all duration-200 group-hover:-translate-x-3 group-hover:opacity-100">
              Next
            </div>
            <div className="absolute right-3.5">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <path
                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
