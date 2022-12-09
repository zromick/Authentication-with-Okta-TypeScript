import React from 'react';
import { Link } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';

function Nav() {
  const { oktaAuth, authState } = useOktaAuth();

  const loggingIn = async () => oktaAuth.signInWithRedirect({ originalUri: '/' });

  const loggingOut = async () => oktaAuth.signOut();

  return (
    <div>
      <Link to="/">
        <h2>Regents Housing</h2>
      </Link>
      <ul>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          {
authState?.isAuthenticated ? (
  <button type="button" onClick={loggingOut}>Logout</button>
) : (
  <button type="button" onClick={loggingIn}>Login</button>
)
}
        </li>
      </ul>
    </div>

  );
}

export default Nav;
