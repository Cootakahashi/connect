import mailgun from "mailgun-js";

const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
});

export default async (req, res) => {
  if (req.method === "POST") {
    const { name, email } = req.body;

    const data = {
      from: "Restart運営 <online@restart.email>",
      to: email,
      subject: "Restart Onlineへの参加リンクになります",
      text: `こんにちは ${name}さん,「restart online」への参加リンクはこちらとなります[リンクをこちらに挿入]

      何か問題やご不明点があれば、お気軽にお知らせくださいね。
      それでは、オンラインでお会いしましょう！
      
      よろしくお願いします。

      
      誰でも安心して英語を話せるイベントRestart Online
      開始日時 8月23日 18時~20時
      参加リンク https://


      Restart運営 Toko
      お問い合わせは以下のメールアドレスまで。
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
