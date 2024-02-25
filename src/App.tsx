import './App.css'
import { Provider } from 'react-redux'
import { persistedStore, store } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { appRouter } from './pages/router'
import { RouterProvider } from 'react-router-dom'

function App() {

  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistedStore}>
          <RouterProvider router={appRouter} />
        </PersistGate>
      </Provider>
    </>
  )
}

export default App
