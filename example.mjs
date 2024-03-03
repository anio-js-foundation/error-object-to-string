import errorObjectToString from "./src/index.mjs"

try {
	throw new Error("oops!")
} catch (e) {
	console.log(errorObjectToString(e))
}
