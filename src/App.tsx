import React, { StrictMode } from "react";
import AppRoutes from "./routes/AppRoutes";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";

import "./styles/rootStyles";

function App() {
  return (
    <StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ToastContainer />
          <AppRoutes />
        </PersistGate>
      </Provider>
    </StrictMode>
  );
}

export default App;
