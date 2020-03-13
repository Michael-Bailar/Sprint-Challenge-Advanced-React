import React from "react"
import axios from "axios"

const players = []

class PlayersList extends React.Component {
    
    constructor() {
        super()
        this.state = {
            players: players
        }
    }

    componentDidMount = () =>{
        axios.get('http://localhost:5000/api/players')
        .then(response => {
            console.log(response.data)
            this.setState({
                players: response.data
            })
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        return(
            <div>
                <h1>So Many Runners!</h1>
                {/* <PlayerCard /> */}
            </div>
        )
    }
}

export default PlayersList