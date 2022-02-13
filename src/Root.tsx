import { AnimatePresence, motion } from "framer-motion";
import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useState,
} from "react";
import App from "./App";
import { Detail } from "./Detail";
import { MouseCatch } from "./MouseCatch";

interface AppContext {
  selected?: string;
  setSelected: Dispatch<SetStateAction<string | undefined>>;
}

const AppContenxt = createContext<AppContext | null>(null);

export const useAppContext = () => {
  const context = useContext(AppContenxt);

  if (!context) {
    throw new Error("Ooops");
  }

  return context;
};

const AppContextProvider: FC = ({ children }) => {
  const [selected, setSelected] = useState<string | undefined>();

  return (
    <AppContenxt.Provider value={{ selected, setSelected }}>
      {children}
    </AppContenxt.Provider>
  );
};

export const Router = () => {
  const { selected } = useAppContext();

  return (
    <AnimatePresence exitBeforeEnter>
      {!selected && <App key="app" />}
      {selected && (
        <motion.div
          key="detail"
          style={{ width: "100%", height: "100%" }}
          initial={{ opacity: 0, transform: "scale(2)" }}
          animate={{ opacity: 1, transform: "scale(1)" }}
          exit={{ opacity: 0, transform: "scale(2)" }}
          transition={{ bounce: 0 }}
        >
          <Detail />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const Root = () => {
  return (
    <AppContextProvider>
      <MouseCatch />
      <Router />
    </AppContextProvider>
  );
};
