import {
  useState,
  createContext,
  ReactNode,
  useReducer,
  useEffect,
} from "react";
import { Cycle, cyclesReducer } from "../reducers/cycles/reducer";
import {
  ActionTypes,
  addNewCycleAction,
  markCurrentCycleAsFinishedAction,
  interrupetCurrentCycleAction,
} from "../reducers/cycles/actions";

interface CreateCycleData {
  task: string;
  minutesAmount: number;
}

interface CyclesContextType {
  cycles: Cycle[];
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  markCurrentCycleAsFinished: () => void;
  amountSecondsPassed: number;
  setSecondsPassed: (seconds: number) => void;
  createNewCycle: (data: CreateCycleData) => void;
  interruptCycle: () => void;
}

export const CyclesContext = createContext({} as CyclesContextType);

interface CycleContextProviderProps {
  children: ReactNode;
}

export function CyclesContextProvider({ children }: CycleContextProviderProps) {
  const [cyclesState, dispatch] = useReducer(
    cyclesReducer,
    {
      cycles: [],
      activeCycleId: null,
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        "@timer:cycles-state-1.0.0"
      );
      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }
    }
  );

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState);
    localStorage.setItem("@timer:cycles-state-1.0.0", stateJSON);
  }, [cyclesState]);

  const { cycles, activeCycleId } = cyclesState;

  const activeCycle = cycles.find((cycle: Cycle) => cycle.id === activeCycleId);
  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds);
  }

  function markCurrentCycleAsFinished() {
    dispatch(markCurrentCycleAsFinishedAction());
  }

  function createNewCycle(data: CreateCycleData) {
    const id = String(new Date().getTime());

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };
    dispatch(addNewCycleAction(newCycle));
    //setCycles((state) => [...state, newCycle]);

    setAmountSecondsPassed(0);
  }

  function interruptCycle() {
    dispatch(interrupetCurrentCycleAction());
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        markCurrentCycleAsFinished,
        amountSecondsPassed,
        setSecondsPassed,
        createNewCycle,
        interruptCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  );
}
