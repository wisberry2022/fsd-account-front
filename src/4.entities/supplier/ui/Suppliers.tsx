import { SupplierResponse } from "@/5.shared/types";
import "./suppliers.css";
import { ChangeEventHandler, Dispatch, FC, SetStateAction } from "react";
import { convert2DateFormat } from "@/5.shared/utils";

type SupplierProps = {
  splys: SupplierResponse[] | undefined;
  onRowClick: (id: number) => void;
  checks: number[];
  setCheck: Dispatch<SetStateAction<number[]>>;
};

export const Suppliers: FC<SupplierProps> = (props) => {
  const { splys, onRowClick, checks, setCheck } = props;

  const onCheck = (id: number, checked: boolean): void => {
    setCheck((prev) => {
      if (checked) return prev.concat(id);
      return prev.filter((pre) => pre !== id);
    });
  };

  const onCheckAll: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { checked } = e.target;
    setCheck(checked ? (splys?.map((sply) => sply.id) as number[]) : []);
  };

  return (
    <table id="sply-tbl">
      <thead>
        <tr>
          <th className="check tbl-head-color">
            <input type="checkbox" onChange={onCheckAll} />
          </th>
          <th className="seq tbl-head-color">No</th>
          <th className="name tbl-head-color">거래처명</th>
          <th className="repr tbl-head-color">대표자</th>
          <th className="reg-dttm tbl-head-color">등록일자</th>
        </tr>
      </thead>
      <tbody>
        {splys?.map((sply) => (
          <tr>
            <td>
              <input
                type="checkbox"
                checked={checks.includes(sply.id)}
                onChange={(e) => onCheck(sply.id, e.target.checked)}
              />
            </td>
            <td onClick={() => onRowClick(sply.id)}>{sply.id}</td>
            <td onClick={() => onRowClick(sply.id)}>{sply.name}</td>
            <td onClick={() => onRowClick(sply.id)}>
              {sply.representationName}
            </td>
            <td onClick={() => onRowClick(sply.id)}>
              {convert2DateFormat(sply.regDttm)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
