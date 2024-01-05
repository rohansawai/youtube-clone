const VideoCard = (props: any) => {
  return (
    <div>
      <img src={props.thumb} className="rounded-3xl" />
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <img className="h-20 w-20 pl-2 pt-2 rounded-full" src={props.logo} />
        </div>
        <div className="col-span-10 pt-2">
          <div className="text-2xl font-black">
          </div>
          <div className="text-lg "></div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;