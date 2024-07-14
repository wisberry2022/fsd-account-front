import { FC } from "react";
import "./css/slips.css";

export const Slips: FC = () => {
  return (
    <tr className="slip-content">
      <td className="seq">1</td>
      <td className="type">입금</td>
      <td className="desc">무한상사 복리후생비</td>
      <td className="sup-date">2024-01-01</td>
      <td className="reg-date">2024-01-01</td>
    </tr>
  );
};
