import { FC, PropsWithChildren, useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { User } from '../utils/types';
import { getAuthUser } from '../utils/api';

function useAuth() {
  const [user, setUser] = useState<User | undefined>()
  const [loading, setLoading] = useState(true)
  const controller = new AbortController()

  useEffect(() => {
    getAuthUser()
      .then(({ data }) => {
        console.log(data)
        setUser(data)
        setTimeout(() => setLoading(false), 2000)
      })
      .catch((error) => {
        console.log(error)
        setTimeout(() => setLoading(false), 2000)
      })
    return () => {
      controller.abort()
    }
  }, [])
  return { user, loading }
}

export const AuthenticatedRoute: FC<PropsWithChildren> = ({ children }) => {
  const location = useLocation()
  const { user, loading } = useAuth()

  if (loading) {
    return <div>Loading...</div>
  }
  if (user) return <>{children}</>
  return <Navigate to='/login' state={{ from: location }} replace/>

}