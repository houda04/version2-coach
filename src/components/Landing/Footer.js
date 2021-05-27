import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import DraftsIcon from '@material-ui/icons/Drafts';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    'aria-controls': `scrollable-prevent-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonPrevent() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar style = {{backgroundColor : 'grey'}} position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="off"
          aria-label="scrollable prevent tabs example"
        >
          <Tab icon={<PhoneIcon />} aria-label="phone" {...a11yProps(0)} />
          <Tab icon={<DraftsIcon />} aria-label="favorite" {...a11yProps(1)} />
          <Tab icon={<MoreHorizIcon />} aria-label="person" {...a11yProps(2)} />
         
          <Tab icon={<p>Copyrights: Augmentality2021 </p>} aria-label="down" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <h2 style = {{color : 'green', fontSize :25}}>Téléphone: </h2>
      </TabPanel>
      <TabPanel value={value}  index={1}>
        <h2 style = {{color : 'green', fontSize :25}}>Email : </h2>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <YouTubeIcon style = {{color: 'green', width : 50 , height : 50, marginRight : 50, marginLeft: 500 }}/>
          <FacebookIcon style = {{color: 'green', width : 50 , height : 50, marginRight : 50, marginLeft: 50 }}/>
          <InstagramIcon style = {{color: 'green', width : 50 , height : 50, marginRight : 50, marginLeft: 50 }}/>
          
      </TabPanel>
      {/* <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel> */}
    </div>
  );
}