import { AuthProvider } from "../contexts/auth/authProvider"
import '../styles/globals.css';
import AppLayout from "../containers/layout/AppLayout";

import "bootstrap-scss";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </AuthProvider>
  )
}

export default MyApp
