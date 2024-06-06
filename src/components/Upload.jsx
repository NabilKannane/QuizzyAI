import React, { useState, useContext } from "react";
import axios from "axios";
import { QuizContext } from "../context/QuizContext";
import NumberInput from "./NumberInput";
import { FaPlay, FaRotate } from "react-icons/fa6";

const URI_API ="https://a597a646-ce39-4c5c-a91a-0746232a7139-00-1oqntioxdcqrs.worf.replit.dev/generate_questions/"
// const URI_API ="https://4fd9-102-96-30-62.ngrok-free.app/generate_questions/"

const Upload = () => {
  const { setQuizzes ,setIsLoading } = useContext(QuizContext);
  const [fileName, setFileName] = useState("Upload file here");
  const [numQuestions, setNumQuestions] = useState();
  const [topics, setTopics] = useState("all");
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [filebase64, setfilebase64] = useState(null);

  const onChangeNumQuestions = (num) => {
    setNumQuestions(num);
    console.log(numQuestions)
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type !== "application/pdf") {
        setError("Please upload a PDF file.");
      } else {
        setFileName(file.name);
        setError(null);

        const reader = new FileReader();
        reader.onload = () => {
          const base64Data = reader.result.split(",")[1];
          console.log("Base64 encoded file:", base64Data);
          setfilebase64(base64Data);
        };
        reader.readAsDataURL(file);
      }
    } else {
      setFileName("Upload file here");
      setError(null);
    }
  };

  const handleUpload = async () => {
    const fileInput = document.querySelector('input[type="file"]');
    const file = fileInput.files[0];

    if (!file) {
      setError("Please select a file to upload.");
      return;
    }
    setLoading(true);
    setIsLoading(true);

    const formData = new FormData();
    formData.append("num_questions", numQuestions);
    formData.append("topics", topics);
    formData.append("pdf_file", filebase64);

    try {
      const response = await axios.post(
        URI_API,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("File uploaded successfully:", response.data);
      setQuizzes(response.data);
      setUploadSuccess(true);
      setFileName("Upload file here");
      setLoading(false);
      setIsLoading(false);
      
      setTimeout(() => {
        setUploadSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Error uploading file:", error);
      setError("Error uploading file. Please try again.");
      setLoading(false);
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setFileName("Upload file here");
    setUploadSuccess(false);
    setError(null);
    const fileInput = document.querySelector('input[type="file"]');
    fileInput.value = "";
  };

  const handleTopics = (event) => {
    setTopics(event.target.value);
    console.log(topics);
  };

  return (
    <div className=" h-100 ">
      <input
        className="mt-8 mb-6 h-12 w-full text-center shadow-slate-800 shadow-md rounded-md bg-[linear-gradient(#000,#000),linear-gradient(to_right,#334454,#334454)] px-3 py-2 text-slate-200 transition-all duration-500 placeholder:text-slate-500 focus:bg-[linear-gradient(#000,#000),linear-gradient(to_right,#c7d2fe,#8678f9)] focus:outline-none"
        placeholder="Topic"
        onChange={handleTopics}
      />
      <NumberInput onChange={onChangeNumQuestions} numberqst={numQuestions} />

      <div className="flex flex-col items-center mt-4 ">
        <div className="relative mt-8  w-24 h-24 rounded-full border-2 border-violet-300 flex justify-center items-center overflow-hidden shadow-[0px_0px_100px_rgb(161,3,252)_inset_0px_0px_10px_rgb(161,3,252)_0px_0px_5px_rgb(255,255,255)] animate-flicker">
          <input
            className="absolute opacity-0 w-full h-full cursor-pointer"
            type="file"
            accept=".pdf"
            name="file"
            onChange={handleFileChange}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            strokeWidth="2"
            fill="none"
            stroke="currentColor"
            className="text-violet-300 cursor-pointer animate-iconflicker"
          >
            <polyline points="16 16 12 12 8 16"></polyline>
            <line y2="21" x2="12" y1="12" x1="12"></line>
            <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
            <polyline points="16 16 12 12 8 16"></polyline>
          </svg>
        </div>
        <p className="mt-4 py-4  text-violet-300 text-center text-sm ">{fileName}</p>
        {uploadSuccess && (
          <p className="text-green-500">File uploaded successfully!</p>
        )}
        {error && <p className="text-red-500">{error}</p>}
        <div className="flex justify-between mt-4 mb-8 gap-4">
          <button
            className=" shadow-slate-800 shadow-md transition-background inline-flex h-12 items-center justify-center rounded-md  border border-gray-800 bg-gradient-to-r from-[#111111] via-neutral-900 to-[#8c2fff] bg-[length:200%_200%] bg-[0%_0%] px-6 font-medium hover:text-white duration-500 hover:bg-[100%_200%] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50"
            onClick={handleReset}
          >
            <FaRotate />
          </button>
          <button
            className="shadow-slate-800 shadow-md transition-background inline-flex h-12 items-center justify-center rounded-md border border-gray-800 bg-gradient-to-r from-neutral-950 via-[#873bec] to-[#8c2fff] bg-[length:200%_200%] bg-[0%_0%] px-6 font-medium hover:text-white duration-500 hover:bg-[100%_200%] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50"
            onClick={handleUpload}
            disabled={loading}
          >
            {loading ? "Uploading..." : <FaPlay />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Upload;
