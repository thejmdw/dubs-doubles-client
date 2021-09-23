import * as React from 'react';
import { Link, useHistory } from 'react-router-dom'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Button from '@mui/material/Button';
import { Icon } from '@iconify/react'

export const AppMenu = () => {
    const history = useHistory()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Typography sx={{ minWidth: 10 }}></Typography>
        {/* <Typography sx={{ minWidth: 100 }}></Typography> */}
        <Tooltip title="Cheeseburger Menu">
          <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
            <Icon icon="whh:hamburger" width="40"/>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={() => {history.push("/burgers")}} color="error">
            <FastfoodIcon fontSize="large" color="error"/> Burgers
        </MenuItem>
        <MenuItem onClick={() => {history.push("/fries")}}>
            <FastfoodIcon fontSize="large" color="error"/> Fries
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => {history.push("/cart")}}>
          <ListItemIcon>
                <ShoppingBagIcon color="error"/>
          </ListItemIcon>
          Cart
        </MenuItem>
        <MenuItem onClick={() => {
                                localStorage.removeItem("dd_token")
                                localStorage.removeItem("is_staff")
                                history.push("/")
                            }}>
          <ListItemIcon>
            <Logout fontSize="small" color="error"/>
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
