import {BrowserRouter,Route,Switch} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Post from "./components/Post";
import Singlepost from "./components/Singlepost";
import Project from "./components/Project";
import Navbar from "./components/Navbar";
// import Network from "./components/Network";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Switch>
            <Route  component={About} path='/about'/>
            <Route  component={Home}  path='/' exact />
            <Route component={Singlepost} path='/post/:slug'/>
            <Route component={Post} path='/post'/> 
            <Route  component={Project} path='/project'/>
           
            {/* <Route component={Network} path="/network" /> */}
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;
