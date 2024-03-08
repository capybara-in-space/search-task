import { useState } from "react";
import { SearchForm } from "./components/SearchFrom/SearchForm";
import { SearchContext } from "./components/SearchResults/SearchContext";
import { SearchResults } from "./components/SearchResults/SearchResults";
import { User } from "./types";

export default function App() {
  const [users, setUsers] = useState<User[]>([]);

  return (
    <SearchContext.Provider value={{ users, setUsers }}>
      <SearchForm />
      <SearchResults />
    </SearchContext.Provider>
  );
}
