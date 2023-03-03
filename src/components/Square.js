import React from "react"
class Square extends React.Component {
    render() {
        return (
            <button class = 'square'>
                {this.props.value}
            </button>
        )
    }
}

export default Square