import './styles.css'
import React from "react"
import Header from "./components/Header"
import Personal from "./components/Personal"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Skills from "./components/Skills"

import ReactToPrint, { PrintContextConsumer } from 'react-to-print'
import { ToPrint } from './components/ToPrint'

import uniqid from "uniqid"


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      edit: true,
      editOrPreviewName: 'Preview',
      editOrPreviewClass: 'previewButton',
      firstName: "",
      lastName: "",
      email: "",
      phone: "",

      university: [],
      degree: [],
      yearStart: [],
      yearEnd: [],
      universityArray: [],
      degreeArray: [],
      yearStartArray: [],
      yearEndArray: [],


      company: [],
      position: [],
      startDate: [],
      endDate: [],
      companyArray: [],
      positionArray: [],
      startDateArray: [],
      endDateArray: [],

      skillsArray: [],
      skillCurrent: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClickEducation = this.handleClickEducation.bind(this)
    this.cancelCurrentEducation = this.cancelCurrentEducation.bind(this)
    this.handleClickExperience = this.handleClickExperience.bind(this)
    this.cancelCurrentExperience = this.cancelCurrentExperience.bind(this)
    this.handleClickSkills = this.handleClickSkills.bind(this)
    this.cancelCurrentSkill = this.cancelCurrentSkill.bind(this)
    this.clearPersonal = this.clearPersonal.bind(this)
    this.clearSkills = this.clearSkills.bind(this)
    this.clearAllExperience = this.clearAllExperience.bind(this)
    this.clearAllEducation = this.clearAllEducation.bind(this)
    this.editOrPreview = this.editOrPreview.bind(this)
    this.clearAll = this.clearAll.bind(this)
  }
  handleChange(event) {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleClickEducation = (event) => {
    this.setState({
      universityArray: this.state.universityArray.concat(this.state.university),
      degreeArray: this.state.degreeArray.concat(this.state.degree),
      yearStartArray: this.state.yearStartArray.concat(this.state.yearStart),
      yearEndArray: this.state.yearEndArray.concat(this.state.yearEnd),
      university: '',
      degree: '',
      yearStart: '',
      yearEnd: '',

    })
  }
  cancelCurrentEducation(event) {
    this.setState({
      university: "",
      degree: "",
      yearStart: "",
      yearEnd: "",
    })
  }
  handleClickExperience = (event) => {
    this.setState({
      companyArray: this.state.companyArray.concat(this.state.company),
      positionArray: this.state.positionArray.concat(this.state.position),
      startDateArray: this.state.startDateArray.concat(this.state.startDate),
      endDateArray: this.state.endDateArray.concat(this.state.endDate),
      company: "",
      position: "",
      startDate: "",
      endDate: "",

    })
  }
  cancelCurrentExperience(event) {
    this.setState({
      company: "",
      position: "",
      startDate: "",
      endDate: "",
    })
  }

  handleClickSkills = (event) => {
    this.setState({
      skillsArray: this.state.skillsArray.concat(this.state.skillCurrent),
      skillCurrent: '',

    })
  }
  cancelCurrentSkill(event) {
    this.setState({
      skillCurrent: '',
    })
  }

  editOrPreview() {
    if (this.state.edit === true) {
      this.setState({
        edit: false,
        editOrPreviewName: 'Edit',
        editOrPreviewClass: 'editButton',

      })
    }
    else {
      this.setState({
        edit: true,

        editOrPreviewName: 'Preview',
        editOrPreviewClass: 'previewButton',
      })
    }
  }
  clearPersonal(event) {
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    })
  }
  clearSkills(event) {
    this.setState({
      skillsArray: [],
      skillCurrent: '',
    })
  }
  clearAllEducation(event) {
    this.setState({
      university: [],
      degree: [],
      yearStart: [],
      yearEnd: [],
      universityArray: [],
      degreeArray: [],
      yearStartArray: [],
      yearEndArray: [],
    })
  }
  clearAllExperience(event) {
    this.setState({
      company: [],
      position: [],
      startDate: [],
      endDate: [],
      companyArray: [],
      positionArray: [],
      startDateArray: [],
      endDateArray: [],
    })
  }
  clearAll(event) {
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",

      university: [],
      degree: [],
      yearStart: [],
      yearEnd: [],
      universityArray: [],
      degreeArray: [],
      yearStartArray: [],
      yearEndArray: [],


      company: [],
      position: [],
      startDate: [],
      endDate: [],
      companyArray: [],
      positionArray: [],
      startDateArray: [],
      endDateArray: [],

      skillsArray: [],
      skillCurrent: '',
    })
  }



  render() {

    if (this.state.edit === true) {
      return (
        <div >
          <Header editOrPreview={this.editOrPreview}
            clearAll={this.clearAll} />
          <div className="topButtons">
            <button name="edit" className={this.state.editOrPreviewClass} onClick={this.editOrPreview}>{this.state.editOrPreviewName}</button>
            <button className="resetButton" onClick={this.clearAll}>Reset</button>
          </div>
          <div className="editPage">

            <h2 className="editSectionHeader">Personal</h2>
            <Personal firstName={this.state.firstName}
              lastName={this.state.lastName}
              email={this.state.email}
              phone={this.state.phone}
              handleChange={this.handleChange}
              clearPersonal={this.clearPersonal}

            />
            <h2 className="editSectionHeader">Education</h2>
            <Education university={this.state.university}
              degree={this.state.degree}
              yearStart={this.state.yearStart}
              yearEnd={this.state.yearEnd}
              handleChange={this.handleChange}
              handleClickEducation={this.handleClickEducation}
              cancelCurrentEducation={this.cancelCurrentEducation}
              clearAllEducation={this.clearAllEducation}

              universityArray={this.state.universityArray}
            />
            <h2 className="editSectionHeader">Experience</h2>
            <Experience
              company={this.state.company}
              position={this.state.position}
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              handleChange={this.handleChange}
              handleClickExperience={this.handleClickExperience}
              cancelCurrentExperience={this.cancelCurrentExperience}
              clearAllExperience={this.clearAllExperience}
            />
            <h2 className="editSectionHeader">Skills</h2>
            <Skills

              skillCurrent={this.state.skillCurrent}
              skillsArray={this.state.skillsArray}

              handleClickSkills={this.handleClickSkills}
              cancelCurrentSkill={this.cancelCurrentSkill}

              handleChange={this.handleChange}
              clearSkills={this.clearSkills}
            />
            <div className="credits">Icon by <a href="https://www.flaticon.com/authors/roundicons" title="Roundicons">Roundicons.</a> Project from <a href="https://www.theodinproject.com/" title="The Odin Project">The Odin Project.</a> Created by <a href="https://github.com/ToMerchant/" title="ToMerchant">ToMerchant.</a></div>
          </div >
        </div>
      )
    }
    else {
      return (
        <div>
          <Header editOrPreview={this.editOrPreview}
            clearAll={this.clearAll}
          />
          <div className="topButtons">
            <button name="edit" className={this.state.editOrPreviewClass} onClick={this.editOrPreview}>{this.state.editOrPreviewName}</button>
            <button className="resetButton" onClick={this.clearAll}>Reset</button>
          </div>
          <div>
            <ReactToPrint content={() => this.componentRef}>
              <PrintContextConsumer>
                {({ handlePrint }) => (
                  <button className="pdfButton" onClick={handlePrint}>Save PDF</button>
                )}
              </PrintContextConsumer>
            </ReactToPrint>

            <ToPrint ref={el => (this.componentRef = el)}
              firstName={this.state.firstName}
              lastName={this.state.lastName}
              email={this.state.email}
              phone={this.state.phone}

              universityArray={this.state.universityArray}
              degreeArray={this.state.degreeArray}
              yearStartArray={this.state.yearStartArray}
              yearEndArray={this.state.yearEndArray}

              companyArray={this.state.companyArray}
              positionArray={this.state.positionArray}
              startDateArray={this.state.startDateArray}
              endDateArray={this.state.endDateArray}

              skillsArray={this.state.skillsArray}


            />
          </div>

        </div>

      )
    }
  }
}


export default App
