import { AccountSelectPopup } from "@/4.entities/account";
import { usePopover, useSlipContext } from "@/5.shared/hooks";
import { AccountResponse, BasicSlipContext, ObjType } from "@/5.shared/types";
import { PopupTriggerBox } from "@/5.shared/ui";
import { FC, useState } from "react";

export const WithdrawalSlip: FC = () => {
  const { slip, onChange, setSlip } = useSlipContext(
    "WITHDRAWAL"
  ) as BasicSlipContext;
  const popover = usePopover();

  const typeMapper: ObjType<ObjType<string>> = {
    RECEIPT: {
      title: "입금전표",
      name: "credit",
    },
    WITHDRAWAL: {
      title: "출금전표",
      name: "debit",
    },
  };

  const [account, setAccount] = useState<AccountResponse>(
    {} as AccountResponse
  );

  const onSelect = (value: AccountResponse) => {
    setAccount(value);
    setSlip((prev) => ({
      ...prev,
      subject: {
        ...prev.subject,
        debitId: value.id,
        debit: value.name,
      },
    }));
  };

  return (
    <div>
      <table id="slip">
        <thead>
          <tr>
            <th colSpan={4} className="slip-head-color">
              {typeMapper[slip.slip].title}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="subject slip-head-color">과목</th>
            <td className="subject-item">
              {/* 입금전표일 경우 대변(credit), 출금전표일 경우 차변(debit) */}
              {/* <input
                type="text"
                name={typeMapper[slip.slip].name}
                onChange={onChange}
                value={
                  slip.slip === "RECEIPT"
                    ? slip.subject.credit
                    : slip.subject.debit
                }
                className="slip-input"
              /> */}
              <PopupTriggerBox value={account.name} onClick={popover.onOpen} />
            </td>
            <th className="entry slip-head-color">항목</th>
            <td className="entry-item">
              <input
                type="text"
                name="item"
                onChange={onChange}
                className="slip-input"
                value={slip.item}
              />
            </td>
          </tr>
          <tr className="sub-head">
            <th colSpan={3} className="slip-head-color">
              적요
            </th>
            <th className="slip-head-color">금액</th>
          </tr>
          <tr className="content">
            <td colSpan={3}>
              <input
                name="desc"
                type="text"
                className="slip-input"
                onChange={onChange}
                value={slip.desc}
              />
            </td>
            <td>
              <input
                name="amount"
                type="text"
                className="slip-input"
                onChange={onChange}
                value={slip.amount || ""}
              />
            </td>
          </tr>
        </tbody>
      </table>
      {popover.open && (
        <AccountSelectPopup
          open={popover.open}
          onClose={popover.onClose}
          onConfirm={onSelect}
        />
      )}
    </div>
  );
};
