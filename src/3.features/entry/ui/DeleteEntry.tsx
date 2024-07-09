import "./css/entry.css";
import { FC } from "react";
import { FaTrash } from "react-icons/fa";

type DeleteEntryProps = {
  seq: number;
  deleteEntry: (seq: number) => void;
};

export const DeleteEntry: FC<DeleteEntryProps> = (props) => {
  const { seq, deleteEntry } = props;
  return <FaTrash id="delete-entry" onClick={() => deleteEntry(seq)} />;
};
