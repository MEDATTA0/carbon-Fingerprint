import React from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Weather from "../components/Weather";

const Home = () => {
  return (
    <div>
      <Layout />
      <h1>Home, hi everyone</h1>

      {/* City input field */}
      <Weather />
      <Footer />
    </div>
  );
};

export default Home;
