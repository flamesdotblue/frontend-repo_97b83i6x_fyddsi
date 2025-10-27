import { Flame, Trophy, Book, Volume2, Target, Bolt, ArrowRight } from "lucide-react";

function StatCard({ icon: Icon, label, value, color = "bg-yellow-300" }) {
  return (
    <div className={`${color} border-4 border-black rounded-xl p-4 shadow-[8px_8px_0_0_#000]`}>
      <div className="flex items-center gap-3">
        <div className="border-4 border-black bg-white rounded-lg p-2 shadow-[4px_4px_0_0_#000]">
          <Icon className="w-6 h-6 text-black" />
        </div>
        <div>
          <div className="text-xs font-bold uppercase tracking-wider">{label}</div>
          <div className="text-2xl font-extrabold">{value}</div>
        </div>
      </div>
    </div>
  );
}

function ShortcutButton({ icon: Icon, label, badge, color = "bg-pink-300" }) {
  return (
    <button className={`${color} border-4 border-black rounded-xl p-4 w-full text-left shadow-[8px_8px_0_0_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[6px_6px_0_0_#000]`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="border-4 border-black bg-white rounded-lg p-2">
            <Icon className="w-6 h-6 text-black" />
          </div>
          <span className="font-bold text-lg">{label}</span>
        </div>
        <ArrowRight className="w-5 h-5" />
      </div>
      {badge && (
        <div className="mt-2 inline-block bg-white border-4 border-black rounded-lg px-2 py-1 text-xs font-bold shadow-[4px_4px_0_0_#000]">
          {badge}
        </div>
      )}
    </button>
  );
}

export default function DashboardScreen() {
  return (
    <div className="px-4 py-5 space-y-5">
      <div className="flex items-baseline justify-between">
        <h1 className="text-3xl font-extrabold tracking-tight">Marsa</h1>
        <div className="bg-white border-4 border-black rounded-lg px-3 py-1 shadow-[4px_4px_0_0_#000] text-sm font-bold">VN → EN</div>
      </div>

      {/* Progress Summary */}
      <div className="grid grid-cols-2 gap-4">
        <StatCard icon={Flame} label="Streak" value="🔥 10 days" color="bg-orange-300" />
        <StatCard icon={Bolt} label="Daily XP" value="240" color="bg-green-300" />
      </div>

      {/* Quick Shortcuts */}
      <div className="space-y-3">
        <ShortcutButton icon={Book} label="Dictionary" />
        <ShortcutButton icon={Volume2} label="Flashcard Review" badge="Review 15 Cards" color="bg-cyan-300" />
        <ShortcutButton icon={Target} label="New Lesson / Grammar" color="bg-purple-300" />
      </div>

      {/* AI Recommendation */}
      <div className="bg-yellow-200 border-4 border-black rounded-xl p-4 shadow-[8px_8px_0_0_#000]">
        <div className="flex items-center gap-3">
          <div className="border-4 border-black bg-white rounded-lg p-2 shadow-[4px_4px_0_0_#000]">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <div className="font-extrabold text-lg">Recommended for you</div>
            <p className="text-sm font-semibold">Review your 5 most difficult words and practice the tricky past tense grammar</p>
          </div>
        </div>
      </div>
    </div>
  );
}
