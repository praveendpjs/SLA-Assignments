const user = {
    username: "Praveen",
    isLoggedIn: false,

    login() {
        if (this.isLoggedIn) {
            console.log(`${this.username} is already logged in.`);
        } else {
            this.isLoggedIn = true;
            console.log(`${this.username} has logged in.`);
        }
    },

    logout() {
        if (!this.isLoggedIn) {
            console.log(`${this.username} is already logged out.`);
        } else {
            this.isLoggedIn = false;
            console.log(`${this.username} has logged out.`);
        }
    }
};


user.login();   // Praveen has logged in.
user.logout();  // Praveen has logged out.
