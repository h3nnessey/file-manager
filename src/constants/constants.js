const ERROR_TYPES = {
    invalidInput: 'Invalid Input',
    operationFailed: 'Operation Failed',
};

const REGEXP_MAP = {
    '"': /"(.*?)"/gm,
    "'": /'(.*?)'/gm,
};

const TEXT_COLORS = {
    red: '\x1b[1;31m',
    green: '\x1b[1;32m',
    yellow: '\x1b[1;33m',
};

const ARGS_COUNT = {
    add: 1,
    cat: 1,
    hash: 1,
    os: 1,
    cd: 1,
    rm: 1,
    rn: 2,
    mv: 2,
    cp: 2,
    zip: 2,
    unzip: 2,
};

export { ERROR_TYPES, REGEXP_MAP, ARGS_COUNT, TEXT_COLORS };
