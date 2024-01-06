import VideoCard from "./VideoCard";
const videos = [
  {
    thumb: "/thubm.png",
    logo: "/logo.png",
    title: "Lets Watch how city beats united in this thriller game",
    channel: "Premier League",
    views: "100k",
    old: "2 days ago",
  },
  {
    thumb: "/thubm.png",
    logo: "/logo.png",
    title: "Lets Watch how city beats united in this thriller game",
    channel: "Premier League",
    views: "100k",
    old: "2 days ago",
  },
  {
    thumb: "/thubm.png",
    logo: "/logo.png",
    title: "Lets Watch how city beats united in this thriller game",
    channel: "Premier League",
    views: "100k",
    old: "2 days ago",
  },
  {
    thumb: "/thubm.png",
    logo: "/logo.png",
    title: "Lets Watch how city beats united in this thriller game",
    channel: "Premier League",
    views: "100k",
    old: "2 days ago",
  },
];
const VideoGrid = () => {
  return (
    <div className="grid grid-cols-4">
      {videos.map((video) => (
        <div>
          <VideoCard
            thumb={video.thumb}
            logo={video.logo}
            title={video.title}
            channel={video.channel}
            views={video.views}
            old={video.old}
          ></VideoCard>
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;
