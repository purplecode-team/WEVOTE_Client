export const getFormatDate = (date) => {
  const year = date.getFullYear(); // yyyy
  let month = 1 + date.getMonth(); // M
  month = month >= 10 ? month : `0${month}`; // month 두자리로 저장
  let day = date.getDate(); // d
  day = day >= 10 ? day : `0${day}`; // day 두자리로 저장
  return `${year}/${month}/${day}`; // '-' 추가하여 yyyy-mm-dd 형태 생성 가능
};

export const getNewArrState = (arr, index, value, dispatch) => {
  const tempArr = arr.slice();
  tempArr[index] = value;
  dispatch(tempArr);
};

export const verifyEmail = (value) => {
  const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  if (value.match(regExp) != null) return true;

  return false;
};

export const verifyPassword = (value) => {
  // 특수문자 포함 6~12자리
  const regExp = /^(?=.*[a-zA-Z])(?=.*[,./!@#$%^*+=-])(?=.*[0-9]).{6,12}$/;

  if (regExp.test(value)) return true;
  return false;
};

export const verifyName = (value) => {
  // 문자만 입력 가능 2~20자리
  const regExp = /^[가-힣|a-z|A-Z]{2,20}$/;

  if (regExp.test(value)) return true;
  return false;
};

export const isEmptyArr = (arr) => {
  if (arr && Array.isArray(arr) && arr.length !== 0) return false;
  return true;
};
