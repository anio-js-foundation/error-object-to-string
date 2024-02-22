export default function errorObjectToString(error) {
	let ret = `Error: ${error.message}`

	if ("stack" in error) {
		ret += `\nStacktrace: ${error.stack}`
	}

	return ret
}
