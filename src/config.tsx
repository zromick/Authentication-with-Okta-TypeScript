const OktaBaseURL = 'dev-12345678.okta.com'; // Replace this with your own dev URL
const OktaClientId = '0123456789101112'; // Replace this with your own client ID

const oktaConfig = {
  issuer: `https://${OktaBaseURL}/oauth2/default`,
  clientId: OktaClientId,
  redirectUri: `${window.location.origin}/login/callback`,
  scopes: ['openid', 'profile', 'email'],
  pkce: true,
};

export default oktaConfig;
