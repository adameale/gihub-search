import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Alert from "./components/layouts/Alert";
import Footer from "./components/layouts/Footer";
import Navbar from "./components/layouts/Navbar";
import { AlertProvider } from "./context/alert/AlertContext";
import { GithubProvider } from "./context/github/GithubContext";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import User from "./pages/User";

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
    <Router >
   
   <div className=" flex flex-col justify-between full-screen bg-cover background-size:auto bg-slate-600 ">
    <Navbar/>
    <main className="container mx-auto px-3">
      <Alert/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={ <About/>} />
        <Route exact path="/user/:login" element={ <User/>} />
        <Route       path="/notFound" element={ <NotFound/>} />
        <Route path="/*" element={ <NotFound/>} />       
      </Routes>
    </main>
    <Footer />
   </div>
 
    </Router>
    </AlertProvider>
    </GithubProvider>
  );
}

export default App;
