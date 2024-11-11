import { useState } from "react";
import { Header } from "../components/header/index";
import { GameInfo, GameTitle, GameField, UseGameState } from "../components/game/index"

export default function HomePage() {

  const [playersCount] = useState(2);
  const { cells, currentMove, nextMove, handleCellClick } = UseGameState(playersCount);

  return (
    <div className="bg-slate-50 min-h-screen pb-6">
      <Header />
      <main className="pt-6 mx-auto w-max">
        <GameTitle playersCount={playersCount} />
        <GameInfo
          playersCount={playersCount}
          className="mt-4"
          currentMove={currentMove} />
        <GameField
          playersCount={playersCount}
          className="mt-6"
          cells={cells}
          currentMove={currentMove}
          nextMove={nextMove}
          handleCellClick={handleCellClick} />
      </main>
    </div>
  );
}
