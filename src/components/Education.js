import React from "react"
import uniqid from "uniqid"


class Education extends React.Component {
    constructor() {
        super()
    }

    render() {
        // if (this.props.university.length > 0) {
        //     return (
        //         <div>

        //         </div>
        //     )
        // }
        // else {
        return (

            <div>
                <form >
                    <input
                        className="input"
                        type="text"
                        name="university"
                        placeholder="University"
                        value={this.props.university}
                        onChange={this.props.handleChange}
                    />
                    <input
                        className="input"
                        type="text"
                        name="degree"
                        placeholder="Degree"
                        value={this.props.degree}
                        onChange={this.props.handleChange}
                    />
                    <input
                        className="input"
                        type="text"
                        name="yearStart"
                        placeholder="Year began"
                        value={this.props.yearStart}
                        onChange={this.props.handleChange}
                    />
                    <input
                        className="input"
                        type="text"
                        name="yearEnd"
                        placeholder="Year completed"
                        value={this.props.yearEnd}
                        onChange={this.props.handleChange}
                    />

                </form>
                <button className="sectionButtonAdd" onClick={this.props.handleClickEducation}>Add</button>
                <button className="sectionButtonCancel" onClick={this.props.cancelCurrentEducation}>Cancel</button>
                <button className="sectionButtonClear" onClick={this.props.clearAllEducation}>Clear all</button >




            </div>
        )
        //}
    }
}

export default Education;
