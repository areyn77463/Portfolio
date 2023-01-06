import React from 'react';
import Me from '../../../Assets/Images/83590.jpg'

const styles = {
    paragraph: {
        display: 'inline',
        float: 'left',
        position: 'absolute',
        width: '67%',
        margin: '0 auto 0 3%',
        textIndent: '45px',
    }
}

const AboutMe = (props) => {

    return (<>
    <div style={{height: '100%', width: '100%', marginTop: '20px'}}>
        <img 
            src={Me} 
            alt={"Aaron Reynolds"}
            style={{height: '97%', border: 'inset', float: 'left', marginRight: '20px'}}
        />
        <div style={{border: 'inset', backgroundColor: 'white', height: '97%', overflowY: 'scroll'}}>
            <div>
                <h1 style={{textAlign: 'center', padding: '20px 0 0 0', margin: '0 0 0 0'}}>Aaron Reynolds</h1>
                <h3 style={{textAlign: 'center', padding: '0 0 35px 0', margin: '0 0 0 0'}}> Software Developer</h3>
            </div>
            <p>
                Hello and welcome to my portfolio! My name is Aaron Reynolds and I am a recent graduate in Computer Science from Old Dominion University. Prior to that, I earned my Associate's degree in Science from Southside Virginia Community College. It wasn't until attending ODU that my coding journey truly began. During my time there, I gained a strong foundation in programming, problem-solving, and the software development process.
            </p>

            <p>
                In my personal life, I am passionate about music, art, and animals. I also enjoy being a parent, spending time with my family, and playing video games. These interests and responsibilities inspire me to pursue a career in tech, where I can constantly learn and grow while also creating tools and solutions to make my life and the lives of others easier and more efficient.
            </p>

            <p>
                I am currently seeking a junior software engineer position where I can build upon my existing skills and begin my career in the tech industry. I am passionate about creating and maintaining software that solves complex problems and makes a positive impact. In the meantime, I plan to continue learning and writing code to expand my knowledge and abilities. Some of my past projects include a Sokoban solver, a Sudoku solver, a Connect 4 AI, a university enrollment projections tool, and a prototype for tracking forest health.
            </p>

            <p>
                Looking ahead, I am eager to strengthen my understanding of data structures and algorithms, improve my programming and problem-solving skills, and learn new technologies such as Node.JS, Three.JS, React, Flask, OpenCV, TensorFlow, Rust, and AWS. Thank you for visiting my portfolio and I hope you find my work interesting!
            </p>
        </div>
    </div>
    </>)

}

export default AboutMe;