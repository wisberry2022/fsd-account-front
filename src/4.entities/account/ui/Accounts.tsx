import "./accounts.css";

export const Accounts = () => {
  return (
    <table id="act-list-tbl">
      <thead>
        <tr>
          <th className="tbl-head-color check">
            <input type="checkbox" />
          </th>
          <th className="tbl-head-color seq">No</th>
          <th className="tbl-head-color code">코드</th>
          <th className="tbl-head-color name">계정과목 이름</th>
          <th className="tbl-head-color reg-dttm">등록일</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input type="checkbox" />
          </td>
          <td>1</td>
          <td>101-001</td>
          <td>선급금</td>
          <td>2024-01-01</td>
        </tr>
      </tbody>
    </table>
  );
};
