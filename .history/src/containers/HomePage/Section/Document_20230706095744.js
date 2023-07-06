import React, { Component } from 'react';
import { connect } from 'react-redux';

import Slider from "react-slick"

class Document extends Component {

    render() {

        return (
            <div className="section-share section-document">
                <div className="section-container">
                    <div className="section-header">
                        <span className="title-section">Tài liệu</span>
                    </div>
                    <div className="section-body">
                        <Slider {...this.props.settings}>
                            <div className="section-customize">
                                <div className="bg-image section-document" />
                                <div>Triệu chứng của bệnh về tim mạch 1</div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-document" />
                                <div>Triệu chứng của bệnh về tim mạch 2</div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-document" />
                                <div>Triệu chứng của bệnh về tim mạch 3</div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-document" />
                                <div>Triệu chứng của bệnh về tim mạch 4</div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-document" />
                                <div>Triệu chứng của bệnh về tim mạch 5</div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-document" />
                                <div>Triệu chứng của bệnh về tim mạch 6</div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-document" />
                                <div>Triệu chứng của bệnh về tim mạch 7</div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-document" />
                                <div>Triệu chứng của bệnh về tim mạch 8</div>
                            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Document);
