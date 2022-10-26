import { Box, Button, Grid } from "@mui/material";

const Header = ()=>{
    return(
        <Grid container mt={5} sx={{backgroundColor: 'black'}}>
            <Grid container justifyContent='center' xs={12} sm={6}>
                <Grid item>
                    <Box component='img' src="./mypic.png" className="myimg" alt='myImage' />
                </Grid>
            </Grid>
            <Grid container justifyContent='center' alignItems='center' xs={12} sm={6}>
                <Grid item>
                    <Box component='b' className="myname">Ahmed Tarek</Box>
                    <Box component='b' className="myjob">Front End Developer</Box>
                    <Button variant='outlined' color='warning'>Hiring Me</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Header;