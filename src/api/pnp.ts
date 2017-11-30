import { Web, setup } from 'sp-pnp-js';
import { PnpNode } from 'sp-pnp-node';
import { authConfig } from './../config';

setup({
  sp: {
    headers: {
      Accept: 'application/json;odata=verbose'
    }
  }
});

(new PnpNode(authConfig)).initAmbient().then((settings) => {

  let web = new Web(settings.siteUrl);
  web.select('Title').get().then(res => {
    console.log(`Web title with sp-pnp-node: ${res.Title}`);
  }).catch(console.log);

}).catch(console.log);
