import { useState } from "react";
import { Volume2, Mic, RotateCcw } from "lucide-react";

function AssessButtons({ onRate }) {
  return (
    <div className="grid grid-cols-3 gap-3 mt-4">
      <button onClick={() => onRate("hard")} className="bg-red-300 border-4 border-black rounded-xl py-2 font-extrabold shadow-[6px_6px_0_0_#000] active:translate-x-[2px] active:translate-y-[2px]">Hard</button>
      <button onClick={() => onRate("ok")} className="bg-yellow-300 border-4 border-black rounded-xl py-2 font-extrabold shadow-[6px_6px_0_0_#000] active:translate-x-[2px] active:translate-y-[2px]">Okay</button>
      <button onClick={() => onRate("easy")} className="bg-green-300 border-4 border-black rounded-xl py-2 font-extrabold shadow-[6px_6px_0_0_#000] active:translate-x-[2px] active:translate-y-[2px]">Easy</button>
    </div>
  );
}

export default function FlashcardScreen() {
  const [flipped, setFlipped] = useState(false);
  const [message, setMessage] = useState("");

  const handleRate = (rate) => {
    setMessage(`Recorded: ${rate.toUpperCase()} — your schedule is updated by SM-2.`);
    setTimeout(() => setMessage(""), 2500);
    setFlipped(false);
  };

  return (
    <div className="px-4 py-5 space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-extrabold">Flashcards</div>
        <div className="bg-white border-4 border-black rounded-lg px-3 py-1 font-bold shadow-[4px_4px_0_0_#000]">15 due</div>
      </div>

      {/* Card */}
      <div className="bg-yellow-200 border-4 border-black rounded-3xl p-5 shadow-[10px_10px_0_0_#000]">
        {!flipped ? (
          <div className="space-y-6">
            <div className="text-4xl font-extrabold">articulate</div>
            <div className="flex gap-3">
              <button className="bg-white border-4 border-black rounded-xl px-3 py-2 font-bold inline-flex items-center gap-2 shadow-[6px_6px_0_0_#000]">
                <Volume2 className="w-4 h-4"/> Listen
              </button>
              <button className="bg-cyan-300 border-4 border-black rounded-xl px-3 py-2 font-bold inline-flex items-center gap-2 shadow-[6px_6px_0_0_#000]">
                <Mic className="w-4 h-4"/> Record
              </button>
            </div>
            <button onClick={() => setFlipped(true)} className="bg-purple-300 border-4 border-black rounded-xl px-4 py-2 font-extrabold shadow-[6px_6px_0_0_#000]">Flip</button>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-extrabold">articulate</div>
                <div className="font-bold">/ɑːrˈtɪkjʊlət/ • adjective</div>
              </div>
              <button onClick={() => setFlipped(false)} className="bg-white border-4 border-black rounded-xl px-3 py-2 font-bold inline-flex items-center gap-2 shadow-[6px_6px_0_0_#000]">
                <RotateCcw className="w-4 h-4"/> Back
              </button>
            </div>
            <div className="bg-white border-4 border-black rounded-xl p-3 font-semibold">
              EN → EN: having or showing the ability to speak fluently and coherently
            </div>
            <div className="bg-green-200 border-4 border-black rounded-xl p-3 font-semibold">
              EN → VI: nói năng lưu loát; rõ ràng
            </div>
            <div className="bg-pink-200 border-4 border-black rounded-xl p-3 font-semibold">
              Example: She is a highly articulate public speaker.
            </div>
            <div className="flex gap-3">
              <button className="bg-white border-4 border-black rounded-xl px-3 py-2 font-bold inline-flex items-center gap-2 shadow-[6px_6px_0_0_#000]">
                <Volume2 className="w-4 h-4"/> Listen
              </button>
              <button className="bg-cyan-300 border-4 border-black rounded-xl px-3 py-2 font-bold inline-flex items-center gap-2 shadow-[6px_6px_0_0_#000]">
                <Mic className="w-4 h-4"/> Record
              </button>
            </div>
            <AssessButtons onRate={handleRate} />
          </div>
        )}
      </div>

      {message && (
        <div className="bg-white border-4 border-black rounded-xl p-3 font-bold shadow-[6px_6px_0_0_#000]">{message}</div>
      )}
    </div>
  );
}
