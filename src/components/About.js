import {Grid, Divider, Box, Typography } from "@mui/material";

const About = ()=>{
    return(
        <>
            <Grid container mt={5} sx={{backgroundColor: 'black'}}>
                <Grid item xs={12}>
                    <Divider sx={{borderColor: '#ed6c02'}}>
                        <Box component='b' className="label-section" id="about">About Me</Box>
                    </Divider>
                    <Typography variant="h6" component='p' sx={{fontFamily: 'sierf', textAlign:'justify'}} color='text.secondary' p={5}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        <Typography variant="h4" component='p' mt={3}>Thank You ,,</Typography>
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default About;