import React from 'react';
import { Button } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { withStyles} from '@material-ui/core/styles';
import './businessheroes.css';
import dominosLogo from './assets/dominos.png';
import oreoLogo from './assets/oreo.jpeg';
import cokeLogo from './assets/cococola.png';
import jackLogo from './assets/jackLogo.png';
// 

const styles = {
    root: {
      background: 'white',
      borderRadius: 0,
      border: 0,
      color: 'white',
      height: 200,
      width: 200,
      padding: '0px 80px',
      margin: 20,
      boxShadow: '0 3px 5px 2px rgba(255, 255, 255, .3)',
    },
  };

function Heroes(props) {
    const { classes, children, className, ...other } = props;
    return (
    <div className="Heroes">
        <h1>
                Business Heroes
        </h1>
        <Box textAlign='center' className='heroBox'>
            <div>
                <Button className={clsx(classes.root, className)} {...other} variant="contained" href="https://ar-endpoint1.web.app/">
                    <img className="dominosLogo" src={ dominosLogo } alt="dominosLogo" height="500%" width="500%"/>
                </Button>
                <Button className={clsx(classes.root, className)}  variant="contained"  href="https://www.youtube.com/watch?v=G0YO3mByDQE">
                    <img className="oreoLogo" src={ oreoLogo } alt="oreoLogo" height="400%" width="400%"/>
                </Button>
                {/* <Button target="_blank" href="http://www.google.com/">Google</Button>*/}
            </div>
            <div>
                <Button className={clsx(classes.root, className)} {...other} variant="contained" href="https://www.youtube.com/watch?v=h2Jg8ryVk1k" >
                    <img className="cokeLogo" src={ cokeLogo } alt="cokeLogo" height="400%" width="400%"/>
                </Button>
                <Button className={clsx(classes.root, className)} {...other} variant="contained"  href="https://www.youtube.com/watch?v=fTgawFAEN0U" >
                    <img className="jackLogo" src={ jackLogo } alt="jackLogo" height="300%" width="300%"/>
                </Button>
                {/* 
                <Button className={clsx(classes.root, className)} {...other} variant="contained" component={Link} to="/businessheroes/jackdaniels" >
                    <img className="jackLogo" src={ jackLogo } alt="jackLogo" height="300%" width="300%"/>
                </Button>
                */}
            </div>
        </Box>
    </div>
    );
}

export default withStyles(styles)(Heroes);

