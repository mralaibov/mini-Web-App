import axios from "axios";

// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}

export const getBitcoin = () => axios
    .get("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then((response) => response)
    .catch(function (error) {console.log(error);})
