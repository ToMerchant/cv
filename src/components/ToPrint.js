import React from "react"
import uniqid from "uniqid"

export class ToPrint extends React.PureComponent {

    constructor() {
        super()
    }

    render() {
        return (
            <div className="printContainer">
                <table>
                    <tbody>
                        <th className="headers">{this.props.firstName} {this.props.lastName}</th>

                        <td>

                            <tr key={uniqid()}>{this.props.email}</tr>
                            <tr key={uniqid()}>{this.props.phone}</tr>

                        </td>


                    </tbody>
                </table>
                <table>
                    <tbody>
                        <th className="headers">Education</th>


                        <td>

                            {this.props.universityArray.map((x) => {
                                return <tr className="boldPrint" key={uniqid()}>{x}</tr>
                            }
                            )}
                        </td>
                        <td>
                            {this.props.degreeArray.map((x) => {
                                return <tr key={uniqid()}>{x}</tr>
                            }
                            )}
                        </td>
                        <div className="extraMarginPrint">
                            <td>
                                {this.props.yearStartArray.map((x) => {
                                    return <tr className="greyPrint" key={uniqid()}>{x} -</tr>
                                }
                                )}
                            </td>
                            <td>
                                {this.props.yearEndArray.map((x) => {
                                    return <tr className="greyPrint" key={uniqid()}>{x}</tr>
                                }
                                )}
                            </td>
                        </div>

                    </tbody>
                </table>
                <table>
                    <tbody>
                        <th className="headers">Experience</th>


                        <td>
                            {this.props.companyArray.map((x) => {
                                return <tr className="boldPrint" key={uniqid()}>{x}</tr>
                            }
                            )}
                        </td>
                        <td>
                            {this.props.positionArray.map((x) => {
                                return <tr key={uniqid()}>{x}</tr>
                            }
                            )}
                        </td>
                        <div className="extraMarginPrint">
                            <td>
                                {this.props.startDateArray.map((x) => {
                                    return <tr className="greyPrint" key={uniqid()}>{x} -</tr>
                                }
                                )}
                            </td>
                            <td>
                                {this.props.endDateArray.map((x) => {
                                    return <tr className="greyPrint" key={uniqid()}>{x}</tr>
                                }
                                )}
                            </td>
                        </div>
                    </tbody>
                </table>
                <table>
                    <tbody>
                        <th className="headers">Skills</th>


                        <td>

                            {this.props.skillsArray.map((x) => {
                                return <tr key={uniqid()}>{x}</tr>
                            }
                            )}
                        </td>


                    </tbody>
                </table>


            </div>
        )
    }
}