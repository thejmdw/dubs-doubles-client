import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom'
import { LineItemContext } from '../lineitem/LineItemProvider';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { Icon } from '@iconify/react'
import { Total } from "../chart/Total"
import BarChartIcon from '@mui/icons-material/BarChart';
import TimelineIcon from '@mui/icons-material/Timeline';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Logout from '@mui/icons-material/Logout';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export const NavBar3 = () => {
  const history = useHistory()
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <Icon icon="whh:hamburger" width="40" style={{ color: "rgba(255, 167, 38, 1)"}}/>
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dub's Doubles
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="temporary"
        anchor="left"
        open={open}
        onClick={handleDrawerClose}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {/* {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />} */}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
        <ListItem button onClick={() => {history.push("/admin/products")}}>
              <ListItemIcon>
              <FastfoodIcon fontSize="large"/>
              </ListItemIcon>
              <ListItemText primary="Update Products" />
            </ListItem>
        <ListItem button onClick={() => {history.push("/admin/products/new")}}>
              <ListItemIcon>
              <FastfoodIcon fontSize="large"/>
              </ListItemIcon>
              <ListItemText primary="New Product" />
            </ListItem>
        </List>
        <Divider />
        <List>
        {/* <ListItem button onClick={() => {history.push("/admin/charts/test")}}>
              <ListItemIcon>
              <BarChartIcon fontSize="large"/>
              </ListItemIcon>
              <ListItemText primary="Test Chart" />
            </ListItem> */}
        <ListItem button onClick={() => {history.push("/admin/charts/productsales")}}>
              <ListItemIcon>
              <BarChartIcon fontSize="large"/>
              </ListItemIcon>
              <ListItemText primary="Product Sales" />
            </ListItem>
        <ListItem button onClick={() => {history.push("/admin/charts/toppingsales")}}>
              <ListItemIcon>
              <BarChartIcon fontSize="large"/>
              </ListItemIcon>
              <ListItemText primary="Topping Sales" />
            </ListItem>
        <ListItem button onClick={() => {history.push("/admin/charts/dailysales")}}>
              <ListItemIcon>
              <TimelineIcon fontSize="large"/>
              </ListItemIcon>
              <ListItemText primary="Daily Sales" />
            </ListItem>
        </List>
        <Divider />
        <List >
        <ListItem button >
              <ListItemIcon>
              <AttachMoneyIcon fontSize="large"/>
              </ListItemIcon>
              <ListItemText primary={`$${Total()} Total Sales`} />
            </ListItem>
        <ListItem button >
              <ListItemIcon>
              {/* <AttachMoneyIcon fontSize="large"/> */}
              </ListItemIcon>
              
            </ListItem>
            <Divider />
        <ListItem button onClick={() => {
                                localStorage.removeItem("dd_token")
                                localStorage.removeItem("is_staff")
                                history.push("/")
                            }} >
              <ListItemIcon>
              <Logout fontSize="large"/>
              </ListItemIcon>
              <ListItemText primary="Log Out" />
            </ListItem>

        </List>
        
      </Drawer>
      {/* <Main open={open}>
        <DrawerHeader />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Main> */}
    </Box>
  );
}
