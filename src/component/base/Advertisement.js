import React, { Component } from 'react';

class Advertisement extends Component {
    render() {
        return (
            <section className="our_client">
                <h4 className="title"><span className="text">Manufactures</span></h4>
                <div className="row">
                    <div className="span2">
                        <a href="#"><img alt="" src="themes/images/clients/14.png" /></a>
                    </div>
                    <div className="span2">
                        <a href="#"><img alt="" src="themes/images/clients/35.png" /></a>
                    </div>
                    <div className="span2">
                        <a href="#"><img alt="" src="themes/images/clients/1.png" /></a>
                    </div>
                    <div className="span2">
                        <a href="#"><img alt="" src="themes/images/clients/2.png" /></a>
                    </div>
                    <div className="span2">
                        <a href="#"><img alt="" src="themes/images/clients/3.png" /></a>
                    </div>
                    <div className="span2">
                        <a href="#"><img alt="" src="themes/images/clients/4.png" /></a>
                    </div>
                </div>
            </section>
        );
    }
}

export default Advertisement;