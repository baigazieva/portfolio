import {BrowserRouter,Route,Switch} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Post from "./components/Post";
import Project from "./components/Project";
// import Singlepost from "./components/Singlepost";
import Navbar from "./components/Navbar";
// import Network from "./components/Network";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Switch>
            <Route  component={Home}  path='/' exact />
            <Route  component={About} path='/about'/>
            {/* <Route  component={Singlepost} path='/post/:slug'/> */}
             <Route component={Post} path='/post'/> 
            <Route  component={Project} path='/project'/>
            
            {/* <Route component={Network} path="/network" /> */}
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;
