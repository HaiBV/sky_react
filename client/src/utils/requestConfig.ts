import axios from "axios";

export const setAuthToken = (token: string) => {
	if (token) {
		axios.defaults.headers.common["x-auth-token"] = token;
	} else {
		delete axios.defaults.headers.common["x-auth-token"];
	}
}
