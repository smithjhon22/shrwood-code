import axios from "axios";
import { ApiUrl } from "./ApiUrl";

const getHeaders = async (token) => {
	if (token) {
		return {
			Authorization: "Bearer " + token,
			"Content-Type": "application/json",
			Accept: "application/json",
			"Access-Control-Allow-Origin": "*",
		};
	} else {
		return {
			"Content-Type": "application/json",
			Accept: "application/json",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Origin": "http://sherwood.custom-ourbase.com/api",
			"Access-Control-Allow-Origin":
				"https://sherwood.developer-ourbase-camp.com/",
			"Access-Control-Allow-Credentials": true,
		};
	}
};

const getProfilePictureUploadHeaders = (token) => {
	if (token) {
		return {
			Authorization: "Bearer " + token,
			"Content-Type": "multipart/form-data",
			Accept: "application/json",
			"Access-Control-Allow-Origin": "*",
		};
	} else {
		return {
			// 'Authorization': 'Bearer ' + '2|WCtrTT8sPOf2NokAZNVUTTct2LjlJWiuZAAgky9N',
			"Content-Type": "application/json",
			Accept: "application/json",
			"Access-Control-Allow-Origin": "*",
		};
	}
};

var profilePictureOptions = {
	method: null,
	data: null,
	headers: getProfilePictureUploadHeaders(),
};

var authOptions = {
	method: null,
	data: null,
	headers: getHeaders(),
};

export const doPost = async (url, data, token) => {
	authOptions.method = "POST";
	authOptions.data = data;
	authOptions.headers = await getHeaders(token);

	return axios(ApiUrl + url, {
		...authOptions,
		method: "POST",
		data: data,
		headers: await getHeaders(token),
	});
};
export const doPatch = async (url, data, token) => {
	authOptions.method = "Patch";
	authOptions.data = data;
	authOptions.headers = await getHeaders(token);
	return axios(ApiUrl + url, authOptions);
};

export const doPut = async (url, data, token = null) => {
	authOptions.method = "PUT";
	authOptions.data = data;
	authOptions.headers = await getHeaders(token);
	return axios(ApiUrl + url, authOptions);
};

export const doGet = async (url, token) => {
	authOptions.headers = await getHeaders(token);
	authOptions.method = "GET";
	authOptions.data = null;
	return axios(ApiUrl + url, authOptions);
};

export const doDelete = async (url, token) => {
	authOptions.method = "DELETE";
	authOptions.data = null;
	authOptions.headers = await getHeaders(token);
	return axios(ApiUrl + url, authOptions);
};

export const doPostProfilePictureUpload = (url, data, token) => {
	profilePictureOptions.method = "POST";
	profilePictureOptions.data = data;
	profilePictureOptions.headers = getProfilePictureUploadHeaders(token);
	return axios(ApiUrl + url, profilePictureOptions);
};
