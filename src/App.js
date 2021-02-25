import { Box } from "@material-ui/core";
import Routes from "./routes";
import GlobalStyle from './styles/';
import { DndProvider} from 'react-dnd';
import   {HTML5Backend}  from 'react-dnd-html5-backend'

function App(props) {
  return (
    <DndProvider backend={HTML5Backend}>
      <Box className="App">
        <GlobalStyle/>
        <Routes/>
      </Box>
    </DndProvider>
  );
}

export default App;
