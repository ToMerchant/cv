import React from "react"


class Skills extends React.Component {
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
                        name="skillCurrent"
                        placeholder="Skill"
                        value={this.props.skillCurrent}
                        onChange={this.props.handleChange}
                    />

                </form>
                <button className="sectionButtonAdd" onClick={this.props.handleClickSkills}>Add</button>
                <button className="sectionButtonCancel" onClick={this.props.cancelCurrentSkill}>Cancel</button>
                <button className="sectionButtonClear" onClick={this.props.clearSkills}>Clear all</button>
            </div>
        )
    }
}

export default Skills;
