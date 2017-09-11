import React, { Component } from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropdownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';

const more = () => (
    <IconButton touch>
        <NavigationExpandMoreIcon />
    </IconButton>
);

const menuItem = (value, text) => (
    <MenuItem key={value} value={value} primaryText={text}/>
);

export default class Nav extends Component {
    handleChange = (event, index, value) => this.setState({value});
    render() {
        const { models, model } = this.props;
        return (
            <Toolbar>
                <ToolbarGroup firstChild={true}>
                    <DropdownMenu value={model} onChange={this.handleChange}>
                        {models.map(value => menuItem(value, value.toUpperCase()))}
                    </DropdownMenu>
                </ToolbarGroup>
                <ToolbarGroup>
                    <ToolbarTitle text="Options" />
                    <FontIcon />
                    <ToolbarSeparator />
                    <RaisedButton label="Create" primary />
                    <IconMenu iconButtonElement={more()}>
                        <MenuItem primaryText="Download" />
                        <MenuItem primaryText="Download" /> 
                    </IconMenu>
                </ToolbarGroup>
            </Toolbar>
        );
    }
}