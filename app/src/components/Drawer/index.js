import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom'

export default class SideNav extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }
    handleToggle = () => this.setState({open: !this.state.open});
    handleClose = () => this.setState({ open: false });
    render() {
        return (
            <div>
                <RaisedButton label="Menu" onClick={this.handleToggle}/>
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({ open })}
                >
                    <Link to="/">
                        <MenuItem onClick={this.handleClose}>
                            Books
                        </MenuItem>
                    </Link>
                    <Link to="/model">
                        <MenuItem onClick={this.handleClose}>
                            Models
                        </MenuItem>
                    </Link>
                    <Link to="/reviews">
                        <MenuItem onClick={this.handleClose}>
                            Reviews
                        </MenuItem>
                    </Link>
                </Drawer>
            </div>
        );
    }
}