const get11Rest = (n: number) => n % 11;
const getVerificationNumber = (rest: number) => (rest < 2) ? 0 : 11 - rest;
const calculateVerificationNumber = (verificationNumber: number) => {
    const rest = get11Rest(verificationNumber);
    return getVerificationNumber(rest)
}
const CPF_LENGTH = 11;
export function validateCpf(cpf: string) {
    if (!cpf) throw Error('Invalid CPF');
    const parsedCpf = cpf.replace(/\./g, '').replace(/-/g, '').replace(/\s/g, "");
    if (parsedCpf.length !== CPF_LENGTH) throw Error('Invalid CPF')
    if (parsedCpf.split("").every(c => c === parsedCpf[0])) throw Error('Invalid CPF');
    let firstVerificationDigit = 0
    let secondVerificationDigit = 0;
    for (let nCount = 1; nCount < parsedCpf.length - 1; nCount++) {
        const iterationDigit = parseInt(parsedCpf.substring(nCount - 1, nCount));
        firstVerificationDigit = firstVerificationDigit + (CPF_LENGTH - nCount) * iterationDigit;
        secondVerificationDigit = secondVerificationDigit + (12 - nCount) * iterationDigit;
    };
    firstVerificationDigit = calculateVerificationNumber(firstVerificationDigit);
    secondVerificationDigit += 2 * firstVerificationDigit;
    secondVerificationDigit = calculateVerificationNumber(secondVerificationDigit);
    const originalCPFVerificationDigits = parsedCpf.substring(parsedCpf.length - 2, parsedCpf.length);
    const resultedCPFVerificationDigits = `${firstVerificationDigit}${secondVerificationDigit}`
    return originalCPFVerificationDigits === resultedCPFVerificationDigits;
}

validateCpf('11111111219')