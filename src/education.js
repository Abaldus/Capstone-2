import React from 'react';
import Container from '@material-ui/core/Container';
import { Button } from '@material-ui/core';
import clsx from 'clsx';
import { withStyles} from '@material-ui/core/styles';
import './education.css';
import three60Button from './assets/360button.png';
import responseButton from './assets/responsebutton.png';
import arButton from './assets/arbutton.png';
const styles = {
  root: {
    background: 'transparent',
    borderRadius: 15,
    border:'2px solid currentColor',
    color: 'transparent',
    height: "61px",
    width: "288px",
    padding: '0px 60px',
    margin: 20,
  //   boxShadow: '0 3px 5px 2px rgba(255, 255, 255, .3)',
  },
};

const Education = (props) =>{
  // const isMobile = window.innerWidth <= 450;
  const { classes, children, className, ...other } = props;
  return (
      <div className="education">
          <Container className="educationbuttons" maxWidth="sm">
              {/* <img className="logo" src={ logo } alt="logo"/> */}
                  <div>
                      <Button className={clsx(classes.root, className)} {...other} size="large" variant="contained" href="https://firstlinetaskforcevrenv.web.app/" >
                            <img className="buttonstyle" src={ three60Button } alt="buttonStyle" width="300px" height="80px"/>
                      </Button>
                  </div>
                  <div>
                      <Button className={clsx(classes.root, className)} {...other} size="large" variant="contained" href="https://first-line-model-viewer.web.app/" >
                            <img className="buttonstyle" src={ responseButton } alt="buttonStyle" width="300px" height="80px"/>
                      </Button>
                  </div>
                  <div>
                      <Button className={clsx(classes.root, className)} {...other} size="large" variant="contained" href="https://arplacementendpoint.web.app/" >
                            <img className="buttonstyle" src={ arButton } alt="buttonStyle" width="300px" height="80px"/>   
                      </Button>
                  </div>
          </Container>
      </div>
      
  );
}

export default withStyles(styles)(Education);