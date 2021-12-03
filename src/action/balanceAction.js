export function loading() {
  return { type: "LOADING" };
}
export function deposit() {
  return { type: "DEPOSIT", payload: 5 };
}

export function depositAsync() {
  return (dispatch) => {
    dispatch(loading());
    setTimeout(() => {
      dispatch(deposit());
    }, 5000);
  };
}
export function withdraw() {
  return { type: "WITHDRAW", payload: 5 };
}

export function withdrawAsync() {
  return (dispatch) => {
    dispatch(loading());
    setTimeout(() => {
      dispatch(withdraw());
    }, 5000);
  };
}
