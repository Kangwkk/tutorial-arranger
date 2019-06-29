import React from "react"
import Component1 from "./Component1"
class Page1 extends React.Component {
    constructor() {
        super()
        this.state={
            numberOfModules: null,
            visibility: "hidden",
            submitNum: null
        }
        this.handleClick=this.handleClick.bind(this)
        this.handleChange=this.handleChange.bind(this)
    }

    handleClick(event) {
        if(isNaN(parseInt(this.state.numberOfModules))) {
            alert("Please enter a number :)")
        } else if (
            parseInt(this.state.numberOfModules) > 0 && parseInt(this.state.numberOfModules) < 15 
        ) {
            const {name}=event.target;
            this.setState({[name]: this.state.numberOfModules})
        }
         else {
            alert("Please enter a valid number :)")
        }
    }  

    handleChange(event){
        const {name, value}=event.target;
        this.setState({[name]: value})
    }

    render() {
        let modules = (num) => {
            var arr = [];
            for(var i = 0; i < num; i++){
                arr.push(<Component1 />)
            }
            return arr
        }
        return (
            <div>
                <h2>Module Selection:</h2>
                Number of modules taken:
                <input 
                    className="totalNum"
                    name="numberOfModules" 
                    type="text" 
                    value={this.state.numberOfModules}
                    placeholder=""
                    onChange={this.handleChange}
                />
                <button 
                    name="submitNum" 
                    onClick={this.handleClick}
                    className="totalNum"
                >
                        Submit
                </button>
                {modules(this.state.submitNum)}
            </div>
        )
}
}

export default Page1; 
