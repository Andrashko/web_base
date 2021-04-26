class UserClass{
    constructor(login = "", password ="", id=-1){
        this.login = login;
        this.password = password;
        this.id = id;
    }

    sayHi(){        
        return "Hello, my name is " + this.login;
    }
}

class UserProfileClass extends UserClass{
    constructor (login, password, id, avatar, name){
        super(login, password, id);
        this.avatar = avatar;
        this.name = name;
    }
    showAvatar(){
        return `<img src="${+this.avatar}" alt="${super.sayHi()}">`;
    }

    get passwordLen(){
        return this.password.length;
    }

    set avatarUrl(value){
        if (value?.length>0){
            this.avatar = value;
        } else
            throw "Wrong URL";
    }
}



var userProfile3 = new UserProfileClass("yurii","123456",42, "img.jpg", "Юрій");
console.log(userProfile2);
console.log(userProfile2.showAvatar());
console.log(userProfile3.passwordLen);
userProfile3.avatarUrl = "htttp://img.jpg";
console.log(userProfile3);
userProfile3.avatarUrl = "";