class User {
    constructor(username) {
        this.username = username;
    }

    setUserName(newUserName) {
        this.username = newUserName;
    }

    getUserName() {
        return this.username;
    }
}

const user = new User('');

export { user };
