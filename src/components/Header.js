import React from "react"

class Header extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <h1>CV Maker</h1>
                <button name="edit" onClick={this.props.editOrPreview}>Edit/ Preview</button>

            </div>
        )
    }
}

export default Header