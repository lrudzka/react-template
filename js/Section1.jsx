import React from 'react';
import Template from './Template.jsx';


class Section1 extends React.Component {
    constructor(props){
        super(props);
    }




    render() {

        return (
            <Template>
                <section className="body">
                    <section className="box mainWidth">
                        <div>Section 1</div>
                    </section>
                </section>
            </Template>
        )
    }

}

module.exports = Section1;