import React from "react"

const PlayerCard = ({players}) => {
    return (
        <div className="card-container">
            {players.map(player => {
                return (
                    <div key={player.id} className="player-card">
                        <h2 data-testid={`player-card-${player.name}`} >{player.name}</h2>
                        <p data-testid={`player-card-${player.country}`} >{player.country}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default PlayerCard