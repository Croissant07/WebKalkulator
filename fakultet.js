export function fakultet(tall) {
    if (tall < 0) return 1;
    let resultat = 1;
    for (let i = 2; i <= tall; i++) {
        resultat *= i;
    }
    return resultat;
}