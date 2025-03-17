"use client";

import { useFormStatus } from "react-dom";

function AnalyseButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="px-6 py-2 text-white bg-gradient-to-r from-blue-800 to-blue-600 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium cursor-pointer"
    >
      {pending ? "Analyzing..." : "Analyze"}
    </button>
  );
}

export default AnalyseButton;
