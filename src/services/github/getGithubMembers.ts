import axios from 'axios';
import { API_CONFIG, getMembersEndpoint } from './constants';

export interface GithubUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

const getGithubMembers = async (organizationName: string) => {
  const api = axios.create(API_CONFIG);
  const endpoint = getMembersEndpoint(organizationName);
  try {
    const response = await api.get<GithubUser[]>(endpoint);
    console.log('response', response);
    console.log('response.data', response.data);
    return response.data;
  } catch (e) {
    throw e;
  }
};

export default getGithubMembers;
