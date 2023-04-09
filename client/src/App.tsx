import React, { FC, PropsWithChildren, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthenticatedRoute } from "./components/AuthenticatedRoute";
import {
  ConversationChannelPage,
  ConversationPage,
  LoginPage,
  RegisterPage,
} from "./pages";
import { AuthContext, SocketContext, socket } from "./utils/context";
import { User } from "./utils/types";
import { Socket } from "socket.io-client";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";

type Props = {
  user?: User;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  socket: Socket;
};

function AppWithProvider({
  children,
  user,
  setUser,
}: PropsWithChildren & Props) {
  return (
    <ReduxProvider store={store}>
      <AuthContext.Provider value={{ user, updateAuthUser: setUser }}>
        <SocketContext.Provider value={socket}>
          {children}
        </SocketContext.Provider>
      </AuthContext.Provider>
    </ReduxProvider>
  );
}

function App() {
  const [user, setUser] = useState<User>();
  return (
    <AppWithProvider setUser={setUser} user={user} socket={socket}>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="conversations"
          element={
            <AuthenticatedRoute>
              <ConversationPage />
            </AuthenticatedRoute>
          }
        >
          <Route path=":id" element={<ConversationChannelPage />} />
        </Route>
      </Routes>
    </AppWithProvider>
  );
}

export default App;
