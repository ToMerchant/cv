import React from "react"


class Preview extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <p>Univeristy: {this.props.university}</p>
            </div>
        )
    }
}

export default Preview