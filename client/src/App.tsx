import { Route, Routes } from "react-router-dom";
import { ConversationChannelPage, ConversationsPage, RegisterPage } from "./pages";
import { LoginPage } from "./pages";
import { AuthenticatedRoute } from './components/AuthenticatedRoute';
import { AuthContext } from './utils/context/AuthContext';
import { useState } from 'react';
import { User } from './utils/types';

export const App = () => {
  const [user, setUser] = useState<User>()

  return <AuthContext.Provider value={{ user, updateAuthUser: setUser }}>
    <Routes>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route
        path='conversations'
        element={
          <AuthenticatedRoute>
            <ConversationsPage/>
          </AuthenticatedRoute>

        }
      >
        <Route path=':id' element={<ConversationChannelPage/>}/>
      </Route>
    </Routes>
  </AuthContext.Provider>
}




