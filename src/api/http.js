import config from "../config";

const httpReq = async (endpoint, method = "GET", body = {}, headers = {}) => {
	console.log(headers)
  const url = config.apiUrl + endpoint;
  console.log(url);
  return await (method == "GET"
    ? fetch(url, { headers })
    : fetch(url, {
        method,
        headers: { ...headers, "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
  )
    .catch((as) => console.log(as))
    .then((res) => {
      return res.json();
    });
};

export default httpReq;
