import { useRef, useState } from "react";

import Modal from "react-bootstrap/Modal";
import { VideoJS } from "../";

const WorkVideoModal = ({ onHide, show, video, title }) => {
  const [aspectRatio, setAspectRatio] = useState(16/9);

  let style = { "--aspect-ratio": aspectRatio };

  const playerRef = useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    fluid: true,
    // playbackRates: [0.5, 1, 1.5, 2],
    sources: [
      {
        src: video,
        type: "video/mp4",
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // Set aspect ratio automatically based on vertical or horizontal video input:
    player.on("loadedmetadata", () => {
      setAspectRatio(player.videoWidth()/player.videoHeight())
    });

  };

  return (
    <Modal
    onHide={onHide}
    show={show}
    dialogClassName="mx-auto work-video-modal"
    contentClassName="border-0 bg--light"
    aria-label={title}
    centered
    style={style}
  >
    <Modal.Header className="border-0" closeButton></Modal.Header>
    <Modal.Body className="border-0 mt-n4">
      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
    </Modal.Body>
  </Modal>
  );
};

export default WorkVideoModal;
