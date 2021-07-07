
export const verifyEmail = value => {
  const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i; 
  
  if (value.match(regExp) != null) return true;

  return false;
};


export const verifyPassword = value => {
  // 특수문자 포함 6~12자리
  const regExp = /^(?=.*[a-zA-Z])(?=.*[,./!@#$%^*+=-])(?=.*[0-9]).{6,12}$/;

  if (regExp.test(value)) return true;
  return false;
}

export const verifyName = value => {
  const regExp =/^[가-힣|a-z|A-Z]{2,20}$/;

  if (regExp.test(value)) return true;
  return false;
}