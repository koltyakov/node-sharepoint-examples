import { JsomNode } from 'sp-jsom-node';
import { authConfig } from './../config';

(new JsomNode(authConfig)).wizard().then((settings) => {

  let ctx = SP.ClientContext.get_current();
  let web = ctx.get_web();
  ctx.load(web);

  ctx.executeQueryAsync(() => {
    console.log(`Web title with sp-jsom-node: ${web.get_title()}`);
  }, console.log);

}).catch(console.log);
