import VideoCard from "@/components/VideoCard";
import thumb from "../../public/thubm.png";
import VideoGrid from "@/components/VideoGrid";
import Appbar from "@/components/Appbar";
export default function Home() {
  return (
    <div>
      <Appbar></Appbar>
      <VideoGrid></VideoGrid>
      <VideoGrid></VideoGrid>
      <VideoGrid></VideoGrid>
      <VideoGrid></VideoGrid>
    </div>
  );
}
