import { GoogleOAuthProvider } from '@react-oauth/google';
//components
import Messenger from "./components/Messenger";

function App() {

  const clientId = '413094348937-4s6uh2fv58nqbjctckjva8dm8jg35sco.apps.googleusercontent.com';
  
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Messenger />
    </GoogleOAuthProvider>
  );
}

export default App;
