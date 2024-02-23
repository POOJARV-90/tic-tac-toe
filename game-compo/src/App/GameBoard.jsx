import React, { useState } from 'react'
import Squares from './Squares'

const GameBoard = () => {
    const [data, setData] = useState(
        Array(9).fill(null)
    )

    const [isXturn, setisXturn] = useState(true)
    // console.log(data);

    const HandleClick = (index) => {
        // console.log(index,"clicked");
        const copyState = [...data]
        copyState[index] = isXturn ? "X" : "O";
        setData(copyState);
        setisXturn(!isXturn);
    }

    const CheckWinner = () => {
        const winner = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 4, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        for (let logic of winner) {
            const [a, b, c] = logic
            if (data[a] !== null && data[a] === data[b] && data[a] === data[c]) {
                return data[a]
            }
        }
        return (false)
    }

    const isWinner = CheckWinner()

    const resetGame = () =>{
        setData(Array(9).fill(null))
    }

    return (
        <div className='Container'>
            {isWinner ? (<> <h5> {isWinner} hurrey u are the winner</h5> <button onClick={resetGame}>play again</button></>) : (<>
                <div className='rows'>
                    <Squares onClick={() => HandleClick(0)} value={data[0]} />
                    <Squares onClick={() => HandleClick(1)} value={data[1]} />
                    <Squares onClick={() => HandleClick(2)} value={data[2]} />
                </div>
                <div className='rows'>
                    <Squares onClick={() => HandleClick(3)} value={data[3]} />
                    <Squares onClick={() => HandleClick(4)} value={data[4]} />
                    <Squares onClick={() => HandleClick(5)} value={data[5]} />
                </div>
                <div className='rows'>
                    <Squares onClick={() => HandleClick(6)} value={data[6]} />
                    <Squares onClick={() => HandleClick(7)} value={data[7]} />
                    <Squares onClick={() => HandleClick(8)} value={data[8]} />
                </div>
            </>)}

        </div>
    )
}

export default GameBoard