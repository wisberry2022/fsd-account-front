import { SupplierRequest } from "@/5.shared/types";
import "./sply-reg.css";
import { ChangeEventHandler, FC } from "react";

type SupplierRegisterProps = {
  sply: SupplierRequest;
  onChangeInput: (
    type: "string" | "number" | "date"
  ) => ChangeEventHandler<HTMLInputElement>;
  onRadio: ChangeEventHandler<HTMLInputElement>;
};

export const SupplierRegister: FC<SupplierRegisterProps> = (props) => {
  const { sply, onChangeInput, onRadio } = props;

  return (
    <table id="sply-reg-tbl">
      <tbody>
        <tr>
          <th className="tbl-head-color">거래처명</th>
          <td>
            <input
              type="text"
              name="name"
              value={sply.name}
              onChange={onChangeInput("string")}
            />
          </td>
          <th className="tbl-head-color">대표자명</th>
          <td>
            <input
              type="text"
              name="representationName"
              value={sply.representationName}
              onChange={onChangeInput("string")}
            />
          </td>
        </tr>
        <tr className="full">
          <th className="tbl-head-color">사업자 등록번호</th>
          <td colSpan={3}>
            <input
              type="text"
              placeholder="사업자 등록번호를 입력하세요"
              name="corpCode"
              value={sply.corpCode}
              onChange={onChangeInput("string")}
            />
          </td>
        </tr>
        <tr className="full">
          <th className="tbl-head-color">거래처 주소</th>
          <td colSpan={3}>
            <input
              type="text"
              placeholder="거래처 주소를 입력하세요"
              name="address"
              value={sply.address}
              onChange={onChangeInput("string")}
            />
          </td>
        </tr>
        <tr>
          <th className="tbl-head-color">업태</th>
          <td>
            <input
              type="text"
              placeholder="업태를 입력하세요"
              name="category"
              value={sply.category}
              onChange={onChangeInput("string")}
            />
          </td>
          <th className="tbl-head-color">주거래처 여부</th>
          <td>
            <div className="radio-group">
              <dl className="radio-dl">
                <dt>예</dt>
                <dd>
                  <input
                    type="radio"
                    name="main"
                    value={"MAIN"}
                    onChange={onRadio}
                  />
                </dd>
              </dl>
              <dl className="radio-dl">
                <dt>아니오</dt>
                <dd>
                  <input
                    type="radio"
                    name="main"
                    value={"SUB"}
                    onChange={onRadio}
                    checked
                  />
                </dd>
              </dl>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
