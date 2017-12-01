# Node.js SharePoint Examples

Example shows the setup of a project for using SharePoint technologies in Node.js application (on the server, not the browser).
Setup includes:
- TypeScript configuration
- TSLint configuration
- VSCore TypeScript debug parameters
- Technologies:
  - [PnP JS Core](https://github.com/SharePoint/PnP-JS-Core) in Node.js context
  - JSOM (JavaScript Object Model) for Node.js
  - Raw REST with [sp-request](https://github.com/s-kainet/sp-request)
  - Authentication with [node-sp-auth](https://github.com/s-kainet/node-sp-auth) and [node-sp-auth-config](https://github.com/koltyakov/node-sp-auth-config)
    - SharePoint 2013, 2016:
      - Addin only permissions
      - User credentials through the http ntlm handshake
      - Form-based authentication (FBA)
      - Forefront TMG authentication
    - SharePoint Online:
      - Addin only permissions
      - SAML based with user credentials
      - ADFS user credentials (works with both SharePoint on-premise and Online)
    - On demand authentication. Uses interactive browser session for asking credentials. Supports third-party authentication providers for SharePoint Online and SharePoint on-premise.

## Clone the repo

```bash
git clone https://github.com/koltyakov/node-sharepoint-examples && cd node-sharepoint-examples
```

## Restore dependencies

```bash
npm install
```

## Examples

### Run with typescript

#### sp-request

```bash
npm run ts:run:request
```

#### sp-pnp-node

```bash
npm run ts:run:pnp
```

#### sp-jsom-node

```bash
npm run ts:run:jsom
```

## Build

### Linting

```bash
npm run tslint
```

### Transpile

```bash
npm run build
```

### Debug

In VS Code, open a .ts to debug, place brake point and hit `F5`.