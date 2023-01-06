import React from 'react';

const styles = {
    content: {
        width: '100%',
        height: '100%'
    },
    container: {
        margin: '0px 0 18px 0',
        padding: '0 0 0 0',
        width:'99%', 
        height:'86%', 
        overflowY: 'scroll',
        backgroundColor:'white',
        border: "inset"
    },
    dot: {
        width:'1px', 
        verticalAlign: 'top'
    }
}

const WorkHistory = (props) => {
  // component code goes here

  return (<>
    <div style={styles.content}>
        <div style={{margin: '0 0 0 0', padding: '10px 0 0 0'}}><h1><i>Work History</i></h1></div>
        <div style={styles.container}>
            <p>
            <h1 style={{padding: '0', margin: '0', display: 'inline'}}>Maxx Potential LLC.,</h1><h4 style={{padding: '1em 1em 0 0', margin: '0', display: 'inline', float: 'right'}}>August 2022 &minus; Present</h4>
            <h2 style={{padding: '0', margin: '0'}}>Richmond, VA</h2>

            <h3 style={{fontWeight: 'normal'}}><i><b>233  Analytics</b> - Full Stack Developer</i></h3>
            Modified, developed, and demonstrated software features using SAFe agile principles and practices to deliver timely updates to a production level web application <br/><br/>
            <b>Key Achievements:</b><br/>
            <table>
                <tr>
                    <td style={styles.dot}>
                        &#x2022;
                    </td>
                    <td>
                    Formulated succinct user stories and well-defined acceptance criteria to aid in optimizing new application feature development productivity
                    </td>
                </tr>
                <tr>
                    <td style={styles.dot}>
                        &#x2022;
                    </td>
                    <td>
                        Examined GitHub backlog issues as per client request and improved the codebase in line with client requirements to enhance user experience
                    </td>
                </tr>
                <tr>
                    <td style={styles.dot}>
                        &#x2022;
                    </td>
                    <td>
                    Lead feature demos to demonstrate value and solicit feedback from key stakeholders, promoting continuous improvement and iterative development as per SAFe Agile principles
                    </td>
                </tr>
            </table>
            <br/><br/>
            <h1 style={{padding: '0', margin: '0', display: 'inline'}}>Old Dominion University,</h1><h4 style={{padding: '1em 1em 0 0', margin: '0', display: 'inline', float: 'right'}}>September 2021 &minus; May 2022</h4>
            <h2 style={{padding: '0', margin: '0'}}>Norfolk, VA</h2>

            <h3 style={{fontWeight: 'normal'}}><i>Online Computer Science Tutor</i></h3>
            
            Assisted students in achieving their set goals by augmenting their understanding of computer science and cybersecurity concepts<br/><br/>
            <b>Key Achievements:</b><br/>
            <table>
                <tr>
                    <td style={styles.dot}>
                        &#x2022;
                    </td>
                    <td>
                        Established an atmosphere where students were at ease to ask questions, which boosted a growth mindset that aided in conquering feelings of uncertainty and unease when confronting educational difficulty
                    </td>
                </tr>
                <tr>
                    <td style={styles.dot}>
                        &#x2022;
                    </td>
                    <td>
                        Provided additional instruction to students which accelerated their comprehension of programming, problem solving, computer logic, and cybersecurity basics
                    </td>
                </tr>
                <tr>
                    <td style={styles.dot}>
                        &#x2022;
                    </td>
                    <td>
                        Created and distributed extra educational materials to further enhance concept understanding
                    </td>
                </tr>
            </table>
            </p>
        </div>
    </div>
  </>);
};

export default WorkHistory;