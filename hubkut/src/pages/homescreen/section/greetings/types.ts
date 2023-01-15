export interface IGreetings {
  toRepo: string;
  toStarred: string;
  toFollowing: string;
  toFollowers: string;
  name: string; 
  repoNum?: number;
  starredNum?: number;
  followersNum: number;
  followingNum?: number;
  resume: string;
}