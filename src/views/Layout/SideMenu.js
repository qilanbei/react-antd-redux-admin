import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import {Layout, Menu, Icon, Switch} from 'antd'

import menus from '@/router/menus'
import routes from '@/router/routes';

import { setUserInfo } from '@/redux/actions/userInfo'
import { addTag } from "@/redux/actions/tagList";
import { connect } from 'react-redux'

const { SubMenu } = Menu;
const { Sider } = Layout;

class SideMenu extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        theme: 'dark',
        current: '1',
    };
    changeTheme = value => {
        this.setState({
            theme: value ? 'dark' : 'light',
        });
    }
    handleClick = e => {
        this.setState({
            current: e.key,
        });
    };
    handClickTag(currentLink, parent) {
        const { path, title } = currentLink;
        for (let i = 0; i < routes.length; i++) {
            if (path === routes[i].path) {
                let obj = { path, title, component: routes[i].component };
                this.props.addTag(parent ? Object.assign({}, obj, { parent: parent.title }) : obj);
            }
        }
    }
    renderMenu = menus => {
        return menus.map(item => {
            if (item.children) {
                return (
                    <SubMenu
                        key={item.path}
                        title={
                            <span>
                                {item.icon ? <Icon type={item.icon} /> : ''}
                                <span>{item.title}</span>
                            </span>
                        }
                    >
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return (
                <Menu.Item key={item.path}>
                    <Link to={item.path} onClick={() => this.handClickTag(item)}>
                        {item.icon ? <Icon type={item.icon} /> : ''}
                        <span>{item.title}</span>
                    </Link>
                </Menu.Item>
            )
        })
    }
    render () {
        const { collapse } = this.props;
        return (
            <Sider trigger={null} collapsible width={226} collapsed={collapse.isCollapsed} theme={this.state.theme}>
                <div className="logo">
                    <p className="logo-text">LOGO</p>
                </div>

                <Menu onClick={this.handleClick}
                      theme={this.state.theme}
                      mode="inline">
                    {this.renderMenu(menus)}
                </Menu>
                {
                    !collapse.isCollapsed ? <div className='theme-switch'>
                    <span style={{color: '#666', marginRight: '20px'}}>
                        <Icon type="bulb"/>
                        切换主题
                    </span>
                        <Switch
                            checked={this.state.theme === 'dark'}
                            onChange={this.changeTheme}
                            checkedChildren="Dark"
                            unCheckedChildren="Light"
                        />
                    </div> : ''
                }

            </Sider>
        )
    }

}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
    setUserInfo: data => {
        dispatch(setUserInfo(data))
    },
    addTag: data => {
        dispatch(addTag(data))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(SideMenu));
