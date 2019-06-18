export function removeNonNumericCharacters(text: string): string {
	let newText = ''
	for (const char of text) {
		if (/^\d+$/.test(char)) {
			newText += char
		}
	}
	return newText
}
