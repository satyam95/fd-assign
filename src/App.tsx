import { BrowserRouter, Route, Routes } from "react-router";
import ChatPage from "./pages/ChatPage";
import TimerPage from "./pages/TimerPage";
import ButtonsPage from "./pages/ButtonsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChatPage />} />
        <Route path="/button" element={<ButtonsPage />} />
        <Route path="/timer" element={<TimerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
