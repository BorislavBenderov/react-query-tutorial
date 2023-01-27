import { Route, Routes } from "react-router-dom";
import { TodoList } from "./features/todos/TodoList";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Profile } from "./pages/Profile";
import { Navbar } from "./components/Navbar";
import { SuperHeroes } from "./pages/SuperHeroes";
import { RQSuperHeroes } from "./pages/RQSuperHeroes";
import { SuperHero } from "./components/SuperHero";
import { ParallelQueries } from "./pages/ParallelQueries";
import { DependentQueries } from "./pages/DependentQueries";
import { PaginatedQueries } from "./pages/PaginatedQueries";
import { InfiniteQueries } from "./pages/InfiniteQueries";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/super-heroes" element={<SuperHeroes />} />
        <Route path="/rq-super-heroes" element={<RQSuperHeroes />} />
        <Route path="/super-heroes/:heroId" element={<SuperHero />} />
        <Route path="/parallel" element={<ParallelQueries />} />
        <Route
          path="/dependent"
          element={<DependentQueries email="vishwas@example.com" />}
        />
        <Route path="/paginated" element={<PaginatedQueries />} />
        <Route path="/infinite" element={<InfiniteQueries />} />
        <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
      </Routes>
    </div>
  );
}

export default App;
