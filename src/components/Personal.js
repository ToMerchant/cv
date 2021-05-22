import React from "react"

class Personal extends React.Component {
    constructor() {
        super()


    }



    render() {
        return (
            <div >
                <form >
                    <input
                        className="input"
                        type="text"
                        name="firstName"
                        placeholder="First name"
                        value={this.props.firstName}
                        onChange={this.props.handleChange}
                    />
                    <input
                        className="input"
                        type="text"
                        name="lastName"
                        placeholder="Last name"
                        value={this.props.lastName}
                        onChange={this.props.handleChange}
                    />
                    <input
                        className="input"
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={this.props.email}
                        onChange={this.props.handleChange}
                    />
                    <input
                        className="input"
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        value={this.props.phone}
                        onChange={this.props.handleChange}
                    />
                </form>
                <button className="sectionButtonClear" onClick={this.props.clearPersonal}>Clear</button>
            </div>
        )
    }
}

export default Personal;
