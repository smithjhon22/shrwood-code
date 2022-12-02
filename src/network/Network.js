import {
	STORE,
	BLOG,
	SHOW,
	CONTACT,
	GET_ALL,
	DELETE,
	NEWS,
	CAREER,
	APPLICATION,
	AUTH,
	REGISTER,
	LOGIN,
	PROFILE,
	TEAM_MEMBER,
} from "../network/Endpoint";

import {
	doGet,
	doPost,
	doPatch,
	doDelete,
	doPostProfilePictureUpload,
} from "./Config";

export const blogstore = (data) => {
	return doPost(`${BLOG}${STORE}`, data);
};

export const blogshow = () => {
	return doGet(`${BLOG}${SHOW}`);
};

// export const blogshow = () => {
//   return doGet(`${"/teams"}`);
// };

export const contactstore = (data) => {
	return doPost(`${CONTACT}${STORE}`, data);
};

export const contactshow = () => {
	return doGet(`${CONTACT}${SHOW}`);
};

export const contactid = () => {
	return doGet(`${CONTACT}${GET_ALL}`);
};

export const contactdelete = () => {
	return doDelete(`${CONTACT}${DELETE}`);
};

export const newsstore = (data) => {
	return doPost(`${NEWS}${STORE}`, data);
};

export const news = () => {
	return doGet(`${NEWS}`);
};

export const newsrecord = () => {
	return doGet(`${NEWS}${SHOW}`);
};

export const newsdelete = () => {
	return doDelete(`${NEWS}${DELETE}`);
};

export const careerstore = (data, token) => {
	return doPost(`${CAREER}${STORE}`, data, token);
};

export const careerget = () => {
	return doGet(`${CAREER}`);
};

export const careershow = () => {
	return doGet(`${CAREER}${SHOW}`);
};

export const careerdelete = () => {
	return doGet(`${CAREER}${DELETE}`);
};
export const applicationstore = () => {
	return doPost(`${APPLICATION}${STORE}`);
};

export const PostTeams = () => {
	return doPostProfilePictureUpload(`${TEAM_MEMBER}${STORE}`);
};
