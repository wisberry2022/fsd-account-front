import { AccountSubjectCategoryEnum } from "@/5.shared/enums";
import { ObjType } from "@/5.shared/types";

export const CategoryMapper: ObjType<string> = {
  [AccountSubjectCategoryEnum.CAPITAL]: "자본",
  [AccountSubjectCategoryEnum.ASSET]: "자산",
  [AccountSubjectCategoryEnum.DEBT]: "부채",
  [AccountSubjectCategoryEnum.REVENUE]: "수익",
  [AccountSubjectCategoryEnum.EXPENSE]: "비용",
};
