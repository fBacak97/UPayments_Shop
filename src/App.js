import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import { setAvailableCategories } from './actions/categoryActions'
import { getAvailableCategories } from './api/api';

import Navbar from './layout/Navbar'
import Home from './pages/Home'
import NewProduct from './pages/NewProduct'
import ProductDetails from './pages/ProductDetails'

//Set Available Categories,
getAvailableCategories().then(({data: categories}) => {
  store.dispatch(setAvailableCategories(categories))
})

const App = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/create" element={<NewProduct/>}/>
            <Route path='/product/:id' element={<ProductDetails/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
