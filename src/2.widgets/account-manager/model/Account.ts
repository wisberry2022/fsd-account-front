import { AccountSubjectCategoryEnum } from "@/5.shared/enums";
import { AccountAddRequest } from "@/5.shared/types";

export const Account: AccountAddRequest = {
  category: AccountSubjectCategoryEnum.CAPITAL,
  activated: true,
  code: "",
  name: "",
};
