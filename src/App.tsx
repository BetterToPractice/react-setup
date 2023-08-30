import React, { StrictMode } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import ServiceWorker from "@customs/provider/ServiceWorker";
import AppRoutes from "./routes/AppRoutes";
import { store, persistor } from "./redux/store";

import "./styles/rootStyles";

function App() {
  return (
    <StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ServiceWorker />
          <AppRoutes />
        </PersistGate>
      </Provider>
    </StrictMode>
  );
}

export default App;
