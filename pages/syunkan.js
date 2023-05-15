import React, { useState, useEffect } from "react";
import MicRecorder from "mic-recorder-to-mp3";

const recorder = new MicRecorder({ bitRate: 128 });
import axios from "axios";

const api_key = process.env.NEXT;

const transcribeAudio = async (audioData) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${api_key}`,
  };

  const data = {
    model: "davinci",
    prompt: "Transcribe the following audio",
    audio: audioData,
    temperature: 0.7,
    max_tokens: 60,
  };

  const response = await axios.post(
    "https://api.openai.com/v1/engines/davinci-codex/completions",
    data,
    { headers }
  );

  if (response.status === 200) {
    const transcript = response.data.choices[0].text;
    console.log(transcript);
  } else {
    console.error(response.statusText);
  }
};

export default function RecordButton() {
  const [isRecording, setIsRecording] = useState(false);
  const [blobURL, setBlobURL] = useState("");

  const startRecording = () => {
    recorder.start().then(() => {
      setIsRecording(true);
    });
  };

  const stopRecording = () => {
    recorder
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const blobURL = URL.createObjectURL(blob);
        setBlobURL(blobURL);
        setIsRecording(false);
      });
  };
  //   transcribeAudio(blobURL);

  return (
    <>
      <div className="flex justify-center gap-10 pt-20">
        <button
          onClick={startRecording}
          disabled={isRecording}
          className="border px-5 py-2 "
        >
          Record
        </button>
        <button onClick={stopRecording} disabled={!isRecording}>
          Stop
        </button>
        {blobURL && <audio src={blobURL} controls />}
      </div>
    </>
  );
}
