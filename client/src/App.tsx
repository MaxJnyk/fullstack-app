import { Route, Routes } from "react-router-dom";
import { ConversationChannelPage, ConversationsPage, RegisterPage } from "./pages";
import { LoginPage } from "./pages";
import { AuthenticatedRoute } from './components/AuthenticatedRoute';

export const App = () => {
  return <>
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
  </>
}




