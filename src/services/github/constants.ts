export const API_CONFIG = {
  baseURL: 'https://api.github.com',
  timeout: 2000,
};

export const getMembersEndpoint = (organizationName: string): string =>
  `/orgs/${organizationName}/members`;
