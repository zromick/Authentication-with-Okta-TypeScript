import React, { useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { toRelativeUrl } from '@okta/okta-auth-js';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

const RequiredAuth = function RenderRequiredAuth() {
  const { oktaAuth, authState } = useOktaAuth();
  const match = useRouteMatch();

  useEffect(() => {
    if (!authState) {
      return;
    }

    if (!authState?.isAuthenticated) {
      const originalUri = toRelativeUrl(window.location.href, window.location.origin);
      oktaAuth.setOriginalUri(originalUri);
      oktaAuth.signInWithRedirect();
    }
  }, [oktaAuth, authState?.isAuthenticated, authState]);

  if (!authState || !authState?.isAuthenticated) {
    return (<div>loading</div>);
  }

  return (
    <div>
      <Switch>
        {/* match.path returns the path specified in parent route */}
        <Route path={`${match.path}`} />
      </Switch>

    </div>
  );
};

export default RequiredAuth;

// function Product() {
//   let match = useRouteMatch();
//   return (
//       <div>
//           <Switch>
//               {/* match.path returns the path specified in parent route. In this case it is "/product" */}
//               <Route path={`${match.path}`}>
//                   <AllProducts />
//               </Route>
//               {/* And in this case it is /product/:id */}
//               <Route path={`${match.path}/:id`}>
//                   <ProductDetail />
//               </Route>
//           </Switch>

//       </div>
//   );
// }
