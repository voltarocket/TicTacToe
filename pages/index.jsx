import { Header } from "../components/header/index";
import { GameInfo, GameTitle, GameField } from "../components/game/index"

export default function HomePage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-6">
      <Header />
      <main className="pt-6 mx-auto w-max">
        <GameTitle />
        <GameInfo className="mt-4" />
        <GameField className="mt-6" />
      </main>
    </div>
  );
}
