import React from 'react';
import Container from '@material-ui/core/Container';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import logo from './assets/taskforce-logo.png';
import { withStyles} from '@material-ui/core/styles';
import './homepage.css';


const styles = {
    root: {
      background: 'linear-gradient(45deg, #ff0808 30%, #871c1c 90%)',
      borderRadius: 15,
      border: 0,
      color: 'white',
      height: 60,
      width: 300,
      padding: '0px 60px',
      margin: 20,
      boxShadow: '0 3px 5px 2px rgba(255, 255, 255, .3)',
    },
  };

const Home = (props) =>{
    // const isMobile = window.innerWidth <= 450;
    const { classes, children, className, ...other } = props;
    return (
        <div className="homepage">
            <Container maxWidth="sm">
                <img className="logo" src={ logo } alt="logo"/>
                    <div>
                        <Button className={clsx(classes.root, className)} {...other} size="large" variant="contained" component={Link} to="/businessheroes" >
                            Business Heroes
                        </Button>
                    </div>
                    <div>
                        <Button className={clsx(classes.root, className)} {...other} size="large" variant="contained" component={Link} to="/education" >
                            Educational
                        </Button>
                    </div>
                    <div>
                        <Button className={clsx(classes.root, className)} {...other} size="large" variant="contained" component={Link} to="/cpr" >
                            CPR
                        </Button>
                    </div>
            </Container>
        </div>
        
    );
}

export default withStyles(styles)(Home);