import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick"
import listSpecialist from '../../../services/listSpecialist';

class Specialty extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    componentDidMount() {
        listSpecialist()
    }
    render() {

        return (
            <div className="section-share section-specialty">
                <div className="section-container">
                    <div className="section-header">
                        <span className="title-section">Chuyên khoa phổ biến</span>
                    </div>
                    <div className="section-body">
                        <Slider {...this.props.settings}>
                            {this.state.data.map((item, index) => (
                                <div className="section-customize" key={index}>
                                    <div className="bg-image section-document" />
                                    <div>{item}</div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
