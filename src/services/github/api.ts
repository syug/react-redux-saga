import axios from 'axios';
import { API_CONFIG, getMembersEndpoint, getReposEndpoint } from './constants';

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

export const getGithubMembers = async (organizationName: string) => {
  const api = axios.create(API_CONFIG);
  const endpoint = getMembersEndpoint(organizationName);
  try {
    const response = await api.get<GithubUser[]>(endpoint);
    return response.data;
  } catch (e) {
    throw e;
  }
};

export interface GithubRepo {
  id: 181821063;
  node_id: 'MDEwOlJlcG9zaXRvcnkxODE4MjEwNjM=';
  name: 'rex-grid';
  full_name: 'rakuten-rex/rex-grid';
  private: false;
  owner: {
    login: 'rakuten-rex';
    id: 49702967;
    node_id: 'MDEyOk9yZ2FuaXphdGlvbjQ5NzAyOTY3';
    avatar_url: 'https://avatars0.githubusercontent.com/u/49702967?v=4';
    gravatar_id: '';
    url: 'https://api.github.com/users/rakuten-rex';
    html_url: 'https://github.com/rakuten-rex';
    followers_url: 'https://api.github.com/users/rakuten-rex/followers';
    following_url: 'https://api.github.com/users/rakuten-rex/following{/other_user}';
    gists_url: 'https://api.github.com/users/rakuten-rex/gists{/gist_id}';
    starred_url: 'https://api.github.com/users/rakuten-rex/starred{/owner}{/repo}';
    subscriptions_url: 'https://api.github.com/users/rakuten-rex/subscriptions';
    organizations_url: 'https://api.github.com/users/rakuten-rex/orgs';
    repos_url: 'https://api.github.com/users/rakuten-rex/repos';
    events_url: 'https://api.github.com/users/rakuten-rex/events{/privacy}';
    received_events_url: 'https://api.github.com/users/rakuten-rex/received_events';
    type: 'Organization';
    site_admin: false;
  };
  html_url: 'https://github.com/rakuten-rex/rex-grid';
  description: 'ReX React UI Component: rex-grid';
  fork: false;
  url: 'https://api.github.com/repos/rakuten-rex/rex-grid';
  forks_url: 'https://api.github.com/repos/rakuten-rex/rex-grid/forks';
  keys_url: 'https://api.github.com/repos/rakuten-rex/rex-grid/keys{/key_id}';
  collaborators_url: 'https://api.github.com/repos/rakuten-rex/rex-grid/collaborators{/collaborator}';
  teams_url: 'https://api.github.com/repos/rakuten-rex/rex-grid/teams';
  hooks_url: 'https://api.github.com/repos/rakuten-rex/rex-grid/hooks';
  issue_events_url: 'https://api.github.com/repos/rakuten-rex/rex-grid/issues/events{/number}';
  events_url: 'https://api.github.com/repos/rakuten-rex/rex-grid/events';
  assignees_url: 'https://api.github.com/repos/rakuten-rex/rex-grid/assignees{/user}';
  branches_url: 'https://api.github.com/repos/rakuten-rex/rex-grid/branches{/branch}';
  tags_url: 'https://api.github.com/repos/rakuten-rex/rex-grid/tags';
  blobs_url: 'https://api.github.com/repos/rakuten-rex/rex-grid/git/blobs{/sha}';
  git_tags_url: 'https://api.github.com/repos/rakuten-rex/rex-grid/git/tags{/sha}';
  git_refs_url: 'https://api.github.com/repos/rakuten-rex/rex-grid/git/refs{/sha}';
  trees_url: 'https://api.github.com/repos/rakuten-rex/rex-grid/git/trees{/sha}';
  statuses_url: 'https://api.github.com/repos/rakuten-rex/rex-grid/statuses/{sha}';
  languages_url: 'https://api.github.com/repos/rakuten-rex/rex-grid/languages';
  stargazers_url: 'https://api.github.com/repos/rakuten-rex/rex-grid/stargazers';
  contributors_url: 'https://api.github.com/repos/rakuten-rex/rex-grid/contributors';
  subscribers_url: 'https://api.github.com/repos/rakuten-rex/rex-grid/subscribers';
  subscription_url: 'https://api.github.com/repos/rakuten-rex/rex-grid/subscription';
  commits_url: 'https://api.github.com/repos/rakuten-rex/rex-grid/commits{/sha}';
  git_commits_url: 'https://api.github.com/repos/rakuten-rex/rex-grid/git/commits{/sha}';
  comments_url: 'https://api.github.com/repos/rakuten-rex/rex-grid/comments{/number}';
  issue_comment_url: 'https://api.github.com/repos/rakuten-rex/rex-grid/issues/comments{/number}';
  contents_url: 'https://api.github.com/repos/rakuten-rex/rex-grid/contents/{+path}';
  compare_url: 'https://api.github.com/repos/rakuten-rex/rex-grid/compare/{base}...{head}';
  merges_url: 'https://api.github.com/repos/rakuten-rex/rex-grid/merges';
  archive_url: 'https://api.github.com/repos/rakuten-rex/rex-grid/{archive_format}{/ref}';
  downloads_url: 'https://api.github.com/repos/rakuten-rex/rex-grid/downloads';
  issues_url: 'https://api.github.com/repos/rakuten-rex/rex-grid/issues{/number}';
  pulls_url: 'https://api.github.com/repos/rakuten-rex/rex-grid/pulls{/number}';
  milestones_url: 'https://api.github.com/repos/rakuten-rex/rex-grid/milestones{/number}';
  notifications_url: 'https://api.github.com/repos/rakuten-rex/rex-grid/notifications{?since,all,participating}';
  labels_url: 'https://api.github.com/repos/rakuten-rex/rex-grid/labels{/name}';
  releases_url: 'https://api.github.com/repos/rakuten-rex/rex-grid/releases{/id}';
  deployments_url: 'https://api.github.com/repos/rakuten-rex/rex-grid/deployments';
  created_at: '2019-04-17T05:09:32Z';
  updated_at: '2019-07-26T07:56:27Z';
  pushed_at: '2019-07-26T07:56:51Z';
  git_url: 'git://github.com/rakuten-rex/rex-grid.git';
  ssh_url: 'git@github.com:rakuten-rex/rex-grid.git';
  clone_url: 'https://github.com/rakuten-rex/rex-grid.git';
  svn_url: 'https://github.com/rakuten-rex/rex-grid';
  homepage: 'https://rakuten-rex.github.io/rex-grid/';
  size: 3186;
  stargazers_count: 0;
  watchers_count: 0;
  language: 'JavaScript';
  has_issues: true;
  has_projects: true;
  has_downloads: true;
  has_wiki: true;
  has_pages: true;
  forks_count: 0;
  mirror_url: null;
  archived: false;
  disabled: false;
  open_issues_count: 0;
  license: {
    key: 'mit';
    name: 'MIT License';
    spdx_id: 'MIT';
    url: 'https://api.github.com/licenses/mit';
    node_id: 'MDc6TGljZW5zZTEz';
  };
  forks: 0;
  open_issues: 0;
  watchers: 0;
  default_branch: 'master';
  permissions: {
    admin: false;
    push: false;
    pull: true;
  };
}

export const getGithubRepos = async (organizationName: string) => {
  const api = axios.create(API_CONFIG);
  const endpoint = getReposEndpoint(organizationName);
  try {
    const response = await api.get<GithubRepo[]>(endpoint);
    return response.data;
  } catch (e) {
    throw e;
  }
};
