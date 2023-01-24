import { VideoJS } from "../";

const InlineVideo = ( {video, poster} ) => {
  const videoJsOptions = {
    autoplay: false,
    controls: true,
    fluid: true,
    poster: `${poster}`,
    sources: [
      {
        src: video,
        type: "video/mp4",
      },
    ],
  };

  return (
    <div className="my-4">
      <VideoJS video={video} options={videoJsOptions} />
    </div>
  );
};

export default InlineVideo;