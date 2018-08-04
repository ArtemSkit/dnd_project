import React from 'react'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import BaseSelect from './BaseSelect'
var DATA = {
    raceList: ['Elf', 'Human', 'Firbog'],
    align: ['Good', 'Neutral', 'Evil'],
    class: ['Rogue', 'Blood Hunter', 'Wizard']
}

const BaseInfo = () => {

    var handleChange = event => {
        if (event.target.value.charAt(0)==='-' || event.target.value.charAt(0)==='0') {
            event.target.value="";
        } else if (parseInt(event.target.value, 10) > 20) event.target.value="20";
    };

    return (
        <div className={"baseinfo"}>
            <Typography variant="display3" align="center" style={{ marginTop: '0.5em' }}>
                Character Builder for D&D 5e
            </Typography>
            <form className={"baseinfo-form"} autoComplete="off">
                <Grid container spacing={8} alignItems="center" justify="center" style={{ paddingTop: '2em' }}>
                    <div className="baseinfo-name">
                        <Grid container spacing={8} alignItems="flex-end"  style={{ paddingLeft: '21em' }}>
                            <Grid item>
                                <AccountCircle />
                            </Grid>
                            <Grid item style={{ marginRight: '5em' }}>
                                <TextField autoFocus={true} id="input-name" label="Name" />
                            </Grid>
                            <Grid item style={{ marginRight: '5em' }}>
                                <BaseSelect id="input-race" name='race' valuesarr={DATA.raceList} />
                            </Grid>
                            <Grid item>
                                <BaseSelect id="input-align" name='alignment' valuesarr={DATA.align} />
                            </Grid>
                            <Grid container spacing={8} alignItems="flex-end" >
                                <Grid item style={{ marginLeft: '2.2em' }}>
                                    <BaseSelect id="input-class" name='class' valuesarr={DATA.class} />
                                </Grid>
                                <Grid item>
                                    <TextField id="input-level" style={{ maxWidth: '3em', marginLeft: '9.4em' }} label="Level" type="number" inputProps={{ min: "1", max: "20", step: "1" }} onChange={handleChange}/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </form>
        </div>
    )
}

export default BaseInfo;