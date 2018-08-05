import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import Typography from '@material-ui/core/Typography';


function TabContainer({ children, dir }) {
    return (
        <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}

const styles = {
    root: {
        flexGrow: 1,
    },
};

class CenteredTabs extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    UNSAFE_componentWillUpdate(nextProps, nextState) {
        if (this.state.value === -1) {
            if (nextProps.BaseInfo.class != null) nextState.value = 0;
            if (nextProps.BaseInfo.race != null) nextState.value = 2;
        }
    }

    render() {
        const { classes, theme } = this.props;

        return (
            <Paper className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs fullWidth={true}
                        style={{ maxWidth: '50em' }}
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <Tab label="Class Features" disabled={this.props.BaseInfo.class === null} />
                        <Tab label="Spells" disabled />
                        <Tab label="Race Traits" disabled={this.props.BaseInfo.race === null} />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={this.state.value}
                    onChangeIndex={this.handleChangeIndex}
                >
                    <TabContainer dir={theme.direction}>Item One</TabContainer>
                    <TabContainer dir={theme.direction}>Item Two</TabContainer>
                    <TabContainer dir={theme.direction}>Item Three</TabContainer>
                </SwipeableViews>
            </Paper>
        );
    }
}

CenteredTabs.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(CenteredTabs);
