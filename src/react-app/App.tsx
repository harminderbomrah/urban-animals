// src/App.tsx


import "./App.css";
import Header from "./Header";
import Gallery from "./Gallery";
import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="content">
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;
