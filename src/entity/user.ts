
export default interface UserAccount {

    id          ?: String;
    username    ?: String;
    email        : String;
    password     : String;
    highscore   ?: String;

}

class User {

    id          ?: String
    username    ?: String
    email        : String
    password     : String
    highscore   ?: String

    constructor(id: String, username: String, email: String, password: String, highscore: String) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.highscore = highscore
    }

    get getId(): String | undefined {
        return this.id;
    }
    set setId(id: String){
        this.id = id;
    }

    get getUsername(): String | undefined {
        return this.username;
    }
    set setUsername(username: String){
        this.username = username;
    }

    get getEmail(): String {
        return this.email;
    }
    set setEmail(email: String){
        this.email = email;
    }

    get getPassword(): String {
        return this.password;
    }
    set setPassword(password: String){
        this.password = password;
    }

    get gethighscore(): String {
        return this.highscore;
    }
    set setHighscore(highscore: String){
        this.highscore = highscore;
    }

    toString() {
        console.log(`id: ${this.id} | username: ${this.username} | email: ${this.email} | password: ${this.password} | `)
    }

}

module.exports = User