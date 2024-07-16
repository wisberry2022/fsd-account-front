import { CardButton } from "@/5.shared/ui";
import { FC } from "react";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";

type ExcelRegisterProps = {
  onClick: () => void;
};

export const ExcelRegister: FC<ExcelRegisterProps> = (props) => {
  const { onClick } = props;
  return (
    <CardButton
      icon={<PiMicrosoftExcelLogoFill />}
      title="엑셀등록"
      desc={`엑셀파일을 업로드하여
 일괄 등록할 수 있습니다.`}
      onClick={onClick}
    />
  );
  //   <div className="branch">
  //   <figure>
  //     <PiMicrosoftExcelLogoFill className="title-img" />
  //   </figure>
  //   <div className="desc-box">
  //     <h4>엑셀등록</h4>
  //     <p>
  //       엑셀파일을 업로드하여 <br />
  //       일괄 등록할 수 있습니다.
  //     </p>
  //   </div>
  // </div>
};
