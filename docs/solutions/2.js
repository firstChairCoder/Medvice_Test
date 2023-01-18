//Original:
export const Service = {
  get: (url, token, params = {}, l = false) => {
    const headers = {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "X-Request-ID": Math.floor(Math.random() * 1000000)
    };
    if (!token) {
      headers.Authorization = ``;
    }

    const query = {
      method: "get",
      url,
      headers,
      ...(params ? { params } : {})
    };

    const res = axios(query);

    // log the query and response
    if (l) {
      token = "********";

      console.log("Query: ", query);

      if (res.status.toString().startsWith("2")) {
        console.log("Response: ", res);
      }
      //else if (res.status.toString().startsWith('5'))
      //  console.error('Response Internal server error: ', res);
      else {
        console.error("Response: ", res);
      }
    }
    return res;
  },
  post: (url, token, data, l = true) => {
    const headers = {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "X-Request-ID": Math.floor(Math.random() * 1000000),
      "Content-Type": "application/json"
    };
    if (!token) {
      headers.Authorization = ``;
    }

    const query = {
      method: "post",
      url,
      headers,
      data
    };

    const res = axios(query);

    // log the query and response
    if (l) {
      token = "********";

      console.log("Query: ", query);

      if (res.status.toString().startsWith("2")) {
        console.log("Response: ", res);
      }
      //else if (res.status.toString().startsWith('5'))
      //  console.error('Response Internal server error: ', res);
      else {
        console.error("Response: ", res);
      }
    }

    return res;
  }
};



//refactor:
const instance = axios.create({
  baseURL,
});



export const Service = (method, path, data, token, params) => {
  instance.defaults.headers.common["Authorization"] = `Bearer ${token} || ""`
  instance.defaults.headers.common["Accept"] = "application/json"
  instance.defaults.headers.post["Content-Type"] = "application/json"
  instance.defaults.headers.common["X-Request-ID"] = Math.floor(Math.random() * 1000000)
  
  return axiosInstance({
    method,
    url: path,
    data,
...(params ? { params } : {})
  })
    .then((req, res) => {
      console.log("Query ", req);
      console.log("Response ", res)
    })
    .catch((err) => {
      if (err.resp) {
        throw err.resp.data();
      } else if (err.req) {
        throw err.req();
      } else {
        throw new Error(`Error: ${err.message}`);
      }
    });
};

