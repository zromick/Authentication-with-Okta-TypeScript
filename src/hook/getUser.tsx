import { useEffect, useState } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { UserClaims } from '@okta/okta-auth-js';

const DefaultUser: UserClaims = {
  auth_time: 0,
  aud: '',
  email: '',
  email_verified: false,
  exp: 0,
  family_name: '',
  given_name: '',
  iat: 0,
  iss: '',
  jti: '',
  locale: '',
  name: '',
  nonce: '',
  preferred_username: '',
  sub: '',
  updated_at: 0,
  ver: 0,
  zoneinfo: '',
};

const useAuthUser = () => {
  const { oktaAuth, authState } = useOktaAuth();
  const [userInfo, setUserInfo] = useState<UserClaims>(DefaultUser);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await oktaAuth.getUser();
        setUserInfo(res);
      } catch (error) {
        // console.log(error);
      }
    };

    if (authState?.isAuthenticated) {
      getUser();
    }
  }, [authState, oktaAuth]);

  return userInfo;
};

export default useAuthUser;
