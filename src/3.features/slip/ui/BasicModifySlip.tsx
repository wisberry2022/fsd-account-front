import { usePopover } from "@/5.shared/hooks";
import "./css/basic-modify-slip.css";
import { SlipMapperEnum } from "@/5.shared/enums";
import { AccountResponse, PaperSlip } from "@/5.shared/types";
import { PopupTriggerBox } from "@/5.shared/ui";
import { getYYYYMMDDFormat } from "@/5.shared/utils";
import { ChangeEventHandler, FC } from "react";
import { AccountSelectPopup } from "@/4.entities/account";

type BasicModifySlipProps = {
  slip: PaperSlip;
  onSubject: (id: number, name: string) => void;
  onChangeDate: ChangeEventHandler<HTMLInputElement>;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const BasicModifySlip: FC<BasicModifySlipProps> = (props) => {
  const { slip, onSubject, onChangeDate, onChange } = props;

  const subPop = usePopover();

  const onConfirm = (value: AccountResponse) => {
    onSubject(value.id, value.name);
  };

  return (
    <>
      <table id="modify-slip-view">
        <thead>
          <tr>
            <th colSpan={4} className="slip-head-color">
              <div className="pre-title">
                <h2>{slip && SlipMapperEnum[slip.slip]}</h2>
                <input
                  type="date"
                  name="date"
                  onChange={onChangeDate}
                  value={getYYYYMMDDFormat(new Date(slip?.date as Date))}
                />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="slip-head-color">과목</th>
            <td>
              <PopupTriggerBox
                value={
                  slip?.slip === "RECEIPT"
                    ? slip?.subject.credit
                    : slip?.subject.debit
                }
                onClick={subPop.onOpen}
              />
            </td>
            <th className="slip-head-color">항목</th>
            <td>
              <input name="item" value={slip?.item} onChange={onChange} />
            </td>
          </tr>
          <tr className="mid-title">
            <th colSpan={3} className="slip-head-color">
              적요
            </th>
            <th colSpan={1} className="slip-head-color">
              금액
            </th>
          </tr>
          <tr>
            <td colSpan={3} className="desc">
              <input name="desc" value={slip?.desc} onChange={onChange} />
            </td>
            <td colSpan={1} className="amount">
              <input name="amount" value={slip?.amount} onChange={onChange} />
            </td>
          </tr>
        </tbody>
      </table>
      <AccountSelectPopup
        open={subPop.open}
        onClose={subPop.onClose}
        onConfirm={onConfirm}
        width={80}
      />
    </>
  );
};

export default BasicModifySlip;
