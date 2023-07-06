import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick"
import axiosq from 'axios';
class Specialty extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    componentDidMount() {
        axios.get('https://project1backend-da705e13e21b.herokuapp.com/list/specialists') // Thay 'URL_API' bằng đường dẫn tới API của bạn
        .then(response => {
            this.setState({ data: response.data });
        })
        .catch(error => {
            console.log(error);
        });
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
