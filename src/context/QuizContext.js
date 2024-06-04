import React, { createContext, useEffect, useState } from 'react';

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [quizzes, setQuizzes] = useState([]);
  const [num_questions , setNum_questions] = useState()
  const [isLoading, setIsLoading] = useState(false); // Ajoute cet état

  useEffect(() => {
   setNum_questions(quizzes.num_questions)
  }, [quizzes])
  

  console.log('quizzes = ' + JSON.stringify(quizzes, null, 2));
console.log(num_questions)
  return (
    <QuizContext.Provider value={{ quizzes, setQuizzes,  isLoading, setIsLoading  }}>
      {children}
    </QuizContext.Provider>
  );
};
