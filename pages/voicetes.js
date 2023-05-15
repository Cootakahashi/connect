import axios from "axios";

async function textToSpeech(text, apiKey) {
  const chinesevoice = "cmn-CN";
  const chinesename = "cmn-CN-Wavenet-A";
  const englishvoice = "en-US";
  const englishname = "en-US-Wavenet-A";
  const url =
    "https://texttospeech.googleapis.com/v1/text:synthesize?key=" + apiKey;

  const requestBody = {
    input: {
      text: text,
    },
    voice: {
      languageCode: chinesevoice,
      name: chinesename,
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

import { useState } from "react";

export default function voicetes() {
  const [text, setText] = useState("");
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

  const handleTextToSpeech = async () => {
    const audioContent = await textToSpeech(text, apiKey);
    if (audioContent) {
      const audio = new Audio("data:audio/mp3;base64," + audioContent);
      audio.play();
    }
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your text here"
      ></textarea>
      <button onClick={handleTextToSpeech}>Play Text</button>
    </div>
  );
}
