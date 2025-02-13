const oktaBaseURL = 'dev-12345678.okta.com'; // Replace this with your own dev URL
const oktaClientId = '0123456789101112'; // Replace this with your own client ID

const oktaConfig = {
  issuer: `https://${oktaBaseURL}/oauth2/default`,
  clientId: oktaClientId,
  redirectUri: `${window.location.origin}/login/callback`,
  scopes: ['openid', 'profile', 'email'],
  pkce: true,
};

export default oktaConfig;
