import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./components/Landingpage";
import Navbar from "./components/navbar";
import VideoPlayer from "./components/videoElements/videoPlayer";


function App() {
  return (
    <>
       {/* <h1>hello</h1> */}
       <Navbar/>

       <Router>
        <Routes>
          <Route path="/" element={<Landing/>}></Route>
          <Route path="/videoPlayer" element={<VideoPlayer/>}></Route>
        </Routes>
       </Router>
       {/* <Landing/> */}
    </>
  );
}

export default App;
