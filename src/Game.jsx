import { useEffect, useRef } from "react";
import { useState } from "react";

const Game = () => {

    let hint = useRef();
    let winner = useRef();

    let [playing, setPlaying] = useState(true);
    let [xWon, setXwon] = useState(false);
    let [oWon, setOwon] = useState(false);

    let points = [undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined];
    let count = 0;

    let handlePoint = (e)=>{
        if(count%2===0 && points[e.target.value]===undefined)
        {
            points[e.target.value] = "X";
            e.target.innerText = "X";
            count++;
            hint.current.innerText = "Player O's turn";
        }
        else if(count%2===1 && points[e.target.value]===undefined)
        {
            points[e.target.value] = "O";
            e.target.innerText = "O";
            count++;
            hint.current.innerText = "Player X's turn";
        }

        handleWinner();
    }

    let handleWinner = ()=>{
        if( (points[0]==="X" && points[1]==="X" && points[2]==="X") ||
            (points[3]==="X" && points[4]==="X" && points[5]==="X") ||
            (points[6]==="X" && points[7]==="X" && points[8]==="X") ||
            (points[0]==="X" && points[3]==="X" && points[6]==="X") ||
            (points[1]==="X" && points[4]==="X" && points[7]==="X") ||
            (points[2]==="X" && points[5]==="X" && points[8]==="X") ||
            (points[0]==="X" && points[4]==="X" && points[8]==="X") ||
            (points[2]==="X" && points[4]==="X" && points[6]==="X")   
        )
        {
            setXwon(true);
            setPlaying(false);
        }

        else if((points[0]==="O" && points[1]==="O" && points[2]==="O") ||
                (points[3]==="O" && points[4]==="O" && points[5]==="O") ||
                (points[6]==="O" && points[7]==="O" && points[8]==="O") ||
                (points[0]==="O" && points[3]==="O" && points[6]==="O") ||
                (points[1]==="O" && points[4]==="O" && points[7]==="O") ||
                (points[2]==="O" && points[5]==="O" && points[8]==="O") ||
                (points[0]==="O" && points[4]==="O" && points[8]==="O") ||
                (points[2]==="O" && points[4]==="O" && points[6]==="O")
        )
        {
            setOwon(true);
            setPlaying(false);
        }

    }

    return ( 
    <div>
        <h1>Tic Tac Toe</h1>
        <hr />
        <div id="xox">

            <button onClick={handlePoint} value="0"></button>
            <button onClick={handlePoint} value="1"></button>
            <button onClick={handlePoint} value="2"></button>
            <button onClick={handlePoint} value="3"></button>
            <button onClick={handlePoint} value="4"></button>
            <button onClick={handlePoint} value="5"></button>
            <button onClick={handlePoint} value="6"></button>
            <button onClick={handlePoint} value="7"></button>
            <button onClick={handlePoint} value="8"></button>

        </div>
        <hr />
        { playing && <h1 ref={hint} > Player X's turn </h1>}
        { xWon && <h1 className="animate__bounceIn"> WINNER WINNER CHIKEN DINNER <br /> Player X won the game </h1>}
        { oWon && <h1 className="animate__bounceIn"> WINNER WINNER CHIKEN DINNER <br /> Player O won the game </h1>}

        
    </div> );
}
export default Game;