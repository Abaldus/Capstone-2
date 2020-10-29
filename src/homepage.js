import React from 'react';
import Container from '@material-ui/core/Container';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import logo from './assets/taskforce-logo.png';
import { withStyles} from '@material-ui/core/styles';
import './homepage.css';
import planButton from './assets/planbutton.png';
import kitButton from './assets/kitbutton.png';
import informedButton from './assets/informedbutton.png';



const styles = {
    root: {
      background: 'transparent',
      borderRadius: 5,
      border:'2px solid currentColor',
      color: 'transparent',
      height: "61px",
      width: "288px",
      padding: '0px 60px',
      margin: 20,
    //   boxShadow: '0 3px 5px 2px rgba(255, 255, 255, .3)',
    },
  };

const Home = (props) =>{

    const { classes, children, className, ...other } = props;

    let image = Math.floor(Math.random() * 5);
    const divName = "homepage" + image;
    return (

        <div className={divName}>
            <Container maxWidth="sm">
                <img className="logo" src={ logo } alt="logo"/>
                    <div>
                        <Button className={clsx(classes.root, className)} {...other} size="large" variant="contained" component={Link} to="/businessheroes" >
                            <img className="buttonstyle" src={ planButton } alt="buttonStyle" width="300px" height="80px"/>
                        </Button>
                    </div>
                    <div>
                        <Button className={clsx(classes.root, className)}  variant="contained"  href="https://firstlinetaskforce.app/">
                            <img className="buttonstyle" src={ kitButton } alt="buttonStyle" width="300px" height="80px"/>
                        </Button>
                    </div>
                    <div>
                        <Button className={clsx(classes.root, className)} {...other} size="large" variant="contained" component={Link} to="/education" >
                            <img className="buttonstyle" src={ informedButton } alt="buttonStyle" width="300px" height="80px"/>
                        </Button>
                    </div>
            </Container>
        </div>
    );
}

export default withStyles(styles)(Home);