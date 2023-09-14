"use client";

import { useCompletion } from "ai/react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const Completion = () => {
  const {
    completion,
    input,
    stop,
    isLoading,
    handleInputChange,
    handleSubmit,
  } = useCompletion({
    api: "/api/v1/completion",
  });

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center">
      <input
        className="w-full p-2 border border-gray-300 rounded shadow-xl"
        value={input}
        onChange={handleInputChange}
        placeholder="What are react hooks?"
      />
      <output className="text-white">
        Completion result:
        <ReactMarkdown>{completion}</ReactMarkdown>
      </output>
      <button className="bg-white" type="button" onClick={stop}>
        Stop
      </button>
      <button className="bg-white" disabled={isLoading} type="submit">
        Send
      </button>
    </form>
  );
};

export default Completion;
