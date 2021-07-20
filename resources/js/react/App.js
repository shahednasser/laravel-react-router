import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Team from "./pages/Team"

function App () {
  return (
    <Router>
      <Navbar />
      <div className="container mt-3">
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/team" component={Team} />
          <Route path="/" exact component={Home} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}
  
export default App