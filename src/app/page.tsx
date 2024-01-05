import VideoCard from "@/components/VideoCard";
import thumb from "../../public/thubm.png";
export default function Home() {
  return (
    <div>
      <VideoCard thumb="/thubm.png" logo="/logo.png" title="Lets Watch how city beats united in this thriller game" channel="Premier League"></VideoCard>
      <VideoCard></VideoCard>
      <VideoCard></VideoCard>
      <VideoCard></VideoCard>
      
    </div>
  );
}
