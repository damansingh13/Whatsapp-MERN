import { GoogleOAuthProvider } from '@react-oauth/google';
//components
import Messenger from "./components/Messenger";
import AccountProvider from "./context/AccountProvider";

function App() {

  const clientId = '413094348937-4s6uh2fv58nqbjctckjva8dm8jg35sco.apps.googleusercontent.com';
  
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
      <Messenger />
      </AccountProvider>
      
    </GoogleOAuthProvider>
  );
}

export default App;
