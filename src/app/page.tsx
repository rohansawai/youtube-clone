import VideoCard from "@/components/VideoCard";
import thumb from "../../public/thubm.png";
export default function Home() {
  return (
    <div>
      <div className="grid grid-4">
        <VideoCard
          thumb="/thubm.png"
          logo="/logo.png"
          title="Lets Watch how city beats united in this thriller game"
          channel="Premier League"
          views="100k"
          old="2 days ago"
        ></VideoCard>
        <VideoCard
          thumb="/thubm.png"
          logo="/logo.png"
          title="Lets Watch how city beats united in this thriller game"
          channel="Premier League"
          views="100k"
          old="2 days ago"
        ></VideoCard>
        <VideoCard
          thumb="/thubm.png"
          logo="/logo.png"
          title="Lets Watch how city beats united in this thriller game"
          channel="Premier League"
          views="100k"
          old="2 days ago"
        ></VideoCard>
        <VideoCard
          thumb="/thubm.png"
          logo="/logo.png"
          title="Lets Watch how city beats united in this thriller game"
          channel="Premier League"
          views="100k"
          old="2 days ago"
        ></VideoCard>
      </div>
    </div>
  );
}
