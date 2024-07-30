const _LPAD = (num: number): string | number => {
  const str = num.toString();

  if (str.length > 1) {
    return num;
  }

  return "0".concat(str);
};

export const getDateFormat = (dateObj: Date | null): string => {
  if (!dateObj) {
    return "일자 미지정";
  }

  console.log("dateObj ", dateObj);

  const year = dateObj.getFullYear();
  const month = _LPAD(dateObj.getMonth() + 1);
  const date = _LPAD(dateObj.getDate());
  const day = dateObj.getDay();

  const dayMapper: { [key: number]: string } = {
    0: "일요일",
    1: "월요일",
    2: "화요일",
    3: "수요일",
    4: "목요일",
    5: "금요일",
    6: "토요일",
  };

  return `${year}-${month}-${date}-${dayMapper[day]}`;
};

export const getYYYYMMDDFormat = (dateObj: Date | null): string => {
  if (!dateObj) {
    return "";
  }
  const year = dateObj.getFullYear();
  const month = _LPAD(dateObj.getMonth() + 1);
  const date = _LPAD(dateObj.getDate());

  return `${year}-${month}-${date}`;
};

export const convert2DateFormat = (dateObj: string | null): string | null => {
  if (!dateObj) {
    return null;
  }

  const date = new Date(dateObj);
  return getYYYYMMDDFormat(date);
};
