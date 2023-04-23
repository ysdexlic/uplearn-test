export type LaunchResponseType = {
  data: {
    launches: LaunchType[]
  };
  loading: boolean;
  networkStatus: number;
}

export type LaunchType = {
  id: string;
  details: string;
  mission_name: string;
  links: {
    video_link: string;
    article_link: string;
  };
  launch_date_utc: string;
}
