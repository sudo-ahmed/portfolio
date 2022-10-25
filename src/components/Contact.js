import { Button, Grid, Box, TextField, Divider, Chip } from "@mui/material";
import {Phone , Email, LocationOn} from '@mui/icons-material';
const Contact = ()=>{
    return(
        <>
            <Grid container mt={3} sx={{backgroundColor: 'black'}}>
                <Grid item xs={12}>
                    <Divider sx={{borderColor: '#ed6c02'}}>
                        <Box component='b' className="label-section" id="contact">Contact Me</Box>
                    </Divider>
                </Grid>

                <Grid container>
                    <Grid container className="info" alignContent='center' xs={12} sm={6} sx={{order:{xs:'2', sm:'0'}, marginTop:{xs: '15px'}}}>
                        <Grid item xs={12}>
                            <Chip icon={<Phone />} label='01091370274' />
                        </Grid>
                        <Grid item xs={12}>
                            <Chip icon={<Email />} label='ahmed@frontend.com' />
                        </Grid>
                        <Grid item xs={12}>
                            <Chip icon={<LocationOn />} label='Giza - Egypt' />
                        </Grid>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Box component='form' className="form-contact" action=''>
                            <TextField id="standard-basic" type='text' label="Name" variant="standard" />
                            <TextField id="standard-basic" type='email'  label="E-Mail" variant="standard" />
                            <TextField id="outlined-multiline-static" label="Message" multiline rows={4} />

                            <Button type='submit' variant='contained'>Send Message</Button>
                        </Box>
                    </Grid>
                </Grid>

            </Grid>
        </>
    )
}

export default Contact;