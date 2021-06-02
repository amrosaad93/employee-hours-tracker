import "./App.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Header from "./components/Header";
import Body from "./components/Body";

import { deepPurple } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    secondary: deepPurple,
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Body />
      </div>
    </ThemeProvider>
  );
}

export default App;
