import {Box, Drawer, IconButton} from "@mui/material";
import React from "react";
import MenuIcon from '@mui/icons-material/Menu';

const AppSidebar = () => {
  const [open, setOpen] = React.useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
      <>
        <Box>

          <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && {display: 'none'}),
              }}
          >
            <MenuIcon/>
          </IconButton>
          <Drawer variant="permanent" open={open}>
            <Box sx={{bgcolor: '#d7e7d2', height: '100vh'}}>
              <h2>
                This is Sidebar
              </h2>
            </Box>
          </Drawer>
        </Box>
      </>
  )
}

export default AppSidebar;