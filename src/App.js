import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Footer from "./components/footer/Footer"
import MovieDetail from "./components/movieDetail/MovieDetail"
import PageNotFound from "./components/pageNotFound/PageNotFound"
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/movies/:id">
            <MovieDetail />
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
