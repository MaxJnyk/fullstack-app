import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { getAuthUser } from '../api';

export function useAuth() {
  const [loading, setLoading] = useState(true)
  const { updateAuthUser, user } = useContext(AuthContext)
  const controller = new AbortController()

  useEffect(() => {
    getAuthUser()
      .then(({ data }) => {
        console.log(data)
        updateAuthUser(data)
        setTimeout(() => setLoading(false), 1000)
      })
      .catch((error) => {
        console.log(error)
        setTimeout(() => setLoading(false), 1000)
      })
    return () => {
      controller.abort()
    }
  }, [])
  return { user, loading }
}