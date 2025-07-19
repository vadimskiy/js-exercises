// Examples:
// compareVersion('0.1', '0.2') // -1
// compareVersion('0.2', '0.1') // 1
// compareVersion('4.2', '4.2') // 0
// compareVersion('4.2.1', '4.2.2') // -1
// compareVersion('1.1.1', '1.1.0') // 1

const compareVersion = (version1, version2) => {
    const arrayV1 = version1.split('.');
    const arrayV2 = version2.split('.');

    let score;
    let i = 0;
    while (i < arrayV1.length) {
        const numberV1 = Number(arrayV1[i]);
        const numberV2 = Number(arrayV2[i]);
        if (numberV2 > numberV1) {
            return -1;
        }
        else if (numberV1 > numberV2) {
            return 1;
        } else {
            score = 0;
        }
        i += 1;
    }
    return score;
};
