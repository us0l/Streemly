import { Navigate } from 'react-router-dom'
import PocketBase from 'pocketbase';

function Auth({ children }) {
    const pb = new PocketBase(import.meta.env.VITE_PB_URL);
  if (!pb.authStore.isValid) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default Auth
