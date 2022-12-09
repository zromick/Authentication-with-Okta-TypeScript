import React from 'react';
import { UserClaims } from '@okta/okta-auth-js';
import useAuthUser from '../hook/getUser';

function Profile() {
  const userInfo:UserClaims | null = useAuthUser();
  // eslint-disable-next-line @typescript-eslint/naming-convention
  let preferred_username;
  let email;
  let name;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  let email_verified;
  let zoneinfo;
  if (userInfo !== null) {
    ({
      preferred_username,
      email,
      name,
      email_verified,
      zoneinfo,
    } = userInfo);
  }

  return (
    <div>
      <h2>My Profile Details</h2>
      <section>
        <ul>
          <li>
            Username:
            {preferred_username}
          </li>
          <li>
            Email:
            {email}
          </li>
          <li>
            Full Name:
            {name}
          </li>
          <li>
            Email Verified:
            {email_verified ? 'Yes' : 'No'}
          </li>
          <li>
            Zone:
            {zoneinfo}
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Profile;
