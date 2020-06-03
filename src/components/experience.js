import React, { Component } from "react"
import { Grid, Cell } from "react-mdl"

class Experience extends Component {
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
                    <h4 style={{marginTop: "0px"}}>{this.props.jobName}</h4>
                    <p>{this.props.jobDescription}</p>
                </Cell>
            </Grid>
        )
    }
}

export default Experience