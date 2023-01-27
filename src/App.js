import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

function App() {
  const [progress, setProgress] = useState(0);
  const apikey = process.env.REACT_APP_NEWS_API
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <LoadingBar                 // This came from npm package - react-top-loading-bar
          height={3}
          color="#f11946"          // There is a githun repo for this packahe. I came to knoiw abt these properties from there
          progress={progress}
    
          onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={<News setProgress={setProgress} apikey={apikey} key="general" category="general" />}
          ></Route>{" "}
          // Here key is the main attribute. Without key, on clicking any nav
          link, the end point will change. But the corres. component will not
          render. This is because key acts like a unique value that identifies
          each component uniquley. Upon specifiing this only, the corresponding
          component will get rendered. Keep this in mind
          <Route
            exact
            path="/business"
            element={<News setProgress={setProgress} apikey={apikey} key="business" category="business" />}
          ></Route>
          <Route
            exact
            path="/health"
            element={<News setProgress={setProgress} apikey={apikey} key="health" category="health" />}
          ></Route>
          <Route
            exact
            path="/sports"
            element={<News setProgress={setProgress} apikey={apikey} key="sports" category="sports" />}
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={<News setProgress={setProgress} apikey={apikey} key="entertainment" category="entertainment" />}
          ></Route>
          <Route
            exact
            path="/science"
            element={<News setProgress={setProgress} apikey={apikey} key="science" category="science" />}
          ></Route>
          <Route
            exact
            path="/technology"
            element={<News setProgress={setProgress} apikey={apikey} key="technology" category="technology" />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
