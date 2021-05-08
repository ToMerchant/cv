import React from "react"


class Education extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        name="university"
                        placeholder="University"
                        value={this.props.unveristy}
                        onChange={this.props.handleChange}
                    />
                    <input
                        type="text"
                        name="degree"
                        placeholder="Degree"
                        value={this.props.degree}
                        onChange={this.props.handleChange}
                    />
                    <input
                        type="text"
                        name="year"
                        placeholder="Year"
                        value={this.props.year}
                        onChange={this.props.handleChange}
                    />
                    <input
                        type="text"
                        name="notes"
                        placeholder="Notes"
                        value={this.props.notes}
                        onChange={this.props.handleChange}
                    />
                </form>

            </div>
        )
    }
}

export default Education;
