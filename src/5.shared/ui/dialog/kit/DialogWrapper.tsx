import { FC, ReactNode, useEffect, useRef } from "react";

type DialogWrapperProps = {
  children: ReactNode;
  onClose: () => void;
};

const DialogWrapper: FC<DialogWrapperProps> = (props) => {
  const { children, onClose } = props;
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
    <div id="dialog-wrapper" ref={ref}>
      {children}
    </div>
  );
};

export default DialogWrapper;
