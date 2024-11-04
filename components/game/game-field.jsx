import { GameCell } from "./game-cell";
import { useGameState } from "./use-game-state";

export function GameField() {
  const { cells, winnerSequence, handleCellClick } = useGameState();
  return (
    <div className="grid pt-px pl-px grid-cols-[repeat(3,_30px)] grid-rows-[repeat(3,_30px)]">
      {cells.map((symbol, index) => (
        <GameCell
          key={index}
          symbol={symbol}
          isWinner={winnerSequence?.includes(index)}
          onClick={() => handleCellClick(index)}
        />
      ))}
    </div>
  );
}
