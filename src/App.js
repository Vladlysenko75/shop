import {Routes, Route} from "react-router-dom";

import {ProductDescription} from './components/ProductDescription/ProductDescription';
import {ProductsList} from './components/ProductList/ProductsList';
import {Home} from './components/Home';
import './App.css';

function App() {

    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Home/>}>
                    <Route index element={<ProductsList/>}/>
                    <Route path={'/:id'} element={<ProductDescription/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
