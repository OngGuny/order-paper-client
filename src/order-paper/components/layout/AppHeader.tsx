import {Box, Grid, LinearProgress, Popover, Typography} from "@mui/material";
import CampaignIcon from '@mui/icons-material/Campaign';
import React from "react";


const AppHeader = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (anchorEl === event.currentTarget) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
      <>
        <Box display="center" alignItems="center" justifyContent="center"
             sx={{bgcolor: "#b4b9cb", pointerEvents: "none"}}
             onClick={handleClick}>
          <img width={40} height={40} alt={"Favicon img"}
               src={'/assets/DALL·E3 OrderPaper Favicon.png'}/>
          <h1>Order - Listener</h1>
          <Grid item>
            <CampaignIcon
                sx={{marginLeft: '2px', width: 40, height: 40}}
            >
            </CampaignIcon>
          </Grid>
          <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
          >
            <Typography sx={{p: 2}}>메뉴를 결정하셨다면 저에게 알려주세요! Speak or Type!</Typography>
          </Popover>
        </Box>
        <LinearProgress variant="determinate" value={progress}/>
      </>
  )
}

export default AppHeader;