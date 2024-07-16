import { CardButton } from "@/5.shared/ui";
import { FC } from "react";
import { ImPencil2 } from "react-icons/im";

type DirectRegisterProps = {
  onClick: () => void;
};

export const DirectRegister: FC<DirectRegisterProps> = (props) => {
  const { onClick } = props;
  return (
    <CardButton
      icon={<ImPencil2 />}
      title="직접입력"
      desc={`계정과목을
    직접 등록할 수 있습니다`}
      onClick={onClick}
    />
  );
};
