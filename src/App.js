import { Amplify } from 'aws-amplify';
import { CookieStorage } from 'aws-amplify/utils';
import { cognitoUserPoolsTokenProvider } from 'aws-amplify/auth/cognito';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json';
//Amplify.configure(config);

Amplify.configure({...config,
  Auth: {
          cookieStorage: {
    // - Cookie domain (only required if cookieStorage is provided)
    domain: '*.meghasv.in',
    // (optional) - Cookie path
    path: '/',
    // (optional) - Cookie expiration in days
    expires: 365,
    // (optional) - See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
    sameSite: 'lax',
    secure: true
    // (optional) - Cookie secure flag
    // Either true or false, indicating if the cookie transmission requires a secure protocol (https).
  },
}
})

cognitoUserPoolsTokenProvider.setKeyValueStorage(new CookieStorage());

function App({ signOut, user }) {
  return (
    <>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(App);
