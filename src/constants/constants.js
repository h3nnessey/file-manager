const ERROR_TYPES = {
    invalidInput: 'Invalid Input',
    operationFailed: 'Operation Failed',
};

const REGEXP_MAP = {
    '"': /"(.*?)"/gm,
    "'": /'(.*?)'/gm,
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

export { ERROR_TYPES, REGEXP_MAP, ARGS_COUNT };
