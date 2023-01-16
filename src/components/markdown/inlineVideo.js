import { VideoJS } from "../";

const InlineVideo = (props) => {
  const videoJsOptions = {
    autoplay: false,
    controls: true,
    fluid: true,
    responsive: true,
    sources: [
      {
        src: props.video,
        type: "video/mp4",
      },
    ],
  };

  return <VideoJS {...props} options={videoJsOptions} />;
};

export default InlineVideo;