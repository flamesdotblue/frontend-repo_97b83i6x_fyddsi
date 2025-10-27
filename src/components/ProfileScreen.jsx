import { User, Trophy, Flame, Star, Award, BarChart3 } from "lucide-react";

function Badge({ label, color = "bg-yellow-300" }) {
  return (
    <div className={`${color} border-4 border-black rounded-xl px-3 py-2 font-extrabold shadow-[6px_6px_0_0_#000]`}>{label}</div>
  );
}

export default function ProfileScreen() {
  return (
    <div className="px-4 py-5 space-y-5">
      <div className="flex items-center gap-3">
        <div className="bg-white border-4 border-black rounded-2xl p-4 shadow-[8px_8px_0_0_#000]">
          <User className="w-10 h-10" />
        </div>
        <div>
          <div className="text-2xl font-extrabold">Minh Nguyen</div>
          <div className="font-bold opacity-80">Level 7 • Explorer</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-green-300 border-4 border-black rounded-xl p-4 shadow-[8px_8px_0_0_#000]">
          <div className="flex items-center gap-2 font-extrabold"><BarChart3 className="w-5 h-5"/> Total XP</div>
          <div className="text-3xl font-extrabold">12,450</div>
        </div>
        <div className="bg-orange-300 border-4 border-black rounded-xl p-4 shadow-[8px_8px_0_0_#000]">
          <div className="flex items-center gap-2 font-extrabold"><Flame className="w-5 h-5"/> Longest Streak</div>
          <div className="text-3xl font-extrabold">28</div>
        </div>
        <div className="bg-cyan-300 border-4 border-black rounded-xl p-4 shadow-[8px_8px_0_0_#000]">
          <div className="flex items-center gap-2 font-extrabold"><Star className="w-5 h-5"/> Words Learned</div>
          <div className="text-3xl font-extrabold">742</div>
        </div>
        <div className="bg-purple-300 border-4 border-black rounded-xl p-4 shadow-[8px_8px_0_0_#000]">
          <div className="flex items-center gap-2 font-extrabold"><Trophy className="w-5 h-5"/> Current Level</div>
          <div className="text-3xl font-extrabold">7</div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="text-xl font-extrabold">Badges</div>
        <div className="flex flex-wrap gap-3">
          <Badge label="Grammar Guru" color="bg-yellow-300" />
          <Badge label="Pronunciation Pro" color="bg-pink-300" />
          <Badge label="Flashcard Master" color="bg-green-300" />
          <Badge label="Streak 14" color="bg-cyan-300" />
        </div>
      </div>

      <div className="bg-white border-4 border-black rounded-xl p-4 shadow-[8px_8px_0_0_#000]">
        <div className="font-extrabold mb-2">Leaderboard (This Week)</div>
        <div className="space-y-2 font-bold">
          <div className="flex items-center justify-between"><span>1. Linh</span><span>3,200 XP</span></div>
          <div className="flex items-center justify-between"><span>2. Minh</span><span>2,850 XP</span></div>
          <div className="flex items-center justify-between"><span>3. An</span><span>2,640 XP</span></div>
        </div>
      </div>
    </div>
  );
}
