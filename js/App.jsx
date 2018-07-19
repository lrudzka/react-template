import React from 'react';
import ReactDOM from 'react-dom';
import '../css/style.scss';
import Section1 from './Section1.jsx';
import Section2 from './Section2.jsx';
import Section3 from './Section3.jsx';
import {HashRouter,
    Route,
    Link,
    Switch,
    NavLink  } from 'react-router-dom';


class App extends React.Component{


    render(){

        return(
            <HashRouter>
                <section>
                    <Route exact path ='/' component={Section1}  />
                    <Route path="/rules" component={Section2} />
                    <Route path="/ranking" component = {Section3}/>
                </section>
            </HashRouter>

        )
    }
}

document.addEventListener('DOMContentLoaded', function() {

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    )
})