
console.log("hello")
const BASE_URL = 'https://jsonplaceholder.typicode.com';

const myFunc = async () => {
  const res = await axios.get(`${BASE_URL}/users`);
  console.log(res);
}

myFunc()

const config = {
  headers: {
    'Content-Type': 'application/json'
  }
}

const body = { data: "hello" };

const register = async () => {
  const res = await axios.post("/register", body, config);
  console.log(res);
}

register();

  

