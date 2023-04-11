import Tasks from "./page/Tasks";
import Header from "./component/ui/Header";
import './App.css'
import {Provider} from "react-redux";
import store from "./features/store";

function App() {
  return (
    <Provider store={store}>
        <Header />
        <Tasks />
    </Provider>
  )
}

export default App
