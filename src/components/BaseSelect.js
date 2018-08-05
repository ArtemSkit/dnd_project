import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
    baseinfo_formControl: {
        marginTop: '1em',
        minWidth: '7em',
    }
});

class BaseSelect extends Component {
    state = {
        [this.props.name]: '',
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value }, () => this.props.onUpdate(event));
    };
    createSelect = () => {
        let select = []
        let arr = this.props.valuesarr;
        // Outer loop to create parent
        for (let i = 0; i < arr.length; i++) {
            select.push(<MenuItem key={i} value={(i + 1) * 10}>{arr[i]}</MenuItem>)
        }
        return select;
    }
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <FormControl className={classes.baseinfo_formControl}>

                    <InputLabel htmlFor={this.props.name + '_select'}>{this.props.name.charAt(0).toUpperCase() + this.props.name.substr(1)}</InputLabel>
                    <Select
                        value={this.state[this.props.name]}
                        onChange={this.handleChange}
                        inputProps={{
                            name: this.props.name,
                            id: this.props.name + '_select',
                        }}
                    >
                        {this.createSelect()}
                    </Select>
                </FormControl>
            </React.Fragment >
        )
    }
}

BaseSelect.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BaseSelect);