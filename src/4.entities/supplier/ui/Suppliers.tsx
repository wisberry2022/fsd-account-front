import { SupplierResponse } from "@/5.shared/types";
import "./suppliers.css";
import { FC } from "react";

type SupplierProps = {
  splys: SupplierResponse[];
};

export const Suppliers: FC<SupplierProps> = (props) => {
  const { splys } = props;
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
        {splys.map(sply => <tr>
          <td>
            <input type="checkbox" />
          </td>
          <td>{sply.id}</td>
          <td>{sply.name}</td>
          <td>{sply.representationName}</td>
          <td>2024-05-05</td>
        </tr>)}
        
      </tbody>
    </table>
  );
};
