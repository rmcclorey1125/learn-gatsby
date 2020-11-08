import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
    return(
        <Layout>
            <h1>About Me</h1>
            <p>Software Engineer graduated from Flatiron school bootcamp.</p>
            <p>For more info contact me <Link to='/contact'>Contact</Link></p>
        </Layout>
    )
}

export default AboutPage