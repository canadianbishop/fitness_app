
import { createContext } from "react";

const userDets = window.localStorage.getItem('userDets')

const parsedUser = userDets ? JSON.parse(userDets) : null

export const UserContext = createContext(parsedUser)
