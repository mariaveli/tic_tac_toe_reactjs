import * as React from "react";

class Button extends React.Component {
    constructor(props){
        super(props);
        this.state={
            buttonState: ""
        };
        this.selectButton = this.selectButton.bind(this);
    }
    selectButton(){
        if(this.props.activeGame){
            if(this.state.buttonState === ""){
                let activePlayer = this.props.activePlayer;
                this.setState({buttonState:  activePlayer});
                this.props.updateStateGame(this.props.btnNum, activePlayer);
                this.props.nextPlayer();
            }
        }

    }
    render() {
        if(this.props.reset){
            this.state.buttonState=  "";
        }
        return(
            <button  className={"button"} onClick={this.selectButton}>{this.state.buttonState}
            </button>
        )
    }
}
export default Button;