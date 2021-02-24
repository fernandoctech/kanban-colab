import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';

function Routes(props) {
    return(
        <Router>
            <Switch>
                <Route  exact path='/' component={Dashboard}/>
            </Switch>
        </Router>
    )
}
export default Routes;