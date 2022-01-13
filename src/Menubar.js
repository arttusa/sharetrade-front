import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Grid, Typography } from '@mui/material';

function Menubar() {

  return (
    <Grid container sx={{ color: 'text.primary' }}>
        <Grid item xs={10} style={{'textAlign':'left'}}>
            <Typography>Share the Trade</Typography>
        </Grid>
        <Grid item xs={2} style={{'textAlign':'right'}}>
            <AccountBoxIcon />
        </Grid>
    </Grid>

    

  );
}

export default Menubar;