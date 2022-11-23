export function increment(number) {
  return {
    type: "INCREMENT",
    payload: number,
  };
}
export function decrement() {
  return {
    type: "DECREMENT",
  };
}
