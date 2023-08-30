import React, { StrictMode } from "react";
import AppRoutes from "./routes/AppRoutes";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

import "./styles/rootStyles";

function App() {
  return (
    <StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppRoutes />
        </PersistGate>
      </Provider>
    </StrictMode>
  );
}

export default App;
