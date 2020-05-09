import React from 'react';

const About = props => {
    return (
        <div className="shadow-radius">
            <h1 style={styles.title}>简介</h1>
        </div>
    )
}
const styles = {
    title: {
        color: '#333'
    },
    list: {
        padding: 0,
        marginLeft: '40px',
        lineHeight: '2.2em'
    }
};

export default About
