import React from "react"
import { Card, CardTitle, CardText, CardActions, CardMenu, IconButton, Button } from "react-mdl"

class Project extends React.Component {
    render() {
        let picUrl

        if(this.props.lang === 0){
            picUrl = "https://icons.iconarchive.com/icons/papirus-team/papirus-apps/512/python-icon.png"
        }
        else if(this.props.lang === 1) {
            picUrl = "https://images.vexels.com/media/users/3/166179/isolated/preview/b83d6b47a9502dfaf535087627a8bf96-c-programming-language-icon-by-vexels.png"
        }
        else if(this.props.lang === 2) {
            picUrl = "data:image/png;base64,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"
        }
        else if(this.props.lang === 3) {
            picUrl = "https://cdn.worldvectorlogo.com/logos/kotlin-1.svg"
        }
        else if(this.props.lang === 4) {
            picUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
        }

        let image = "url(" + picUrl + ") center / cover"

        return(
            <Card shadow={5} className="project-card" >
                <CardTitle style={{color: "black", height: "190px", background: image}}>
                    {this.props.projectName}
                </CardTitle>

                <CardText>
                    {this.props.projectDescription}
                </CardText>

                <CardActions border>
                    <a href={this.props.url} target="_blank" rel="noopener noreferrer">
                        <Button colored>GitHub</Button>
                    </a>
                </CardActions>

                <CardMenu style={{color: "#fff"}}>
                    <IconButton name="github link" />
                </CardMenu>
            </Card>
        )
    }
}

export default Project