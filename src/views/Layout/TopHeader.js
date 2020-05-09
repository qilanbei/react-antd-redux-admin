import React, { Component, Fragment } from 'react'
import { Avatar, Button, Icon, Menu, Dropdown, Badge } from 'antd'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setCollapse } from '@/redux/actions/setting'
import { setUserInfo } from '@/redux/actions/userInfo'
import './index.styl'
import avatar from '@/assets/images/avatar.png'
const { SubMenu } = Menu

const UserList = ['U', 'Lucy', 'Tom', 'Edward']
const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae']

class TopHeader extends Component {
    constructor (props) {
        super(props)
        this.state = {
            user: UserList[0],
            color: colorList[0],
            visible: false
        }
        this.toggleCollapsed = this.toggleCollapsed.bind(this)
    }

    toggleCollapsed () {
        this.props.setCollapse({ isCollapsed: !this.props.collapse.isCollapsed })
    }
    changeUser = () => {
        const index = UserList.indexOf(this.state.user);
        this.setState({
            user: index < UserList.length - 1 ? UserList[index + 1] : UserList[0],
            color: index < colorList.length - 1 ? colorList[index + 1] : colorList[0],
        });
    };
    renderRightContent () {
        return (
            <Menu>
                <Menu.Item key="1"> User Info </Menu.Item>
                <Menu.Item key="2"> Sign Out </Menu.Item>
            </Menu>
        )
    }
    handleVisibleChange = flag => {
        this.setState({ visible: flag });
    };
    toNews = () => {
        // this.handClickTag('/news');
        // this.props.history.push('/news');
    };
    render () {
        return (
            <div className="top-header">
                <div className="top-header-inner">
                    <Icon onClick={this.toggleCollapsed}
                          type='menu-fold' style={{ marginBottom: 16, marginRight: 10}} />
                    <div className="pull-right">
                        <div className="news-wrap" style={{display: 'inline-block'}}>
                            <Badge count={3}>
                                <Icon style={{ fontSize: '21px', cursor: 'pointer' }} type="bell" onClick={this.toNews} />
                            </Badge>
                        </div>
                        <div style={{display: 'inline-block', marginLeft: '25px'}}>
                            <Dropdown

                                overlay={this.renderRightContent()}
                                onVisibleChange={this.handleVisibleChange}
                                visible={this.state.visible}
                            >
                                <div>
                                    <span>Hi , </span>
                                    <Avatar onClick={this.changeUser}
                                            style={{ backgroundColor: this.state.color, verticalAlign: 'middle' }}
                                            size={45}>
                                        {this.state.user}
                                    </Avatar>
                                </div>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => state;
const mapDispatchToPops = dispatch => ({
    setCollapse: data => {
        dispatch(setCollapse(data))
    },
    setUserInfo: data => {
        dispatch(setUserInfo(data))
    }
})

export default connect (
    mapStateToProps,
    mapDispatchToPops
)(withRouter(TopHeader))


