// export const oktaConfig = {
// issuer: `https://${process.env.REACT_APP_OKTA_BASE}/oauth2/default`,
// clientId: process.env.REACT_APP_OKTA_CLIENT,
// redirectUri: `${window.location.origin}/login/callback`,
// scopes: ["openid", "profile", "email"],
// pkce: true,
// };

const oktaConfig = {
  issuer: 'https://dev-27102111.okta.com/oauth2/default',
  clientId: '0oa7cjnpecd0YOvnG5d7',
  redirectUri: `${window.location.origin}/login/callback`,
  scopes: ['openid', 'profile', 'email'],
  pkce: true,
};

export default oktaConfig;
