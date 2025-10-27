import { useState } from "react";
import DashboardScreen from "./components/DashboardScreen";
import DictionaryScreen from "./components/DictionaryScreen";
import FlashcardScreen from "./components/FlashcardScreen";
import ProfileScreen from "./components/ProfileScreen";
import { Home, Book, Layers, User } from "lucide-react";

const tabs = [
  { key: "home", label: "Home", icon: Home },
  { key: "dict", label: "Dictionary", icon: Book },
  { key: "flash", label: "Cards", icon: Layers },
  { key: "profile", label: "Profile", icon: User },
];

function BottomNav({ active, onChange }) {
  return (
    <div className="fixed bottom-3 left-3 right-3 z-10">
      <div className="bg-white border-4 border-black rounded-2xl p-2 flex justify-between shadow-[10px_10px_0_0_#000]">
        {tabs.map((t) => {
          const Icon = t.icon;
          const isActive = active === t.key;
          return (
            <button
              key={t.key}
              onClick={() => onChange(t.key)}
              className={`${isActive ? "bg-yellow-300" : "bg-transparent"} border-4 border-black rounded-xl px-3 py-2 flex-1 mx-1 flex items-center justify-center gap-2 font-extrabold active:translate-x-[2px] active:translate-y-[2px]`}
            >
              <Icon className="w-5 h-5" />
              <span className="hidden xs:inline">{t.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function App() {
  const [tab, setTab] = useState("home");

  return (
    <div className="min-h-screen bg-[#FDF6E3] text-black">
      <div className="max-w-md mx-auto min-h-screen pb-24">
        {tab === "home" && <DashboardScreen />}
        {tab === "dict" && <DictionaryScreen />}
        {tab === "flash" && <FlashcardScreen />}
        {tab === "profile" && <ProfileScreen />}
      </div>
      <BottomNav active={tab} onChange={setTab} />
    </div>
  );
}
