import React from "react"


class Experience extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>


                <form>
                    <input
                        className="input"
                        type="text"
                        name="company"
                        placeholder="Company"
                        value={this.props.company}
                        onChange={this.props.handleChange}
                    />
                    <input
                        className="input"
                        type="text"
                        name="position"
                        placeholder="Position"
                        value={this.props.position}
                        onChange={this.props.handleChange}
                    />
                    <input
                        className="input"
                        type="text"
                        name="startDate"
                        placeholder="Start date"
                        value={this.props.startDate}
                        onChange={this.props.handleChange}
                    />
                    <input
                        className="input"
                        type="text"
                        name="endDate"
                        placeholder="End date"
                        value={this.props.endDate}
                        onChange={this.props.handleChange}
                    />
                </form>
                <button className="sectionButtonAdd" onClick={this.props.handleClickExperience}>Add</button>
                <button className="sectionButtonCancel" onClick={this.props.cancelCurrentExperience}>Cancel</button>
                <button className="sectionButtonClear" onClick={this.props.clearAllExperience}>Clear all</button>


            </div>
        )
    }
}

export default Experience;
