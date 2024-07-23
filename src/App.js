import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json';
//Amplify.configure(config);

Amplify.configure({...config,
  Auth: {
          cookieStorage: {
    // - Cookie domain (only required if cookieStorage is provided)
    domain: '.meghasv.in',
    // (optional) - Cookie path
    path: '/',
    // (optional) - Cookie expiration in days
    expires: 30,
    // (optional) - See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
    // sameSite: 'strict' | 'lax',
    // (optional) - Cookie secure flag
    // Either true or false, indicating if the cookie transmission requires a secure protocol (https).
    secure: true
  },
}
})

function App({ signOut, user }) {
  return (
    <>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(App);
