"use client";

import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useChat } from "ai/react";

const Completion = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/v1/chat",
  });

  return (
    <div className="mx-auto w-full max-w-md py-24 flex flex-col stretch">
      {messages.map((m) => (
        <div className="text-white" key={m.id}>
          {m.role === "user" ? "User: " : "AI: "}
          {m.content}
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <label>
          Say something...
          <input
            className="w-full border border-gray-300 rounded mb-8 shadow-xl p-2"
            value={input}
            onChange={handleInputChange}
          />
        </label>
        <button className="text-white" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default Completion;
