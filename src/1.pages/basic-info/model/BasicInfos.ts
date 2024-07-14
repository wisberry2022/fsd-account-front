import { BasicInfo } from "@/5.shared/types";

type BasicInfoType = {
  id: number;
  name: string;
  desc: string;
  type: BasicInfo;
};

const BasicInfos: Array<BasicInfoType> = [
  {
    id: 1,
    name: "거래처",
    desc: `자주 거래하는 기업/매장을 등록할 수 있습니다.`,
    type: "SUPPLIER",
  },
  {
    id: 2,
    name: "계정과목",
    desc: `전표 작성 시 필요한 계정과목을 추가할 수 있습니다.
    직접 계정과목을 입력하거나, 엑셀로 등록할 수 있습니다.
    `,
    type: "ACCOUNT",
  },
];

export default BasicInfos;
