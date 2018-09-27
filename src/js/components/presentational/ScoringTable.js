import * as React from "react";


class ScoringTable extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            messageStatus: "",
            pl1: 0,
            pl2: 0,
            tie: 0

        };
        this.statusLog = this.statusLog.bind(this);
    }
    statusLog(){
        if(this.props.activeGame) {
           this.state.messageStatus = 'Player ' + this.props.activePlayer + ' is on!';
        }else if( this.props.winner !== ""){
            this.state.messageStatus =  this.props.winner + ' player has won!!!' ;
            if(this.props.winner === "x"){
                this.state.pl1++;
            }else if(this.props.winner === "o"){
                this.state.pl2++;
            }
        }else if( this.props.tied) {
            this.state.messageStatus =  "It's a tie!!!";
            this.state.tie++;
        }

    }
    render(){
        this.statusLog();
        let xclass = "";
        let oclass = "";
        if(this.props.activePlayer === "x"){
            xclass = "activePlayer";
        }
        if(this.props.activePlayer === "o"){
            oclass = "activePlayer";
        }

        return(
            <div>
                <p>{this.state.messageStatus}</p>
                <div className={"row"}>
                <p className={xclass}>Player 1: {this.state.pl1}</p>
                    <p>||</p>
                <p className={oclass}>Player 2: {this.state.pl2}</p>
                </div>
                    <p>Tied: {this.state.tie}</p>
                </div>

        )
    }
}

export default ScoringTable;