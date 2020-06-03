import React from "react"
import { Tabs, Tab, Grid, Cell } from "react-mdl"

import Project from "./project"

class Projects extends React.Component {
    constructor() {
        super()

        this.state = {
            activeTab: 0
        }
    }
    
    toggleCategories() {
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid" id="python-code">
                    <Project 
                        projectName = "Magic the Inquiry"
                        projectDescription = "Website using python, flask, and whoosh for database indexing. Cards can be searched and user can build decks."
                        lang = {this.state.activeTab}
                        url = "https://github.com/JesseDaGriffin/MagicTheInquiry/tree/master/Website"
                    />
                    <Project 
                        projectName = "Scryfall Web Scraper"
                        projectDescription = "Script used for scraping images for MTG cards. 'Scryfall' api used for gathering names of the cards."
                        lang = {this.state.activeTab}
                        url = "https://github.com/JesseDaGriffin/MagicTheInquiry/tree/master/MTGCardScraper"
                    />
                    <Project 
                        projectName = "Movie Database: CSV to SQL w/ Queries"
                        projectDescription = "This script converts a csv file of movies to a normalized SQL database. It also allows users to run select queries on the DB."
                        lang = {this.state.activeTab}
                        url = "https://github.com/JesseDaGriffin/MovieDBMySQLfromCSV"
                    />
                    <Project 
                        projectName = "WAH Bitmap Compression"
                        projectDescription = "This script uses WAH bitmap compression on a file of animals. Tuples of animals are converted to binary and then compresssed."
                        lang = {this.state.activeTab}
                        url = "https://github.com/JesseDaGriffin/BitmapCompression"
                    />
                </div>
            )
        }
        else if(this.state.activeTab === 1){
            return(
                <div className="projects-grid" id="c-code">
                    <Project 
                        projectName = "My FTP Service"
                        projectDescription = "Custom ftp program. Server and client code that allows users to transfer binary files."
                        lang = {this.state.activeTab}
                        url = "https://github.com/JesseDaGriffin/MyFTPService"
                    />
                    <Project 
                        projectName = "Back Up Current Directory"
                        projectDescription = "Program that recursively backs up the cwd into a file called '.backup'. User can also use the '.backup' folder that is created to recover old or missing files."
                        lang = {this.state.activeTab}
                        url = "https://github.com/JesseDaGriffin/MyFTPService"
                    />
                </div>
            )
        }
        else if(this.state.activeTab === 2){
            return(
                <div className="projects-grid" id="rails-code">
                    <Project 
                        projectName = "HP Capstone: Microservice Manager"
                        projectDescription = "Web App and engine that allows user to manipulate microservices. Engine mounts to microservices and exposes api. Users and privileges implemented for different actions"
                        lang = {this.state.activeTab}
                        url = ""
                    />
                </div>
            )
        }
        else if(this.state.activeTab === 3){
            return(
                <div className="projects-grid" id="kotlin-code">
                    <Project 
                        projectName = "MTG Variants"
                        projectDescription = "Android app that allows users to play variants of the Magic the Gathering card game. App aids in playing 'Archenemy' and 'Planechase'"
                        lang = {this.state.activeTab}
                        url = "https://github.com/JesseDaGriffin/MTGVariants"
                    />
                    <Project 
                        projectName = "APoD Viewer"
                        projectDescription = "Android app that displays the Astronomy Picture of the Day using nasa's api. User can also change the date and get the picture of that day."
                        lang = {this.state.activeTab}
                        url = "https://github.com/JesseDaGriffin/AndroidApps/tree/master/APoDViewer"
                    />
                    <Project 
                        projectName = "OthelloWorld"
                        projectDescription = "Android app that allows user to play the game 'Othello'"
                        lang = {this.state.activeTab}
                        url = "https://github.com/JesseDaGriffin/AndroidApps/tree/master/OthelloWorld"
                    />
                </div>
            )
        }
        else if(this.state.activeTab === 4){
            return(
                <div className="projects-grid" id="react-code">
                    <Project 
                        projectName = "Portfolio Site"
                        projectDescription = "My first attempt at a React App. You are viewing the demo!"
                        lang = {this.state.activeTab}
                        url = "https://github.com/JesseDaGriffin/MyPortfolioSite"
                    />
                </div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Python</Tab>
                    <Tab>C</Tab>
                    <Tab>Rails</Tab>
                    <Tab>Kotlin</Tab>
                    <Tab>React</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">
                            {this.toggleCategories()}
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
 
export default Projects