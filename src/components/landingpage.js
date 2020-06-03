import React from "react"
import { Grid, Cell } from "react-mdl"

class Landing extends React.Component {
    render() {
        return (
            <div style={{width: "100%", margin: "auto"}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            // src="https://shanghai-date.com/uploads/g/t/t/h/q2t34kjldqrqv0pl7ihh.png"
                            src={require('../img/linkedinphoto.jpg')}
                            alt="avatar"
                            className="profile-img" 
                        />
                        <div className="banner-text">
                            <h1>Software Engineer</h1>
                            <h3>Full-Stack Web Developer</h3>
                            
                            <hr />

                            <p>HTML/CSS | Bootstrap | JavaScript | React | Ruby on Rails | Python | MySql</p>

                            <div className="social-links">
                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/jesse-griffin-92216019b/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a>

                                {/* Github */}
                                <a href="https://github.com/JesseDaGriffin" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github-square" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing