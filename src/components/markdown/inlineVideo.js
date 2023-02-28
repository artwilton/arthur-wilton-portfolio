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
    <div className="markdown__inline-video-wrapper my-4">
      <VideoJS options={videoJsOptions} />
    </div>
  );
};

export default InlineVideo;