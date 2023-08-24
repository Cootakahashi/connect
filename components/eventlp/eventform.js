import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

export function Form({ eventurl, event }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [emailConfirmation, setEmailConfirmation] = useState("");
  const date = event.date;
  const memberNum = `${event.membernum}名`;
  const title = event.title;
  const question1 = event.question1;
  const question2 = event.question2;
  const question3 = event.question3;

  const emailMatches = email === emailConfirmation || emailConfirmation === "";
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!emailMatches) return;

    const formData = new FormData(event.target);
    const name = formData.get("name");

    const response = await fetch("/api/sendMail", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        eventurl,
        date,
        memberNum,
        title,
        question1,
        question2,
        question3,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      router.push("/events/success");
    }
  };

  return (
    <div className="flex flex-wrap bg-white mt-40">
      <div className="w-full md:w-1/2 p-6">
        {/* Event Information */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-lg">
          <div className="relative h-60 w-88 mb-4">
            <Image className="rounded" src={event.image.url} fill alt="logo" />
          </div>
          <h2 className="text-2xl font-bold mb-4">
            次回オンライングループ英会話日程
          </h2>
          <ul className="space-y-3 text-lg">
            <li>
              <span className="font-semibold">定員:</span> {event.membernum}名
            </li>
            <li>
              <span className="font-semibold">内容:</span> {event.title}
            </li>
            <li>
              <span className="font-semibold">質問:</span>
              <ul className="list-disc pl-5">
                <li>{event.question1}</li>
                <li>{event.question2}</li>
                <li>{event.question3}</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">備考:</span> {event.addinginfo}
            </li>
          </ul>
          <div className="mt-4">
            <div className="flex items-center gap-2">
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
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-lg font-medium">{event.date}</p>
            </div>

            <div className="flex items-center gap-2 mt-3">
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
                  d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
              <p className="text-sm font-semibold">Google Meet</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
        {/* Registration Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg border border-gray-200"
        >
          <h1 className="text-2xl font-bold mb-6 text-orange-600">
            次回のRestart onlineへ参加
          </h1>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email Address:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 p-2 w-full border rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="emailConfirmation"
              className="block text-sm font-medium text-gray-600"
            >
              Confirm Email Address:
            </label>
            <input
              type="email"
              id="emailConfirmation"
              name="emailConfirmation"
              required
              className={`mt-1 p-2 w-full border rounded-md ${
                !emailMatches && emailConfirmation
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              value={emailConfirmation}
              onChange={(e) => setEmailConfirmation(e.target.value)}
            />
            {!emailMatches && emailConfirmation && (
              <p className="text-red-500 mt-1">Emails do not match.</p>
            )}
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-gray-600 text-white p-2 rounded-md hover:bg-gray-700 active:bg-gray-800 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-200 focus:ring-opacity-50 transition duration-300 ease-in-out"
              disabled={!emailMatches}
            >
              参加Linkを受け取る
            </button>
          </div>
          <input
            type="text"
            id="eventurl"
            name="eventurl"
            readOnly
            className="hidden"
            value={eventurl}
          />
          <input
            type="text"
            id="date"
            name="date"
            readOnly
            className="hidden"
            value={date}
          />
          <input
            type="text"
            id="memberNum"
            name="memberNum"
            readOnly
            className="hidden"
            value={memberNum}
          />
          <input
            type="text"
            id="title"
            name="title"
            readOnly
            className="hidden"
            value={title}
          />
          <input
            type="text"
            id="question1"
            name="question1"
            readOnly
            className="hidden"
            value={question1}
          />
          <input
            type="text"
            id="question2"
            name="question2"
            readOnly
            className="hidden"
            value={question2}
          />
          <input
            type="text"
            id="question3"
            name="question3"
            readOnly
            className="hidden"
            value={question3}
          />
        </form>
      </div>
    </div>
  );
}
