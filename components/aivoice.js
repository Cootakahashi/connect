import axios from "axios";
import { useState, useEffect } from "react";

async function textToSpeech(text, apiKey) {
  const englishvoice = "en-US";
  const englishname = "en-US-Wavenet-D";
  const url =
    "https://texttospeech.googleapis.com/v1/text:synthesize?key=" + apiKey;

  const requestBody = {
    input: {
      text: text,
    },
    voice: {
      languageCode: "en-US",
      name: "en-US-Wavenet-E",
    },
    audioConfig: {
      audioEncoding: "MP3",
    },
  };

  try {
    const response = await axios.post(url, requestBody);

    return response.data.audioContent;
  } catch (error) {
    console.error("Error with the Text-to-Speech API:", error);

    return null;
  }
}

export default function Voice({ inputText }) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
  const handleTextToSpeech = async () => {
    const audioContent = await textToSpeech(inputText, apiKey);

    if (audioContent) {
      const audio = new Audio("data:audio/mp3;base64," + audioContent);
      audio.play();
    }
  };

  return (
    <div className="bg-green-00 -translate-y-60 flex justify-end mr-8">
      {/* <button onClick={handleTextToSpeech}>Play Text</button> */}
      <button
        onClick={handleTextToSpeech}
        className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-2 px-4 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
          />
        </svg>
        Play
      </button>
    </div>
  );
}
