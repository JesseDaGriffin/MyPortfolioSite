import React from "react"
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl"

class Contact extends React.Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Jesse Griffin</h2>

                        <img
                            src="https://shanghai-date.com/uploads/g/t/t/h/q2t34kjldqrqv0pl7ihh.png"
                            alt="avatar"
                            className="avatar-img"
                            style={{ height: "250px" }}
                        />

                        <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
                            I recently graduated WSUV and I am eager to find my first job in the computer science field. I am glad you have found my site and I'm excited to bring what I
                            have learned to your team. Feel free to contact me in whatever method suits you. I look forward to hearing from your team!
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>

                        <hr />
                        
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: "3vw", fontFamily: "Anton", justifyContent: "center"}}>
                                        <i className="fa fa-phone-square" aria-hidden="true" /> <br />
                                        (360) 936 - 1067
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: "3vw", fontFamily: "Anton", justifyContent: "center"}}>
                                        <i className="fa fa-envelope-square" aria-hidden="true" /><br />
                                        jessegriffincs@gmail.com
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact