import * as React from "react";
import * as ReactDOM from "react-dom";
import Combinations from "../presentational/Combinations";
import Grid from "../presentational/grid";
import Button from "../presentational/Button";
import ScoringTable from "../presentational/ScoringTable";


class TicTacToe extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            activePlayer: "x",
            activeGame: true,
            winner: "",
            tied: false,
            stateKeep: [0,0,0,0,0,0,0,0,0],
            count: 0,
            reset: false
        };
        this.nextPlayer = this.nextPlayer.bind(this);
        this.resetBoard = this.resetBoard.bind(this);
        // this.updateGameState = this.updateGameState.bind(this);
    }
    nextPlayer() {
        if(this.state.activePlayer === "x"){
            this.setState({
                activePlayer: "o",
                reset: false
            });
        }else{
            this.setState({activePlayer: "x"});
        }
    }
    updateStateGame(btnNum, buttonState){
        this.state.stateKeep[btnNum -1] = buttonState;
        let  stateKeep = this.state.stateKeep;
        this.state.count++;
        console.log(this.state.count);
        for ( let i=0; i < Combinations.length; i++) {
            let combination = Combinations[i];

            if(stateKeep[combination[0]] !== 0 && stateKeep[combination[0]] === stateKeep[combination[1]] && stateKeep[combination[1]] === stateKeep[combination[2]]){
                this.setState({
                    winner: stateKeep[combination[0]],
                    activeGame: false
                });
                break;
            }

            if(this.state.winner === "" && this.state.count === 9){
                this.setState({
                    tied: true,
                    activeGame: false});
            }

        }
    }
    resetBoard(){
        this.setState({
            activePlayer: "x",
            activeGame: true,
            winner: "",
            tied: false,
            stateKeep: [0,0,0,0,0,0,0,0,0],
            count: 0,
            reset: true
        });
    }
    render() {

        return(
            <div>
                <div className={"boxy"}>
                <h2>Tic Tac Toe</h2>

                <ScoringTable activeGame={this.state.activeGame} activePlayer={this.state.activePlayer} winner={this.state.winner} tied={this.state.tied} />
                </div>

                <div className="displayButtons">
                    <div className="grid-container ">
                        {Grid.map(obj => <Button  reset={this.state.reset} btnNum={obj.number}  id={obj.id} activePlayer={this.state.activePlayer} nextPlayer={this.nextPlayer.bind(this)} updateStateGame={this.updateStateGame.bind(this)} activeGame={this.state.activeGame}/>)}
                    </div></div>
                <div className={"boxy"}>
                <button className={"resetButton"} onClick={this.resetBoard} >Start Game</button>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<TicTacToe />, document.getElementById("root"));

export default TicTacToe;