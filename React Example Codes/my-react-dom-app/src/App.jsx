import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Timer from './ReactHooks/useEffectsExample';
import CountViewer from './ReactHooks/UseReducerHookExample'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    // <Router>
    //   <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
    //     <div className="container">
    //       <Link className="navbar-brand" to="/">
    //         MyApp
    //       </Link>
    //       <button
    //         className="navbar-toggler"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarNav"
    //       >
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //       <div className="collapse navbar-collapse" id="navbarNav">
    //         <ul className="navbar-nav">
    //           <li className="nav-item">
    //             <Link className="nav-link" to="/">
    //               Home
    //             </Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link className="nav-link" to="/about">
    //               About
    //             </Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link className="nav-link" to="/products">
    //               Products
    //             </Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link className="nav-link" to="/contact">
    //               Contact
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>

    //   <div className="container">
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/products" element={<Products />} />
    //       <Route path="/contact" element={<Contact />} />
    //       <Route path="*" element={<NotFound />} />
    //     </Routes>
    //   </div>
    // </Router>
    <CountViewer />
  );
}

export default App;
