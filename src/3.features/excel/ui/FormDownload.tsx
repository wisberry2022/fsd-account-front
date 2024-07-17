import { FC } from "react";

type FormDownloadProps = {
  onClick: () => void;
};

export const FormDownload: FC<FormDownloadProps> = (props) => {
  const { onClick } = props;

  return (
    <button id="form-download" className="basic-btn" onClick={onClick}>
      양식 다운로드
    </button>
  );
};
