export default class Cpf {
    CPF_LENGTH = 11;

    constructor(
        readonly value: string,
    ) {
        this.validateCpf(value)
    }
    calculateVerificationNumber(verificationNumber: number) {
        const rest = verificationNumber % 11;
        return (rest < 2) ? 0 : 11 - rest
    }
    allDigitsAreEqual([firstDigit, ...rest]: string) {
        return rest.every(c => c === firstDigit)
    }
    getVerificationNumber(cpf:string){
        const sum = [...cpf].reduce(
            (total, digit, index) => total + parseInt(digit) * (cpf.length - index - 1), 0
        )
        return this.calculateVerificationNumber(sum);
    }
    validateCpf(cpf: string) {
        if (!cpf) throw Error('Invalid CPF');
        const parsedCpf = cpf.replace(/\D/g, '');
        if (parsedCpf.length !== this.CPF_LENGTH) throw Error('Invalid CPF')
        if (this.allDigitsAreEqual(cpf)) throw Error('Invalid CPF');

        const firstVerificationDigit = this.getVerificationNumber(parsedCpf);
        const test = `${parsedCpf}${firstVerificationDigit}`
        const secondVerificationDigit = this.getVerificationNumber(test);
        const cpfVerificationDigits = parsedCpf.substring(parsedCpf.length - 2, parsedCpf.length);
        const calculatedDigits = `${firstVerificationDigit}${secondVerificationDigit}`
        return cpfVerificationDigits === calculatedDigits;
    }
}

