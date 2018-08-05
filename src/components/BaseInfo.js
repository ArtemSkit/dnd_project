import React from 'react'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import BaseSelect from './BaseSelect'

var DATA = {
    raceList: ['Elf', 'Human', 'Firbog'],
    alignment: ['Good', 'Neutral', 'Evil'],
    class: ['Rogue', 'Blood Hunter', 'Wizard']
}

class BaseInfo extends React.Component {
    state = {
        compName: "BaseInfo",
        numb: null,
        name: "",
        class: null,
        alignment: null,
        race: null,
        level: null
    };
     handleNumbChange = event => {
        if (event.target.value.length>2) event.target.value=event.target.value.substr(0, 2);
        console.log("length " + event.target.value.length);
        console.log("value " + event.target.value.charAt(0) + " " + event.target.value.charAt(1) + " " + event.target.value.charAt(2));
        if (event.target.value.length===0) event.target.value="";
        if (event.target.value.charAt(0) === '-' || event.target.value.charAt(0) === '0') {
            event.target.value = "";
        } else if (parseInt(event.target.value, 10) > 20) event.target.value = "20";
        this.setState({ level: parseInt(event.target.value, 10)}, ()=> this.props.onUpdate(this.state));
    };
    handleChange = event =>{
        if (event.target.name==="name") this.setState({ name: event.target.value}, ()=> this.props.onUpdate(this.state));
        else this.setState({ [event.target.name]: parseInt(event.target.value, 10)}, ()=> this.props.onUpdate(this.state));
    };
    componentDidMount(){
        this.props.onUpdate(this.state);
    }
    render() {
    return (
        <div className={"baseinfo"}>
            <Typography variant="display3" align="center" style={{ marginTop: '0.5em' }}>
                Character Builder for D&D 5e
            </Typography>
            <form className={"baseinfo-form"} autoComplete="off">
                <Grid container spacing={8} alignItems="center" justify="center" style={{ paddingTop: '2em' }}>
                    <div className="baseinfo-name" style={{ marginBottom: '2em' }}>
                        <Grid container spacing={8} alignItems="flex-end" style={{ paddingLeft: '21em' }}>
                            <Grid item>
                                <AccountCircle />
                            </Grid>
                            <Grid item style={{ marginRight: '5em' }}>
                                <TextField autoFocus={true} id="input-name" label="Name" name="name" onChange={this.handleChange}/>
                            </Grid>
                            <Grid item style={{ marginRight: '5em' }}>
                                <BaseSelect id="input-race" name='race' valuesarr={DATA.raceList} onUpdate={this.handleChange}/>
                            </Grid>
                            <Grid item>
                                <BaseSelect id="input-alignment" name='alignment' valuesarr={DATA.alignment} onUpdate={this.handleChange}/>
                            </Grid>
                            <Grid container spacing={8} alignItems="flex-end" >
                                <Grid item style={{ marginLeft: '2.2em' }}>
                                    <BaseSelect id="input-class" name='class' valuesarr={DATA.class} 
                                    onUpdate={this.handleChange}/>
                                </Grid>
                                <Grid item>
                                    <TextField id="input-level" style={{ maxWidth: '3em', marginLeft: '9.4em' }} label="Level" type="number" inputProps={{ min: "1", max: "20", step: "1" }} onChange={this.handleNumbChange} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>

            </form>
        </div>
    );
}
}

export default BaseInfo;