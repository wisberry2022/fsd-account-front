import { SupplierResponse } from "@/5.shared/types";
import { FC } from "react";
import "./sply.css";

type SupplierProps = {
  sply: SupplierResponse;
};

export const Supplier: FC<SupplierProps> = (props) => {
  const { sply } = props;

  return (
    <table id="sply-read-tbl">
      <tbody>
        <tr>
          <th className="tbl-head-color">거래처명</th>
          <td>{sply?.name}</td>
          <th className="tbl-head-color">대표자명</th>
          <td>{sply?.representationName}</td>
        </tr>
        <tr className="full">
          <th className="tbl-head-color">사업자 등록번호</th>
          <td colSpan={3}>{sply?.corpCode}</td>
        </tr>
        <tr className="full">
          <th className="tbl-head-color">거래처 주소</th>
          <td colSpan={3}>{sply?.address}</td>
        </tr>
        <tr>
          <th className="tbl-head-color">업태</th>
          <td>{sply?.category}</td>
          <th className="tbl-head-color">주거래처 여부</th>
          <td>{sply?.main === "MAIN" ? "예" : "아니요"}</td>
        </tr>
      </tbody>
    </table>
  );
};
