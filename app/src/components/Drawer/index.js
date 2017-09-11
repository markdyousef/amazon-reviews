import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

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
                    <MenuItem onClick={this.handleClose}>
                        Collaborative Filter
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                        Sentiment Analysis
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                        Seq2Seq summaries
                    </MenuItem>
                </Drawer>
            </div>
        );
    }
}