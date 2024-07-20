import { AccountAddRequest } from "@/5.shared/types";
import "./act-reg-tbl.css";
import { ChangeEventHandler, FC } from "react";
import { AccountSubjectCategoryEnum } from "@/5.shared/enums";

type AccountRegisterTableProps = {
  account: AccountAddRequest;
  onSelect: ChangeEventHandler<HTMLSelectElement>;
  onChangeInput: (
    type: "string" | "number" | "date"
  ) => ChangeEventHandler<HTMLInputElement>;
  onRadio: (name: string, value: boolean) => void;
};

export const AccountRegisterTable: FC<AccountRegisterTableProps> = (props) => {
  const { account, onSelect, onChangeInput, onRadio } = props;

  const onCustomRadio: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    onRadio(name, value === "activated");
  };

  return (
    <table id="act-reg-tbl">
      <tbody>
        <tr className="category">
          <th className="tbl-head-color">대분류</th>
          <td className="select-td">
            <select
              className="act-category"
              name="category"
              onChange={onSelect}
              value={account.category}
            >
              <option value={AccountSubjectCategoryEnum.CAPITAL}>자본</option>
              <option value={AccountSubjectCategoryEnum.ASSET}>자산</option>
              <option value={AccountSubjectCategoryEnum.DEBT}>부채</option>
              <option value={AccountSubjectCategoryEnum.REVENUE}>수익</option>
              <option value={AccountSubjectCategoryEnum.EXPENSE}>비용</option>
            </select>
          </td>
          <th className="tbl-head-color">사용여부</th>
          <td className="act-actv-area">
            <div>
              <dl className="radio-group">
                <dt>사용</dt>
                <dd>
                  <input
                    type="radio"
                    name="activated"
                    value="activated"
                    onChange={onCustomRadio}
                    checked={account.activated}
                  />
                </dd>
              </dl>
              <dl className="radio-group">
                <dt>미사용</dt>
                <dd>
                  <input
                    type="radio"
                    name="activated"
                    value="inactivated"
                    onChange={onCustomRadio}
                    checked={!account.activated}
                  />
                </dd>
              </dl>
            </div>
          </td>
        </tr>
        <tr>
          <th className="tbl-head-color">계정과목 이름</th>
          <td>
            <input
              type="text"
              name="name"
              onChange={onChangeInput("string")}
              value={account.name}
            />
          </td>
          <th className="tbl-head-color">코드</th>
          <td>
            <input
              type="text"
              name="code"
              onChange={onChangeInput("string")}
              value={account.code}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};
