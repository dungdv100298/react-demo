/* eslint-disable jsx-a11y/iframe-has-title */
import { Modal } from "antd";

export interface IModalProps {
  openModal: any;
  onHandleCancel(value: Boolean): void;
}

const VideoModal = (props: IModalProps) => {
  const { openModal } = props;

  const handleCancel = (): void => {
    const ele = document.getElementsByClassName(
      "yvideo",
    )[0] as HTMLIFrameElement;
    if (ele.contentWindow) {
      ele.contentWindow.postMessage(
        '{"event":"command","func":"' + "pauseVideo" + '","args":""}',
        "*",
      );
    }
    props.onHandleCancel(false);
  };

  return (
    <Modal
      title="Basic Modal"
      open={openModal}
      onCancel={handleCancel}
      closable={false}
      centered
      footer={null}
      maskClosable={true}
      width={900}
    >
      <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full">
        <div className="bg-[#000000] rounded-[8px] w-[900px] h-[200px] md:h-[500px]">
          <iframe
            src="https://www.youtube.com/embed/JEk14koP-KY?enablejsapi=1&version=3&playerapiid=ytplayer"
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
            className="w-full h-full yvideo"
          ></iframe>
        </div>
      </div>
    </Modal>
  );
};

export default VideoModal;
