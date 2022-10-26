import { Button, IconButton, Grid, Drawer, Box } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";

const Nav = ()=>{
    const [menu, setMenu] = useState(false);
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) { return; }
        setMenu(open);
    };
    
    
    return(
        <Grid container justifyContent='space-between' sx={{position: 'sticky', top: '0px', zIndex: '1100', backgroundColor:'black', color: 'white'}}>
            <Grid item>
                <Button href='/' variant='outlined' sx={{borderRadius: '0', color:'black', borderColor: 'black'}}>Portfolio</Button>
            </Grid>
            <Grid item>
                <Box sx={{display: {xs: 'none', md: 'block'}}}>
                    <Box className="box-nav">
                        <Button href="#services">Services</Button>
                        <Button href="#projects">Projects</Button>
                        <Button href="#about">About</Button>
                        <Button href="#contact">Contact</Button>
                    </Box>
                </Box>
                <Box sx={{display: {xs: 'block', md:'none'}}}>
                    <IconButton onClick={toggleDrawer(true)}>
                        <MenuIcon />
                    </IconButton>
                    <Drawer
                        anchor='right'
                        open={menu}
                        onClose={toggleDrawer(false)}
                    >
                        <Box className="box-nav" sx={{'&& a' : { display: 'block', textAlign: 'center', width: '100%'}}}
                            onClick={toggleDrawer(false)}
                            onKeyDown={toggleDrawer(false)}
                        >
                            <Button href="#services">Services</Button>
                            <Button href="#projects">Projects</Button>
                            <Button href="#about">About</Button>
                            <Button href="#contact">Contact</Button>
                        </Box>
                    </Drawer>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Nav;