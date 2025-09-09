// 创建对象 两种方法：字面量 
var obj = {
    name: 'xiaoMing',
    age: '21',
    sayHi: function () {
        console.log('hi~');

    }
}
// 调用属性 两种方法
console.log(obj.name);
console.log(obj['name']);

// 创建对象 new Objection
var objnew = new Object();
// 等号赋值添加属性
objnew.name = 'daMIng';
objnew.age = 18;
obj.say = function () {
    console.log("fuck");

}

// 构造函数 重复创建大量对象 函数名首字母要大写 不需要return

function person(name, sex, age) {
    this.name = name;
    this.sex = sex;
    this.age = age;
    this.fuck = function (who) {
        console.log(name + ' ' + 'fuck' + ' ' + who);

    }
}

Jeck = new person('jeck', 'male', 18);
console.log(Jeck['name', 'sex']);
Jeck.fuck('老王');

for (const k in Jeck) {
    console.log(k);
    console.log(Jeck[[k]]);

}

// 计算器

// 常用的库 Math Data Array
// 基本包装类型 字符串不可变

var str = '春春春春春春'
console.log(str.indexOf('春'));
console.log(str.indexOf('春', 2));

// str = 'ciusbcoiawsbcbvoawuee';
// var tar = 'c'
// var num = 0;
// var pos = -1;
// var index = str.indexOf(tar, pos);
// pos = index;

// while (pos != -1) {
//     num++;
//     pos = index;
//     if (pos == -1) { break };
//     var index = str.indexOf(tar, pos + 1);
//     console.log('这是第' + num + '个' + tar + '在' + pos + '位置');
// }

str = 'ciusbcoiawsbcbvoawuee';
var tar = 'c';
var num = 0;
var index = str.indexOf(tar);
console.log(str);

while (index !== -1) {
    console.log(index);
    num++;
    index = str.indexOf(tar, index + 1);
}
console.log(num);

