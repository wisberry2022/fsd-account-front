import "./act-reg-branch.css";
import { ImPencil2 } from "react-icons/im";
import { MdSystemUpdateAlt } from "react-icons/md";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { Dialog } from "@/5.shared/ui";
import { FC } from "react";

type AccountRegisterBranchProps = {
  open: boolean;
  onClose: () => void;
};

const AccountRegisterBranch: FC<AccountRegisterBranchProps> = (props) => {
  const { open, onClose } = props;

  return (
    <Dialog open={open} onClose={onClose} width={80}>
      <Dialog.Body>
        <div className="branch-body">
          <div className="branch">
            <figure>
              <ImPencil2 className="title-img" />
            </figure>
            <div className="desc-box">
              <h4>직접입력</h4>
              <p>
                계정과목을 <br />
                직접 등록할 수 있습니다
              </p>
            </div>
          </div>
          <div className="branch">
            <figure>
              <MdSystemUpdateAlt className="title-img" />
            </figure>
            <div className="desc-box">
              <h4>자동등록</h4>
              <p>
                시스템에서 <br />
                미리 등록된 계정과목을 <br />
                일괄적으로 등록합니다.
              </p>
            </div>
          </div>
          <div className="branch">
            <figure>
              <PiMicrosoftExcelLogoFill className="title-img" />
            </figure>
            <div className="desc-box">
              <h4>엑셀등록</h4>
              <p>
                엑셀파일을 업로드하여 <br />
                일괄 등록할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </Dialog.Body>
    </Dialog>
  );
};

export default AccountRegisterBranch;
