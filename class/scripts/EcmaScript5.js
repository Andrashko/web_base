//функція як конструктор
function User(login, password, id){
    this.login = login || "";
    this.password = password || "";
    this.id = id || -1;
}

User.prototype.sayHi = function(){
    return "Hello, my name is " + this.login;
}

UserProfile.prototype.super = User;
for (var key in User.prototype)
    UserProfile.prototype[key] = User.prototype[key];

function UserProfile(login, password, id, avatar, name){
    this.super(login, password, id);
    this.avatar = avatar;
    this.name = name;
}
UserProfile.prototype.showAvatar = function(){
    return '<img src="'+this.avatar+'">';
}


var user1 = new User("yurii","123456",42);
console.log(user1);
console.log(user1.sayHi());
var userProfile1 = new UserProfile("yurii","123456",42, "img.jpg", "Юрій");
console.log(userProfile1);
console.log(userProfile1.showAvatar());


//фабрична функція (функція-фабрика)
function UserFabric(login, password, id){
    var result = Object.create({});
    result.login = login || "";
    result.password = password || "";
    result.id = id || -1;
    result.__proto__.sayHi = function(){
        return "Hello, my name is " + this.login;
    }
    return result;
}

function UserProfileFabric(login, password, id, avatar, name){
    var result = UserFabric(login, password, id); 
    result.avatar = avatar;
    result.name = name;
    result.__proto__.showAvatar = function(){
        return '<img src="'+this.avatar+'">';
    }
    return result;
}

var user2 =  UserFabric("yurii","123456",42);
console.log(user2);
console.log(user2.sayHi());
var userProfile2 = UserProfileFabric("yurii","123456",42, "img.jpg", "Юрій");
console.log(userProfile2);
console.log(userProfile2.showAvatar());