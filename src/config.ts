import { AuthConfig, IAuthConfigSettings } from 'node-sp-auth-config';

export const authConfig: IAuthConfigSettings = {
  configPath: './config/private.json',
  encryptPassword: true,
  saveConfigOnDisk: true
};

export const auth = new AuthConfig(authConfig);
