import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import store from './store'
import { Provider } from 'react-redux'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Layout from './components/Layout'
import Counter from './features/counter/Counter'
import About from './page/About'
import Hash from './page/Hash'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store} >
        <BrowserRouter>
          <Layout>
            <Routes>
                <Route path="/home" element={<App />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/about" element={<About />} />
                <Route path="/hash" element={<Hash />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </Provider>
  </React.StrictMode>
)
