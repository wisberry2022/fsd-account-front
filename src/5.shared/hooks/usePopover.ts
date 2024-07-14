import { useState } from "react";

export const usePopover = () => {
  const [popup, setPopup] = useState<boolean>(false);

  const onOpen = () => {
    setPopup(true);
  };

  const onClose = () => {
    setPopup(false);
  };

  const onToggle = () => {
    setPopup((prev) => !prev);
  };

  return {
    open: popup,
    onOpen,
    onClose,
    onToggle,
  };
};
