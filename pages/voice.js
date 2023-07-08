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
    <div className="bg-green-200 h-80">
      {/* <button onClick={handleTextToSpeech}>Play Text</button> */}
      <button
        onClick={handleTextToSpeech}
        className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-2 px-4 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 5V3m2 16a9 9 0 0 1-2 .012M3 12a9.001 9.001 0 0 1 2-5.372A9.001 9.001 0 0 1 12 3a9.001 9.001 0 0 1 7 14.372A9.001 9.001 0 0 1 12 21z"
          />
        </svg>
        Play
      </button>
    </div>
  );
}
