import React from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { UserClaims } from '@okta/okta-auth-js';
import useAuthUser from '../hook/getUser';
// import { Data } from '../data';

function Home() {
  const { authState } = useOktaAuth();
  const userInfo:UserClaims | null = useAuthUser();
  // let preferred_username;
  // let email;
  let name;
  // let email_verified;
  // let zoneinfo;
  if (userInfo !== null) {
    ({
      // preferred_username,
      // email,
      name,
      // email_verified,
      // zoneinfo,
    } = userInfo);
  }

  return (
    <div>
      {authState?.isAuthenticated ? (
        <>
          <h2>
            Welcome back,
            {' '}
            {name}
          </h2>
          <article>
            {/* {Data.map(
              ({
                id, coverImg, roomNo, occupantName, rentDueDate,
              }) => ( */}
            <div className="card">
              <div>
                UI Display
              </div>
            </div>
            {/* ), */}
            {/* )} */}
          </article>
        </>
      ) : (
        <p style={{ textAlign: 'center', marginTop: '6rem', fontSize: '2rem' }}>
          Please login to see data
        </p>
      )}
    </div>
  );
}

export default Home;
