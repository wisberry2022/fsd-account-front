import { ChangeEventHandler, useEffect, useState } from "react";

export const useDataHandler = <T = unknown>(init: T) => {
  const [state, setState] = useState<T>(init);

  useEffect(() => {
    if (init) {
      setState(init);
    }
  }, [init]);

  const _setter = <K extends string | number | Date | boolean | null>(
    name: string,
    value: K
  ) => {
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
      } else {
        value = e.target.value;
      }
      _setter(name, value);
    };
  };

  const onCheck: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, checked } = e.target;
    _setter(name, checked);
  };

  const onRadio: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    _setter(name, value);
  };

  const onRadioBoolean = (name: string, value: boolean) => {
    _setter(name, value);
  };

  const onSelect: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const { name, value } = e.target;
    _setter(name, value);
  };

  return {
    state,
    setState,
    onChangeInput,
    onCheck,
    onRadio,
    onRadioBoolean,
    onSelect,
  };
};
