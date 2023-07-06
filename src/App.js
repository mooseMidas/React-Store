// imported all sub components
import Header from "./sub/Header/Header";
import Navbar from "./sub/Navbar/Navbar";
import Landing from "./sub/Landing/Landing";
import Product from "./sub/Product/Product";
import Profile from "./sub/Profile/Profile";
import Policy from "./sub/Policy/Policy";
import Interest from "./sub/Interest/Interest";
import Footer from "./sub/Footer/Footer";
import { Route, Routes } from "react-router-dom";
//below component will be exported to index.js to be rendered in root element
//Styling sheets include App.css and index.css(for global styling)

function App() {
  return (
    <>
      {" "}
      {/* Header and Navbar to show on every page as they are not added to routes */}
      <Header />
      <Navbar />
      <Routes>
        {/* Landing assigned the home page path */}
        <Route path="/" element={<Landing />} />
        <Route path="/product" element={<Product />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/interest" element={<Interest />} />
      </Routes>
      {/* Footer comp added to every page */}
      <Footer />
    </>
  );
}

export default App;

/*
 How to Import Bootstrap in React [The Beginner's Guide], HubSpot Blog, Retrieved on 19 May 2023 from https://blog.hubspot.com/website/react-bootstrap-css
*/
