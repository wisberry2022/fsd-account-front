import { SupplierResponse } from "@/5.shared/types";
import "./suppliers.css";
import { FC } from "react";
import { convert2DateFormat } from "@/5.shared/utils";

type SupplierProps = {
  splys: SupplierResponse[] | undefined;
  onRowClick: (id: number) => void;
};

export const Suppliers: FC<SupplierProps> = (props) => {
  const { splys, onRowClick } = props;
  return (
    <table id="sply-tbl">
      <thead>
        <tr>
          <th className="check tbl-head-color">
            <input type="checkbox" />
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
              <input type="checkbox" />
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
