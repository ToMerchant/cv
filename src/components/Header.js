import React from "react"



class Header extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="pageHeader">
                <img src="https://github.com/ToMerchant/cv/blob/main/public/apple-touch-icon.png" className="icon" />
                <div className="pageHeaderTitles">
                    <h1>10-Second CV </h1>
                    <h3 className="subtitle">Create a minimalist CV in seconds</h3>
                </div>
                {/* <button name="edit" onClick={this.props.editOrPreview}>Edit/ Preview</button>
                <button onClick={this.props.clearAll}>Reset</button> */}

            </div>
        )
    }
}

export default Header