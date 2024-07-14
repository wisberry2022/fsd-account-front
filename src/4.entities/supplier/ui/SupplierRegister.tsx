import "./sply-reg.css";
import { FC } from "react";

export const SupplierRegister: FC = () => {
  return (
    <table id="sply-reg-tbl">
      <tbody>
        <tr>
          <th className="tbl-head-color">거래처명</th>
          <td>
            <input type="text" />
          </td>
          <th className="tbl-head-color">대표자명</th>
          <td>
            <input type="text" />
          </td>
        </tr>
        <tr className="full">
          <th className="tbl-head-color">사업자 등록번호</th>
          <td colSpan={3}>
            <input type="text" placeholder="사업자 등록번호를 입력하세요" />
          </td>
        </tr>
        <tr className="full">
          <th className="tbl-head-color">거래처 주소</th>
          <td colSpan={3}>
            <input type="text" placeholder="거래처 주소를 입력하세요" />
          </td>
        </tr>
        <tr>
          <th className="tbl-head-color">업태</th>
          <td>
            <input type="text" />
          </td>
          <th className="tbl-head-color">주거래처 여부</th>
          <td>
            <div className="radio-group">
              <dl className="radio-dl">
                <dt>예</dt>
                <dd>
                  <input type="radio" name="is_main" />
                </dd>
              </dl>
              <dl className="radio-dl">
                <dt>아니오</dt>
                <dd>
                  <input type="radio" name="is_main" />
                </dd>
              </dl>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
