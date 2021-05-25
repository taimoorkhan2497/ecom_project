import React from 'react';



// signup pages
// import SignupPage from './pages/signin/SignupPage'
// import SignIn from './pages/signin/SignIn'
// import VerifyEmail from './pages/signin/VerifyEmail' 
// signup pages


// Not Found
import NotFound from "./pages/NotFound/NotFount";
// Not Found
import Authenticated from './pages/Authenticated'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
return (
<>
<Router>
<Switch>

<Route exact path="/">
<Authenticated>
<Accounttype/>
</Authenticated> 
</Route>
 {/*  
<Route exact path="/login" >
<Authenticated nonAuthenticated={true}>
<SignIn/>
</Authenticated>
</Route>
<Route path='/signup' exact component={SignupPage}/>

<Route path='/verify-user/:user_id?' exact component={VerifyEmail}/>*/}
<Route component={NotFound} />

</Switch>
</Router>
</>
);
}

export default App;

