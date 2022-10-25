import { IconButton, Grid, Typography} from "@mui/material";
import {GitHub, Facebook, LinkedIn} from '@mui/icons-material';

const Footer = ()=>{
    return(
        <>
            <Grid container mt={5} p={5} sx={{backgroundColor: 'black'}}>
                <Grid container justifyContent="center" xs={12}>
                    <Grid item>
                        <Typography variant='body2' component='div'>Create By Ahmed Tarek</Typography>
                    </Grid>
                </Grid>
                <Grid container justifyContent='center'>
                    <Grid item className="social">
                        <IconButton href='/github' component="a">
                            <GitHub />
                        </IconButton>
                        <IconButton href='/linkedin' component="a">
                            <LinkedIn />
                        </IconButton>
                        <IconButton href='/facebook' component="a">
                            <Facebook />
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>

        </>
    )
}

export default Footer