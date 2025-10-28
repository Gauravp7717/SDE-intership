import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./applayout/Applayout";

export default function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        {/* All app routes go inside AppLayout */}
        <Route path="/*" element={<AppLayout />} />
      </Routes>
    </BrowserRouter>
  );
}
