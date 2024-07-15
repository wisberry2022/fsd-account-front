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

export const useKeywordPopover = <T = string>() => {
  const [popup, setPopup] = useState<T | null>(null);

  const onOpen = (keyword: T) => {
    setPopup(keyword);
  };

  const onClose = () => {
    setPopup(null);
  };

  return {
    open: popup,
    onOpen,
    onClose,
  };
};
