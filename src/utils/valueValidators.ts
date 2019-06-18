import { removeNonNumericCharacters } from './stringParser'

export const validateCPF = (cpf: string): boolean => {
	cpf = removeNonNumericCharacters(cpf)
	let sum
	let remainder
	sum = 0
	if (/^(.)\1+$/.test(cpf)) {
		return false
	}
	for (let i = 1; i <= 9; i++) {
		sum = sum + parseInt(cpf.substring(i - 1, i), undefined) * (11 - i)
	}
	remainder = (sum * 10) % 11
	if ((remainder === 10) || (remainder === 11)) {
		remainder = 0
	}
	if (remainder !== parseInt(cpf.substring(9, 10), undefined)) {
		return false
	}
	sum = 0
	for (let i = 1; i <= 10; i++) {
		sum = sum + parseInt(cpf.substring(i - 1, i), undefined) * (12 - i)
	}
	remainder = (sum * 10) % 11
	if ((remainder === 10) || (remainder === 11)) {
		remainder = 0
	}
	return remainder === parseInt(cpf.substring(10, 11), undefined)
}
