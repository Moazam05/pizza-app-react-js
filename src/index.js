// ** React Imports
import React, { Suspense, lazy } from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
// ** Redux Imports
import { Provider } from "react-redux"
import { store } from "./redux/store"
// ** Core styles
import "bootstrap/dist/css/bootstrap.css"
import "remixicon/fonts/remixicon.css"
import "./index.scss"
// ** Service Worker
import reportWebVitals from "./reportWebVitals"
// ** Spinner (Splash Screen)
import Spinner from "./shared/spinner/Fallback-spinner"
// ** Lazy load app
const LazyApp = lazy(() => import("./App"))

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Suspense fallback={<Spinner />}>
      <Provider store={store}>
        <BrowserRouter>
          <LazyApp />
        </BrowserRouter>
      </Provider>
    </Suspense>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
