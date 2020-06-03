import React, { Component } from "react"
import { Grid, Cell } from "react-mdl"

class Education extends Component {
    genList(list) {
        const releventClasses = list.map((classname, key) =>
            <li key={classname}>{classname}</li>
        )

        return releventClasses
    }
    
    render() {
        return(
            <Grid>
                <Cell col={4}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>

                <Cell className="schoolDescription" col={8}>
                    <h4 style={{marginTop: "0px"}}>{this.props.schoolName}</h4>
                    <h6 style={{marginTop: "0px"}}>Computer Science Courses</h6>
                    <ul>
                        {this.genList(this.props.relevantClasses)}
                    </ul>
                </Cell>
            </Grid>
        )
    }
}

export default Education