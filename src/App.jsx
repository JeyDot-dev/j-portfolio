import { React } from "react";
import "./App.css";
import { Button } from "@chakra-ui/react";
import { Provider } from "./components/ui/provider";
import { mortuum } from "./themes/mortuum";
import { glaucous } from "./themes/glaucous";
import { useArray } from "./components/hooks/useArray";
import { PlayGround } from "./components/ui/playGround";

const themes = [glaucous, mortuum];

function App() {
  const [theme, chooseTheme] = useArray(themes);
  return (
    <Provider theme={theme}>
      <Button
        onClick={() => {
          chooseTheme({ type: "next" });
        }}
      >
        Next Theme
      </Button>
      <PlayGround />
    </Provider>
  );
}

export default App;
