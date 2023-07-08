import axios from "axios";

export const onClickmake = async (makeword, setIsLoading, setData) => {
  setIsLoading(true);
  console.log(makeword);
  console.log("START");
  const prompt =
    "以下の単語群「" +
    String(makeword) +
    "」を全て使って、一つの英文とその日本語訳を作成してください。各文は改行で区切ってください。";

  console.log(prompt);
  const engine = "text-davinci-003";
  const maxTokens = 240;
  const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
  try {
    const { data } = await axios.post(
      "https://api.openai.com/v1/engines/" + engine + "/completions",
      {
        prompt,
        max_tokens: maxTokens,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + apiKey,
        },
      }
    );
    setData(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
  setIsLoading(false);
};
