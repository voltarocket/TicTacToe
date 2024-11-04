import { GameInfo } from "./game-info";
import { GameField } from "./game-field";
import { ResetButton } from "./reset-button";
import { useGameState } from "./use-game-state";

export function GameLayout() {
    const {
        currentStep,
        winnerSymbol,
        isDraw,
        handleResetClick
    } = useGameState();

    return (
        <div className="flex flex-col items-center w-40 mx-auto my-24 border border-black p-5">
        <GameInfo
          isDraw={isDraw}
          winnerSymbol={winnerSymbol}
          currentStep={currentStep}
        />
        <GameField/>
        <ResetButton onClick={handleResetClick}/>
      </div>
    );
  }
   // const StyledGameLayout = (props) => {
     // const {children} = props;
      //return  <div className="flex flex-col items-center w-40 mx-auto my-24 border border-black p-5">{children}</div>
    
//}