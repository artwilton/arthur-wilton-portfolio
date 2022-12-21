import { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

// Referenced from https://joelhooks.com/usevideojs-a-react-hooks-for-videojs/

const useVideoJS = (videoJsOptions) => {
  const videoNode = useRef(null);
  const player = useRef(null);

  useEffect(() => {
    player.current = videojs(videoNode.current, videoJsOptions);

    return () => {
      player.current.dispose();
    };
  }, [changedKey]);

  const Video = useCallback(
    ({ children, ...props }) => {
      return (
        <div data-vjs-player key={changedKey}>
          <video ref={videoNode} className="video-js" {...props}>
            {children}
          </video>
        </div>
      );
    },
    [changedKey]
  );
  return { Video, player: player.current };
};

export default useVideoJS;