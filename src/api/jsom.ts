import { JsomNode } from 'sp-jsom-node';
import { authConfig } from './../config';

(new JsomNode(authConfig)).wizard().then((settings) => {

  let ctx = SP.ClientContext.get_current();
  let web = ctx.get_web();
  ctx.load(web);

  ctx.executeQueryAsync(() => {
    console.log(`Web title with sp-jsom-node: ${web.get_title()}`);
  }, console.log);

  // See more examples https://github.com/koltyakov/sp-jsom-node && https://msdn.microsoft.com/en-us/library/office/jj193034.aspx?f=255&MSPPError=-2147217396

}).catch(console.log);
