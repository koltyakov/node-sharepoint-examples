import * as sprequest from 'sp-request';
import { auth } from './../config';

auth.getContext().then(context => {

  const spr = sprequest.create(context.authOptions);
  spr.get(`${context.siteUrl}/_api/web?$select=Title`)
    .then(response => {
      console.log(`Web title with sp-request: ${response.body.d.Title}`);
    })
    .catch(console.log);

}).catch(console.log);
