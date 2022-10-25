import { CodeOutlined, PhotoCameraOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import { Grid, Divider, Box} from "@mui/material";

const Services = ()=>{
    return(
        <>
            <Grid container mt={5} sx={{backgroundColor: 'black'}}>
                <Grid item xs={12}>
                    <Divider sx={{borderColor: '#ed6c02'}}>
                        <Box component='b' className="label-section" id="services">Services</Box>
                    </Divider>
                </Grid>

                <Grid container xs={12} sm={4} md={4} className='itemServices'>
                    <Grid item xs={12} textAlign="center">
                        <CodeOutlined />
                    </Grid>
                    <Grid item xs={12}>
                        <Box component='b' pb={3}>Web Development</Box>
                    </Grid>
                </Grid>
                <Grid container xs={12} sm={4} md={4} className='itemServices'>
                    <Grid item xs={12} textAlign="center">
                        <PhotoCameraOutlined />
                    </Grid>
                    <Grid item xs={12}>
                        <Box component='b' pb={3}>Photographer</Box>
                    </Grid>
                </Grid>
                <Grid container xs={12} sm={4} md={4} className='itemServices'>
                    <Grid item xs={12} textAlign="center">
                        <ShoppingCartOutlined />
                    </Grid>
                    <Grid item xs={12}>
                        <Box component='b' pb={3}>Digital Marketing</Box>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Services;