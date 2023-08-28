import mailgun from "mailgun-js";

const mg = mailgun({
  // apiKey: process.env.MAILGUN_API_KEY,
  // domain: process.env.MAILGUN_DOMAIN,
  apiKey: process.env.NEXT_PUBLIC_MAILGUN_API_KEY,
  domain: process.env.NEXT_PUBLIC_MAILGUN_DOMAIN,
});

export default async (req, res) => {
  if (req.method === "POST") {
    const {
      name,
      email,
      eventurl,
      date,
      memberNum,
      title,
      question1,
      question2,
      question3,
    } = req.body;

    const data = {
      from: "Restart運営 <online@restart.email>",
      to: [email, "jonandcoo2022@gmail.com"],
      subject: "Restart Onlineへの参加リンクになります",
      text: `こんにちは ${name}さん参加申込みありがとうございます。
      「Restart online」への参加リンクはこちらとなります。 
      ${eventurl} 
      それでは、オンラインでお会いしましょう！

      
      誰でも安心して英語を話せるイベントRestart Online
      開催日時:${date}
      定員:${memberNum}
      内容:${title}
      質問1:${question1}
      質問2:${question2}
      質問3:${question3}


      文章を用意するために使えるAI ChatGPT https://chat.openai.com/
      AIに指示し自分の表現を作成してみてください。
      ChatGPTで入力する指示例
      「以下の文章を3つのパターンでネイティブが使う表現を使って英訳してください。
      文章:私の名前はこと、英語を勉強して世界に出てたくさんの人と友達になりたいんだ。」

      気に入った表現が出るまで繰り返し、決めたらメモしておいてください。
      音読して練習してから実際に使うとより効果的です。


      何か問題やご不明点があればお気軽にお知らせください
      Restart運営 こと
      お問い合わせは以下のメールアドレスまで
      jonandcoo2022@gmail.com


      `,
    };

    mg.messages().send(data, function (error, body) {
      if (error) {
        res.status(500).send({ error });
      } else {
        res.status(200).send({ body });
      }
    });
  } else {
    res.status(404).send("Not found");
  }
};
