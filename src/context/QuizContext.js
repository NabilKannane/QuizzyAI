import React, { createContext, useEffect, useState } from 'react';

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {

  const [error , setError] = useState(null)
  const [quizzes, setQuizzes] = useState([]);
  const [num_questions , setNum_questions] = useState()
  const [isLoading, setIsLoading] = useState(false);
  const [finish, setFinish] = useState(false);
  
  useEffect(() => {
   setNum_questions(quizzes.num_questions)
  
  }, [quizzes])
  

  // console.log('quizzes = ' + JSON.stringify(quizzes, null, 2));
console.log(num_questions)
  return (
    <QuizContext.Provider value={{ quizzes, setQuizzes,  isLoading, setIsLoading ,error , setError ,finish , setFinish }}>
      {children}
    </QuizContext.Provider>
  );
};
