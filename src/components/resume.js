import React from "react"
import { Grid, Cell } from "react-mdl"

import Education from './education'
import Experience from "./experience"
import Skills from "./skills"

class Resume extends React.Component {
    render() {
        return (
            <div className="resume-grid">
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: "center"}}>
                            <img
                                src="https://engititan.com/wp-content/uploads/2016/02/af25490494d3338afef00869c59fdd37.png"
                                alt="avatar"
                                style={{height: "200px", margin: "1em"}}
                            />
                        </div>
                        
                        <h2 style={{paddingTop: "1em"}}>Jesse Griffin</h2>
                        <h4 style={{color:"grey"}}>Programmer</h4>
                        
                        <hr style={{borderTop:"3px solid #833fb2", width:"50%"}} />

                        <p>
                            I have been programming for around four years. Throughout my education, I have learned many programming languages to produce programs and scripts
                            to perform many different tasks. From beginning level java applications to full stack web applications, I have completed a variety of different projects.  
                        </p>

                        <p>
                            I have also learned of different types of design patterns and have learned how to create technical documents, such as 
                            Software Requirement Specifications (SRS).
                        </p>


                        <hr style={{borderTop:"3px solid #833fb2", width:"50%"}} />

                        <h5>Address</h5>
                        <p>Vancouver, Wa 98682</p>

                        <h5>Phone</h5>
                        <p>(360) 936 - 1067</p>

                        <h5>Email</h5>
                        <p>jessegriffincs@gmail.com</p>

                        <h5>Web</h5>
                        <p>https://jessedagriffin.github.io/MyPortfolioSite</p>

                    </Cell>

                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        
                        <Education 
                            schoolName="Washington State University Vancouver"
                            startYear={2018}
                            endYear={2020}
                            relevantClasses={[
                                "Databases",
                                "Systems Programming",
                                "Algorithms",
                                "Web Date",
                                "Mobile App Dev",
                                "Operating Systems",
                                "AI",
                                "Machine Learning",
                                "HP Capstone: Ruby on Rails"
                            ]}
                        />

                        <Education 
                            schoolName="Clark College"
                            startYear={2015}
                            endYear={2018}
                            relevantClasses={[
                                "Intro to Data Structers", 
                                "Programming Tools", 
                                "Discrete Structures", 
                                "HTML Fundamentals", 
                                "Technical Writing"
                            ]}
                        />

                        <hr style={{borderTop: "3px solid #da86eb"}} />

                        <h2>Experience</h2>

                        <Experience 
                            jobName="IT consultant / Office Assistant"
                            startYear="2018"
                            endYear="2019"
                            jobDescription="With this job, I had many office assistant responsibilities but also had the opportunity to learn about IT consulting. I 
                            assembled computers for clients and made python scripts to gather data from a firewall for my employer. I also made a sign in web application
                            for the company's front lobby."
                        />

                        <Experience 
                            jobName="Dollar Tree Warehouse - Quality Control"
                            startYear="2012"
                            endYear="2017"
                            jobDescription="This position was basic warehouse work but ended up becoming a QC job. I maintained inventory in our system for the warehouse as shipments 
                            came in and made sure our counts were up to date."
                        />

                        <hr style={{borderTop: "3px solid #da86eb"}} />

                        <h2>Skills</h2>
                        
                        <Skills 
                            skill="Python"
                            progress={80}
                        />
                        <Skills 
                            skill="JavaScript"
                            progress={70}
                        />
                        <Skills 
                            skill="HTML/CSS"
                            progress={70}
                        />
                        <Skills 
                            skill="Rails"
                            progress={60}
                        />
                        <Skills 
                            skill="C"
                            progress={60}
                        />
                        <Skills 
                            skill="MySQL"
                            progress={50}
                        />
                        <Skills 
                            skill="React"
                            progress={20}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume