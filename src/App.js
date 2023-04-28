import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/layouts/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router >
   
   <div className=" flex flex-col justify-between h-screen bg-gray-500 ">
    <Navbar/>
    <main className="container mx-auto px-3">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={ <About/>} />
        <Route path="/notFound" element={ <NotFound/>} />
        <Route path="/*" element={ <NotFound/>} />       
      </Routes>
    </main>
    <Footer />
   </div>
 
    </Router>
  );
}

export default App;
