# tutorial-arranger
import React from "react"

class Component1 extends React.Component {
    constructor() {
        super()
        this.state = {
            moduleCode: "",
            lectureGroup: ""
        }
        this.handleClick=this.handleClick.bind(this)
        this.handleChange=this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    handleClick() {
        
    }

    render() {
        return(
                <form>
                    <input 
                        name="moduleCode" 
                        className="moduleSelector" 
                        type="text" 
                        placeholder="Module Code"
                        onChange={this.handleChange}
                        value={this.state.moduleCode}
                    />
                    <input 
                        name="lectureGroup" 
                        className="moduleSelector" 
                        type="text" 
                        placeholder="Lecture Group Chosen"
                        onChange={this.handleChange}
                        value={this.state.lectureGroup}
                    />
                    <button className="moduleSelector" onClick={this.handleClick}>Confirm</button>
                </form>
        )
    }
}

export default Component1;
