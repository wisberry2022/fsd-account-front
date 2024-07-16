import { CardButton } from "@/5.shared/ui";
import { FC } from "react";
import { MdSystemUpdateAlt } from "react-icons/md";

type AutoRegisterProps = {
  onClick: () => void;
};

export const AutoRegister: FC<AutoRegisterProps> = (props) => {
  const { onClick } = props;

  return (
    <CardButton
      icon={<MdSystemUpdateAlt />}
      title="자동등록"
      desc={`시스템에서 
                미리 등록된 계정과목을
                일괄적으로 등록합니다.`}
      onClick={onClick}
    />
  );
};
