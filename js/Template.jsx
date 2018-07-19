import React from 'react';
import {Route, Link} from 'react-router-dom';
import Footer from './Footer.jsx';

class Template extends React.Component {

    render(){
        return(
            <div>
                <section id="header">
                    <h2>Header</h2>
                    <ul>
                        <li><Link to="/">Section 1</Link></li>
                        <li><Link to="/rules">Section 2</Link></li>
                        <li><Link to="/ranking">Section 3</Link></li>
                    </ul>
                </section>
                {this.props.children}
                <Footer/>
            </div>


        )
    }
}

module.exports = Template;