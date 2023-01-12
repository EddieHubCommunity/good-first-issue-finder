/// <reference types="@sveltejs/kit" />

export declare type Owner = {
  avatarUrl: string;
  login: string;
};

export declare type Repository = {
  name: string;
  url: string;
  owner: Owner;
  primaryLanguage: PrimaryLanguage;
  codeOfConduct: CodeOfConduct;
  licenseInfo: LicenseInfo;
};

export declare type CodeOfConduct = {
  name: string;
};

export declare type LicenseInfo = {
  name: string;
};

export declare type Node = {
  createdAt: string;
  url: string;
  title: string;
  labels: LabelResponse;
  repository: Repository;
};

export declare type Edge = {
  node: Node;
};

export declare type pageInfo = {
  hasNextPage: boolean;
  endCursor: string;
};

export declare type SearchResponse = {
  labels: string[];
  issueCount: number;
  pageInfo: pageInfo;
  edges: Edge[];
};

export declare type LabelResponse = {
  edges: LabelEdge[];
};

export declare type LabelEdge = {
  node: LabelNode;
};

export declare type LabelNode = {
  color: string;
  name: string;
};

export declare type PrimaryLanguage = {
  color: string;
  name: string;
  id: string;
};

export declare type GithubUser = {
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
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  hireable: boolean;
  bio: string;
  twitter_username: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
  private_gists: number;
  total_private_repos: number;
  owned_private_repos: number;
  disk_usage: number;
  collaborators: number;
  two_factor_authentication: boolean;
  plan: {
    name: string;
    space: number;
    private_repos: number;
    collaborators: number;
  };
};
