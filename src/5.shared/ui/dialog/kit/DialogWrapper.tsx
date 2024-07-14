import { FC, ReactNode, useEffect, useRef } from "react";

type DialogWrapperProps = {
  children: ReactNode;
  onClose: () => void;
  width?: number;
};

const DialogWrapper: FC<DialogWrapperProps> = (props) => {
  const { children, onClose, width = 30 } = props;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideArea = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideArea);
    return () => document.removeEventListener("mousedown", handleOutsideArea);
  }, [ref, onClose]);

  return (
    <div id="dialog-wrapper" ref={ref} style={{ width: `${width}%` }}>
      {children}
    </div>
  );
};

export default DialogWrapper;
