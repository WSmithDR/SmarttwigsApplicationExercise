'use client'
import React, { useState } from 'react';

interface Player {
  name: string;
  points: number;
}

const PingPongGame: React.FC = () => {
  const [player1, setPlayer1] = useState<Player>({ name: '', points: 0 });
  const [player2, setPlayer2] = useState<Player>({ name: '', points: 0 });
  const [servingPlayer, setServingPlayer] = useState<Player | null>(null);
  const [winner, setWinner] = useState<Player | null>(null);
  const [gameStarted, setGameStarted] = useState<boolean>(false);

  const updatePoints = (player: Player) => {
    if (!winner) {
      if (player === player1) {
        setPlayer1({ ...player1, points: player1.points + 1 });
      } else {
        setPlayer2({ ...player2, points: player2.points + 1 });
      }

      if (player1.points >= 10 && player1.points - player2.points >= 2) {
        setWinner(player1);
      } else if (player2.points >= 10 && player2.points - player1.points >= 2) {
        setWinner(player2);
      }

      if ((player1.points + player2.points) % 2 === 0) {
        setServingPlayer(servingPlayer === player1 ? player2 : player1);
      }
    }
  };

  const resetGame = () => {
    setPlayer1({ name: '', points: 0 });
    setPlayer2({ name: '', points: 0 });
    setServingPlayer(null);
    setWinner(null);
    setGameStarted(false);
  };

  const handleStartGame = () => {
    if (player1.name.trim() !== '' && player2.name.trim() !== '') {
      setGameStarted(true);
      setServingPlayer(player1);
    }
  };

  const handleEndGame = () => {
    if (!gameStarted) return;

    const gameResult = {
      winner: winner ? winner.name : 'No Winner',
      player1: { name: player1.name, points: player1.points },
      player2: { name: player2.name, points: player2.points }
    };
    resetGame();
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Ping Pong Game</h1>
      {!gameStarted ? (
        <div className="mb-4">
          <label className="mr-2">Player 1 Name:</label>
          <input
            type="text"
            value={player1.name}
            onChange={(e) => setPlayer1({ ...player1, name: e.target.value })}
            className="border border-gray-400 rounded px-2 py-1 mr-2"
          />
          <br />
          <label className="mr-2">Player 2 Name:</label>
          <input
            type="text"
            value={player2.name}
            onChange={(e) => setPlayer2({ ...player2, name: e.target.value })}
            className="border border-gray-400 rounded px-2 py-1 mr-2"
          />
          <br />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleStartGame}>Start Game</button>
        </div>
      ) : winner ? (
        <div className="mb-4">
          <h2 className="text-xl font-bold">{winner.name} wins!</h2>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleEndGame}>End Game</button>
        </div>
      ) : (
        <div>
          <h2 className="text-lg mb-2">Serving: {servingPlayer?.name}</h2>
          <div className="mb-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={() => updatePoints(player1)}>{player1.name} Scores</button>
            <span>{player1.points}</span>
          </div>
          <div className="mb-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={() => updatePoints(player2)}>{player2.name} Scores</button>
            <span>{player2.points}</span>
          </div>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={handleEndGame}>End Game</button>
        </div>
      )}
    </div>
  );
};

export default PingPongGame;
