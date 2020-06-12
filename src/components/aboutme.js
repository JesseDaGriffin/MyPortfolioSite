import React from "react"
import { Grid, Cell } from "react-mdl"

class About extends React.Component {
    render() {
        return (
            <div>
            <Grid className="about-grid">
                <Cell col={4}>
                    <div className="about-left-col">
                        <h2>Personal</h2>
                        <p>
                            I am a father of a four year old and have been with my partner for six years. Both are an integral piece of my life and have been an inspiration for kicking
                            off my awesome programming career. I have lived in Vancouver, Washington for all of my life and with the start of my career, look forward to a potential move. 
                        </p>
                        <p>
                            My family loves animals and we have adopted multiple into our home. We have a dog named Kylo and two cats, Vader and Leia. 
                        </p>
                    </div>
                </Cell>

                <Cell col={4}>
                    {/* <img 
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/3/34/Mt._St._Helens_from_WSU_Vancouver_-_Summer_2016.jpg/1280px-Mt._St._Helens_from_WSU_Vancouver_-_Summer_2016.jpg"
                        alt="college"
                        style={{height: "500px", marginTop: "25px"}}
                    /> */}
                    <div className="about-mid-col">
                        <h2>Programming</h2>
                        <p>
                            I began learning the basics of computer programming on my own and that was when I found my passion for it. Computers can solve all sorts of complex problems.
                            I became excited by this revalation and decided to go to school to learn as much as I could about them. I started my education at Clark College and transfered
                            to Washington State University to finish off my Bachelor's degree. 
                        </p>
                    </div>
                </Cell>

                <Cell col={4}>
                    <div className="about-right-col">
                        <h2>Hobbies</h2>
                        <p>
                            One of my favorite hobbies has been playing Magic the Gathering cards. I combined my love for this game and programming a couple of times. I have made 
                            both an android app and web app based on solving problems related to the game. Both are companion software that aid players in either playing the game or 
                            strategizing around it. 
                        </p>
                    </div>
                </Cell>
            </Grid>
            <img 
                src="https://upload.wikimedia.org/wikipedia/en/thumb/3/34/Mt._St._Helens_from_WSU_Vancouver_-_Summer_2016.jpg/1280px-Mt._St._Helens_from_WSU_Vancouver_-_Summer_2016.jpg"
                alt="college"
                className="about-img"
            /> 
            </div>
        )
    }
}

export default About