import React, { Component } from 'react'
import HeaderComponent from './HeaderComponent'
import BodyComponent from './BodyComponent'
import FooterComponent from './FooterComponent'

export default class BaiTapThucHanhLayout extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <HeaderComponent/>
                    </div>
                    <div className="col-12">
                        <BodyComponent/>
                    </div>
                    <div className="col-12">
                        <FooterComponent/>
                    </div>
                </div>
            </div>

        )
    }
}
