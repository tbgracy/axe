import { useDispatch, useSelector } from "react-redux";
import type { Dispatch, State } from "./store";

export const useAppDispatch = useDispatch.withTypes<Dispatch>();
export const useAppSelector = useSelector.withTypes<State>();
