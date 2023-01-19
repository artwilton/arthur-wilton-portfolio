import { VideoJS } from "../";

const InlineVideo = ( {video, caption} ) => {
  const videoJsOptions = {
    autoplay: false,
    controls: true,
    fluid: true,
    responsive: true,
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
      <p className="markdown__caption">{caption}</p>
    </div>
  );
};

export default InlineVideo;