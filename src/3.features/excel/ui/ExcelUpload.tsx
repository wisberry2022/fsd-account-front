import { FC } from "react";

type ExcelUploadProps = {
  onClick: () => void;
};

export const ExcelUpload: FC<ExcelUploadProps> = (props) => {
  const { onClick } = props;

  return (
    <button className="basic-btn btn-sky-white" onClick={onClick}>
      업로드
    </button>
  );
};
