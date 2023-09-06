import logo from './logo.svg';
import './App.css';
import OrderPage from "./order-paper/containers/OrderPage";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <OrderPage/>
            </header>
        </div>
    );
}

export default App;
