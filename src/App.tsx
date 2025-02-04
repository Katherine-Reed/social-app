import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Create from "./pages/Create"
import Update from "./pages/Update"

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <img className="logo" src="./assets/radical-logo.svg" alt="The hydroxyl radical symbol. White capital H dash capital O. There are two baby blue dots above the capital O a white dot to the right of the capital O and two baby pink dots below the capital O." />
        <h1>Radical&bull;</h1>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  )
}