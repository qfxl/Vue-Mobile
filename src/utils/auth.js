import Cookies from 'js-cookie'

const TokenKey = 'loginToken'

const NameKey = "loginName"

export function getToken() {
	return Cookies.get(TokenKey)
}

export function setToken(token) {
	return Cookies.set(TokenKey, token)
}

export function removeToken() {
	return Cookies.remove(TokenKey)
}

export function setUserName(userName) {
	return Cookies.set(NameKey, userName)
}

export function getUserName() {
	return Cookies.get(NameKey)
}
