import React from "react"
import '../css/Square.css'

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    render() {
        return (
            <button class ="square" onClick={() => this.props.onClick()}>
              {this.props.value}
            </button>
        );
    }
}



export default Square