import { createContext } from "react";
import { User } from "../../types";
type Context = { users: User[]; setUsers?: (users: User[]) => void };
export const SearchContext = createContext<Context>({ users: [] });
