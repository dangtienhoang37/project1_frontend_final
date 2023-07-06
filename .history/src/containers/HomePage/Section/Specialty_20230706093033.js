import React, { Component } from 'react';
import { connect } from 'react-redux';

import Slider from "react-slick"
import axios from 'axios';

class Specialty extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        axios.get('https://project1backend-da705e13e21b.herokuapp.com/list/specialists')
        .then(response => {
            const data = Object.values(response.data.data); // Trích xuất các giá trị từ object thành một mảng
            this.setState({ data });
        })
        .catch(error => {
            console.log(error);
        });
    }
    render() {
        const { data } = this.state;
        return (
            <div className="section-share section-specialty">
                <div className="section-container">
                    <div className="section-header">
                        <span className="title-section">Chuyên khoa phổ biến</span>
                    </div>
                    <div className="section-body">
                        <Slider {...this.props.settings}>
                            {data.map((item, index) => (
                                    <div className="section-customize" key={index}>
                                        <div className="bg-image section-specialty" />
                                        <div>{item}</div>
                                    </div>
                                ))}
                            {/* <div className="section-customize">
                                <div className="bg-image section-specialty" />
                                <div>Cơ xưong khớp 1</div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-specialty" />
                                <div>Cơ xưong khớp 2</div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-specialty" />
                                <div>Cơ xưong khớp 3</div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-specialty" />
                                <div>Cơ xưong khớp 4</div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-specialty" />
                                <div>Cơ xưong khớp 5</div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-specialty" />
                                <div>Cơ xưong khớp 6</div>
                            </div> */}
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
