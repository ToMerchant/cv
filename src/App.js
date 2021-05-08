import './styles.css'
import React from "react"
import Personal from "./components/Personal"
import Education from "./components/Education"
import Preview from "./components/Preview"
import Header from "./components/Header"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      university: "",
      degree: "",
      year: "",
      notes: "",
      edit: true
    }
    this.handleChange = this.handleChange.bind(this)
    this.editOrPreview = this.editOrPreview.bind(this)
  }
  handleChange(event) {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  editOrPreview() {
    if (this.state.edit === true) {
      this.setState({ edit: false })
    }
    else { this.setState({ edit: true }) }
  }

  render() {
    if (this.state.edit === true) {
      return (
        <div>
          <Header editOrPreview={this.editOrPreview} />
          <Personal firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            phone={this.state.phone}
            handleChange={this.handleChange}
          />
          <Education university={this.state.university}
            degree={this.state.degree}
            year={this.state.year}
            notes={this.state.notes}
            handleChange={this.handleChange}
          />
        </div >
      )
    }
    else {
      return (
        <div>
          <Header editOrPreview={this.editOrPreview} />
          <Preview firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            phone={this.state.phone}
            university={this.state.university}
            degree={this.state.degree}
            year={this.state.year}
            notes={this.state.notes}
          />
        </div>
      )
    }
  }
}

export default App;
