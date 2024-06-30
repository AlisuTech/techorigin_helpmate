import axios from "axios";
const rootApi = "http://localhost:5024/DATABASE_URL";

export async function createserviceProvider(body) {
  const body = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  };

  const response = axios.post(rootApi + "/createNewServiceProvider", body);
  
}

// export async function loginserviceprovider(email, password) {
//   const buildQuery = rootApi + "./login";
// }

// export async function updateserviceprovider(email) {}
