import { Search, Volume2, BookmarkPlus } from "lucide-react";
import { useState } from "react";

function ResultCard({ word, ipa, pos, vi, en, example }) {
  return (
    <div className="bg-white border-4 border-black rounded-2xl p-4 shadow-[8px_8px_0_0_#000] space-y-2">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-2xl font-extrabold">{word}</div>
          <div className="text-sm font-bold text-gray-800">{ipa} • {pos}</div>
        </div>
        <button className="bg-yellow-300 border-4 border-black rounded-xl px-3 py-2 font-bold shadow-[4px_4px_0_0_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_0_#000]">
          <div className="flex items-center gap-2">
            <BookmarkPlus className="w-5 h-5"/>
            Save to Flashcard
          </div>
        </button>
      </div>
      <button className="border-4 border-black bg-cyan-300 rounded-lg px-3 py-2 font-bold inline-flex items-center gap-2 shadow-[4px_4px_0_0_#000]">
        <Volume2 className="w-4 h-4"/> Listen
      </button>
      <div className="bg-yellow-100 border-4 border-black rounded-xl p-3 font-semibold">
        <div className="">EN → EN: {en}</div>
        <div className="mt-2">EN → VI: {vi}</div>
      </div>
      <div className="bg-purple-200 border-4 border-black rounded-xl p-3 font-semibold">
        <span className="underline">Example:</span> {example}
      </div>
    </div>
  );
}

export default function DictionaryScreen() {
  const [query, setQuery] = useState("");

  return (
    <div className="px-4 py-5 space-y-4">
      <div className="text-2xl font-extrabold">Dictionary</div>
      <div className="flex gap-2">
        <div className="flex-1 bg-white border-4 border-black rounded-xl px-3 py-2 flex items-center gap-2 shadow-[6px_6px_0_0_#000]">
          <Search className="w-5 h-5" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search English or Vietnamese..."
            className="w-full outline-none font-semibold"
          />
        </div>
        <button className="bg-green-300 border-4 border-black rounded-xl px-4 font-extrabold shadow-[6px_6px_0_0_#000]">
          Go
        </button>
      </div>

      {/* Result mock */}
      <ResultCard
        word="word"
        ipa="/wɜːrd/"
        pos="noun"
        en="a single distinct meaningful element of speech or writing"
        vi="từ; đơn vị có nghĩa trong ngôn ngữ"
        example="She couldn't find the right word to express her feelings."
      />

      <div className="text-xs font-bold opacity-70">Status: Offline-capable</div>
    </div>
  );
}
