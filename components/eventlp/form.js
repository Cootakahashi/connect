import { useState } from "react";
import { useRouter } from "next/router";

export function Form() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [emailConfirmation, setEmailConfirmation] = useState("");

  const emailMatches = email === emailConfirmation || emailConfirmation === "";

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!emailMatches) {
      return;
    }

    const formData = new FormData(event.target);
    const name = formData.get("name");

    const response = await fetch("/api/sendMail", {
      method: "POST",
      body: JSON.stringify({ name, email }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      router.push("/success");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-96 bg-white p-8 rounded-xl shadow-md"
      >
        <h1 className="text-2xl font-semibold mb-6">Restart onlineへ参加</h1>

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
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:border-blue-900 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-300 ease-in-out"
            disabled={!emailMatches}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
