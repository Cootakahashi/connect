import axios from "axios";

const api_key = "<YOUR_API_KEY>";

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
