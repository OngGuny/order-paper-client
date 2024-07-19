import AppSidebar from "../components/layout/AppSidebar";
import AppContent from "../components/layout/AppContent";
import AppFooter from "../components/layout/AppFooter";
import {Box} from "@mui/material";
import AppHeader from "../components/layout/AppHeader";

const DefaultLayout = () => {
  return (
      <Box sx={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
        {/* Header */}
        <Box sx={{width: '100%'}}>
          <AppHeader/>
        </Box>

        {/* Content and Sidebar */}
        <Box sx={{display: 'flex', flexGrow: 1}}>
          <Box sx={{width: 100, flexShrink: 0}}>
            <AppSidebar/>
          </Box>
          <Box sx={{flexGrow: 1, padding: 2}}>
            <AppContent/>
          </Box>
        </Box>

        {/* Footer */}
        <Box sx={{width: '100%'}}>
          <AppFooter/>
        </Box>
      </Box>
  );
};

export default DefaultLayout;