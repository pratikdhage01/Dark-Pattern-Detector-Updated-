import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/homepage';
import Header from "./components/header";
import Download from "./pages/download";
import Footer from "./components/footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-800"> {/* Make it a flex container */}
      <BrowserRouter>
        <Header />
        <main className="flex-grow"> {/* Main content area */}
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path="/download" element={<Download />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
