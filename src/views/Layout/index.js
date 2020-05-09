import React, { Component } from 'react'
import { connect } from 'react-redux'
import SideMenu from './SideMenu'
import { Layout } from 'antd'
import BreadCrumb from './BreadCrumb'
import MainContent from './MainContent'
import TopHeader from './TopHeader'

import './index.styl'

import { setUserInfo } from "@/redux/actions/userInfo"

class Index extends Component {
    render () {
        const { breadCrumb } = this.props
        return (
            <div className="Layout">
                <Layout style={{minHeight: '100vh'}}>
                    <SideMenu />
                    <Layout>
                        <TopHeader />
                        <BreadCrumb />
                        <MainContent />
                    </Layout>
                </Layout>
            </div>
        )
    }
}
const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
    setUserInfo: data => {
        dispatch(setUserInfo(data))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index);
