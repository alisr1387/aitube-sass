"use client";

import { Message, useChat } from "@ai-sdk/react";
import { Button } from "./ui/button";
import ReactMarkdown from "react-markdown";
import { useSchematicFlag } from "@schematichq/schematic-react";
import { FeatureFlag } from "@/features/flags";
import { BotIcon, ImageIcon, LetterText, PenIcon } from "lucide-react";
import { useEffect, useRef } from "react";
import { toast } from "sonner";

// interface ToolInvocation {
//   toolCallId: string;
//   toolName: string;
//   result?: Record<string, unknown>;
// }

// interface ToolPart {
//   type: "tool-invocation";
//   toolInvocation: ToolInvocation;
// }

// const formatToolInvocation = (part: ToolPart) => {
//   if (!part.toolInvocation) return "Unknown Tool";
//   return `🔧 Tool Used: ${part.toolInvocation.toolName}`;
// };

function AiAgentChat({ videoId }: { videoId: string }) {
//   // Scrolling to Bottom Logic
//   const bottomRef = useRef<HTMLDivElement>(null);
//   const messagesContainerRef = useRef<HTMLDivElement>(null);

  const { messages, input, handleInputChange, handleSubmit, append, status } =
    useChat({
      maxSteps: 5,
      body: {
        videoId,
      },
    });

//   const isScriptGenerationEnabled = useSchematicFlag(
//     FeatureFlag.SCRIPT_GENERATION
//   );
//   const isImageGenerationEnabled = useSchematicFlag(
//     FeatureFlag.IMAGE_GENERATION
//   );
//   const isTitleGenerationEnabled = useSchematicFlag(
//     FeatureFlag.TITLE_GENERATIONS
//   );
//   const isVideoAnalysisEnabled = useSchematicFlag(FeatureFlag.ANALYSE_VIDEO);

//   useEffect(() => {
//     if (bottomRef.current && messagesContainerRef.current) {
//       messagesContainerRef.current.scrollTop =
//         messagesContainerRef.current.scrollHeight;
//     }
//   }, [messages]);

//   useEffect(() => {
//     let toastId;

//     switch (status) {
//       case "submitted":
//         toastId = toast("Agent is thinking...", {
//           id: toastId,
//           icon: <BotIcon className="w-4 h-4" />,
//         });
//         break;
//       case "streaming":
//         toastId = toast("Agent is replying...", {
//           id: toastId,
//           icon: <BotIcon className="w-4 h-4" />,
//         });
//         break;
//       case "error":
//         toastId = toast("Whoops! Something went wrong, please try again.", {
//           id: toastId,
//           icon: <BotIcon className="w-4 h-4" />,
//         });
//         break;
//       case "ready":
//         toast.dismiss(toastId);

//         break;
//     }
//   }, [status]);

//   const generateScript = async () => {
//     const randomId = Math.random().toString(36).substring(2, 15);

//     const userMessage: Message = {
//       id: `generate-script-${randomId}`,
//       role: "user",
//       content:
//         "Generate a step-by-step shooting script for this video that I can use on my own channel to produce a video that is similar to this one, dont do any other steps such as generating a image, just generate the script only!",
//     };
//     append(userMessage);
//   };

//   const generateImage = async () => {
//     const randomId = Math.random().toString(36).substring(2, 15);
//     const userMessage: Message = {
//       id: `generate-image-${randomId}`,
//       role: "user",
//       content: "Generate a thumbnail for this video",
//     };
//     append(userMessage);
//   };

//   const generateTitle = async () => {
//     const randomId = Math.random().toString(36).substring(2, 15);
//     const userMessage: Message = {
//       id: `generate-title-${randomId}`,
//       role: "user",
//       content: "Generate a title for this video",
//     };
//     append(userMessage);
//   };

  return (
    <div className="flex flex-col h-full">
      <div className="hidden lg:block px-4 pb-3 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800">AI Agent</h2>
      </div>

      {/* Messages */}
      <div
        className="flex-1 overflow-y-auto px-4 py-4"
        // ref={messagesContainerRef}
      >
        <div className="space-y-6">
          {messages.length === 0 && (
            <div className="flex items-center justify-center h-full min-h-[200px]">
              <div className="text-center space-y-2">
                <h3 className="text-lg font-medium text-gray-700">
                  Welcome to AI Agent Chat
                </h3>
                <p className="text-sm text-gray-500">
                  Ask any question about your video!
                </p>
              </div>
            </div>
          )}

          {messages.map((m) => (
            <div
              key={m.id}
              // className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
            >
            {m.content}
            </div>
          ))}
          
        </div>
      </div>

      {/* Input form */}
      <div className="border-t border-gray-100 p-4 bg-white">
        <div className="space-y-3">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              className="flex-1 px-4 py-2 text-sm border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              type="text"
              placeholder={
               
                  "Upgrade to ask anything about your video..."
                
              }
              value={input}
              onChange={handleInputChange}
            />
            <Button
              type="submit"
              disabled={
                status === "streaming" ||
                status === "submitted" 
     
              }
              className="px-4 py-2 bg-blue-600 text-white text-sm rounded-full hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {status === "streaming"
                ? "AI is replying..."
                : status === "submitted"
                  ? "AI is thinking..."
                  : "Send"}
            </Button>
          </form>

     
        </div>
      </div>
    </div>
  );
}

export default AiAgentChat;
