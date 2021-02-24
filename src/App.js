import { Box } from "@material-ui/core";
import Routes from "./routes";
import GlobalStyle from './styles/';

function App(props) {
  return (
    <Box className="App">
      <GlobalStyle/>
      <Routes/>
    </Box>
  );
}

export default App;
