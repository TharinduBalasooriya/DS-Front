import axios from 'axios'


const login = (username, password)=>{


    return axios
      .post("http://localhost:5000/stock-api/auth/login", {
        username,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
};


const register = (username,email,password,role)=>{


    return axios.post("http://localhost:5000/stock-api/user", {
      username: username,
      email: email,
      usertype: role,
      password: password,
    });
    
}

const logout= ()=>{

    localStorage.removeItem("user")
}

const getCurrentUser = ()=>{

    return JSON.parse(localStorage.getItem("user"))
}

const exportmodule = {
    login,
    register,
    getCurrentUser,
    logout
}
export default exportmodule