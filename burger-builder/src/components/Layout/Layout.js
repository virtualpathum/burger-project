import React ,{Component} from 'react';
import Aux from '../../hoc/Aux'
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer'

class Layout extends Component{
    state = {
        showSideDrawer:true
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer:false})
    }

    sideDrawerToggleHandler = () =>{
        //instead of accessing the state using this. we use prevState to get the current state
        this.setState((prevState => {
            return  {showSideDrawer:!prevState.showSideDrawer}
        })); 
    }

    render(){
        return( 
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <Sidedrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
} 

export default Layout;