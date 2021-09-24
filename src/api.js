import axios from "axios";

export const fetchProduct = async (id)=> {
    const {data}= await axios.get(`https://6149bc3707549f001755a557.mockapi.io/products/${id}`)
    return data;
}
export const fetchRegister = async (input) => {
	const { data } = await axios.post(
		"https://6149bc3707549f001755a557.mockapi.io/users",
		input
	);

	return data;
}
export const fetchLogin = async (input) => {
    const { data } = await axios.get(
      `https://6149bc3707549f001755a557.mockapi.io/users`
    );
    let newdata = data.filter((item) => item.email === input.email);
    if (newdata.length !== 1) {
      newdata = false;
    }
    return newdata;
  };

  


