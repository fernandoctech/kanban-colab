import { BrowserRouter as Router , Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';
import Login from '../Pages/Login';
import { Autenticado } from '../Pages/Login/auth';

function Routes(props) {

    const PrivateRoute = ({ component: Component, ...rest }) => (
        <Route
          {...rest}
          render={props =>
            (Autenticado() ? (
             <> <Component {...props} /> </>) : (
              <Redirect to={{ pathname: "/login" }} />
            ))
          }
        />
      );
      
      const LogRoute = ({component: Component, ...rest}) =>(
        <Route
        {...rest}
        render={props => (
          Autenticado() !== true ? (<Component {...props} />):
          <Redirect to={{ pathname: "/" }} />
        )
      }
        />
      )
      const RouteBarra  = (props) => (
        <Route
          render = {props =>
            <Redirect to={{pathname:"/login" }}/>
          }
        />
      )
      
    return(
        <Router>
            <Switch>
                <PrivateRoute  exact path='/' component={Dashboard}/>
                <Route   path='/login' component={Login}/>
            </Switch>
        </Router>
    )
}
export default Routes;