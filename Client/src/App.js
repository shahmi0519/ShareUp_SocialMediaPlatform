import "./App.css"
import Home from "./pages/Home";
import Profile from "./pages/Profile.jsx"; 
import Auth from "./pages/Auth.jsx"
import ProfileModal from "./components/ProfileModal/ProfileModal.jsx";
import ShareModal from "./components/ShareModal/ShareModal.jsx";

function App() {
  return (
    <div className="App">
       <div className="blur" style={{top:'-18%' , right:'0'}}></div>
       <div className="blur" style={{top:'36%' , left:'-8rem'}}></div>
       {/* <Home/> */}
       <Profile/>
       {/* <Auth/> */}
    </div>
  );
}

export default App;
