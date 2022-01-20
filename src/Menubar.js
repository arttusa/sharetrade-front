import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Grid, Typography } from '@mui/material';
import './Menubar.css'

function Menubar() {

  return (
    <Grid className='menubar-container' container sx={{ color: 'white' }}>
        <Grid item xs={10} style={{'textAlign':'left'}}>
            <Typography variant='h2'>Share the Trade</Typography>
        </Grid>
        <Grid item xs={2} style={{'textAlign':'right'}}>
            <AccountBoxIcon />
        </Grid>
    </Grid>

    

  );
}

export default Menubar;