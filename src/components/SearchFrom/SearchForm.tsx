import { FormEvent, useContext, useEffect, useState } from "react";
import { useDebounce } from "../../hooks/debounce";
import { useGetUsers } from "../../hooks/users";
import { SearchContext } from "../SearchResults/SearchContext";
import "./styles.css";

export function SearchForm() {
  const [query, setQuery] = useState("");
  const debounced = useDebounce(query, 300);
  const { setUsers } = useContext(SearchContext);
  const { data, isSuccess } = useGetUsers(debounced);

  const handleInputChange = (event: FormEvent) => {
    const target = event.target as HTMLInputElement;
    setQuery(target.value);
  };

  useEffect(() => {
    // setUsers && ... - нужно только для того, чтобы удовлетворить ts, setUsers всегда будет валидной функцией
    setUsers && setUsers(data ?? []);
  }, [data, isSuccess, setUsers]);

  return (
    <div className="searchForm">
      <form>
        <input type="text" onChange={handleInputChange} value={query} />
      </form>
    </div>
  );
}
