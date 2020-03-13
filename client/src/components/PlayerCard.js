import React from "react"

const PlayerCard = ({players}) => {
    return (
        <div className="card-container">
            {players.map(player => {
                return (
                    <div key={player.id} className="player-card">
                        <h2>{player.name}</h2>
                <p>{player.country}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default PlayerCard