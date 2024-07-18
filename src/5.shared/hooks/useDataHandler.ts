import { ChangeEventHandler, useState } from "react";

export const useDataHandler = <T = unknown>(init: T) => {
  const [state, setState] = useState<T>(init);

  const onChangeInput = (
    type: "string" | "number" | "date"
  ): ChangeEventHandler<HTMLInputElement> => {
    return (e) => {
      const { name } = e.target;
      let value: string | number | Date | null;
      if (type === "number") {
        value = e.target.valueAsNumber;
      }
      if (type === "date") {
        value = e.target.valueAsDate;
      }
      if (type === "string") {
        value = e.target.value;
      }
      setState((prev) => ({
        ...prev,
        [name]: value,
      }));
    };
  };

  const onCheck: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, checked } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const onRadio: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSelect: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return {
    state,
    setState,
    onChangeInput,
    onCheck,
    onRadio,
    onSelect,
  };
};
