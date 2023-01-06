import React from 'react';
import leetcode from '../../../Assets/Images/download.png'
import github from '../../../Assets/Images/GitHub-logo.png'
import linkedin from '../../../Assets/Images/Linkedin-logo.png'
import email from '../../../Assets/Images/mail.png'


const styles = {
    button: {
        flex: 1,
        width: '10%',
        height: '100%',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 3%',
        border: 'outset 3px darkGrey',
        backgroundColor: 'rgb(214, 211, 206)',
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonContainer: {
        height: '70%',
        width: '100%',
        marginTop: '14px',
        display: 'flex',
      },
      buttonImage: {
        width:'auto', 
        height:'80%'
      }
}

const Networking = (props) => {

    return (<>
    <div style={styles.buttonContainer}>
      <a href="mailto: ajr2934@outlook.com" style={styles.button}>
        <img src={email} alt="Email" style={styles.buttonImage} />
      </a>
      <a href="https://www.linkedin.com/in/aaron-reynolds-833352197/" style={styles.button}>
        <img src={linkedin} alt="LinkedIn" style={styles.buttonImage} />
      </a>
      <a href="https://github.com/areyn77463" style={styles.button}>
        <img src={github} alt="GitHub" style={styles.buttonImage} />
      </a>
      <a href="https://leetcode.com/areyn009/" style={styles.button}>
        <img src={leetcode} alt="LeetCode" style={styles.buttonImage} />
      </a>
    </div>
    </>)
}

export default Networking;