import errorObjectToString from "./index.mjs"

try {
	throw new Error("oops!")
} catch (e) {
	console.log(errorObjectToString(e))
}
