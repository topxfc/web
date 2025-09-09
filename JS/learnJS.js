// 变量类型可变 JS是动态语言
var x = 1;
console.log(x);
x = 'fuck';
console.log(x);

// 八进制 0o开头
var num = 0o10;
console.log(num);

// 十六进制
var num1 = 0xa;
console.log(num1);

// 
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE * 2);
console.log('fuck' - 100);

console.log(isNaN(x));
console.log('f"uc"k');
console.log('f\tu\nc\bk');

var str = '123456\n78 9 0'
console.log(str.length)

console.log('fuck' + ' you');
console.log('fuck' + ' you ' + 18 + ' times');
console.log('12' + 12);

// var times = prompt('1+1=?')
// if (times == 2) {
//     alert(times + ' ?回答正确')
// } else {
//     alert('回答错误')
// }

console.log(true + 10);
console.log(false + 10);

var un
console.log(un + 1 + 'fuck');

var space = null
console.log(space + 1);
console.log(space + 'fuck');

console.log(typeof un);
console.log(typeof space);

console.log(typeof num);
console.log(typeof num.toString());

console.log(typeof String(num));
console.log(num + '');

console.log(parseInt(3.14));
console.log(parseFloat(3.14));
console.log(parseInt('120px'));
console.log(parseInt('rem120px'));
console.log(Number('123'));

console.log('12' - 0);
console.log('12' - '12');
console.log('12' + 0);

console.log(Boolean(NaN));
console.log(Boolean('NaN'));

// 算数运算符

console.log(1 + 2);
console.log(1 - 2);
console.log(1 * 2);
console.log(1 / 2);
console.log(1 % 2);
console.log(1 ** 2);

console.log(0.1 + 0.2);

// 递增和递减运算符
x = 1;
console.log(++x);
console.log(--x);
// 后置自增
console.log(x++ + 10);
console.log(x);

// 比较运算符
console.log(18 == '18');
console.log(18 === '18');

// 逻辑运算符
console.log(3 > 5 && 3 > 2);
console.log(3 > 5 || 3 > 2);
console.log(!true);

// 短路运算
console.log(123 && 456);
console.log(0 && 456);
console.log(0 || 456);

// 流程控制
if (true) {
    console.log('true');

} else {
    console.log('false');

}

if (false) {

} else if (true) {

}

// 三元表达式
console.log(num > 5 ? 'yes' : 'no');

// switch
switch (2) {
    case 1:
        console.log('this is 1');
        break;

    case '2':
        console.log('this is "2"');
        break

    case 2:
        console.log('this is 2');
    // break;

    case 3:
        console.log('如果没有break 后面会直接执行下一个case');
        break;

    default:
        console.log('idk');
        break;
}

// 如果没有break 后面会直接执行下一个case

// 循环
for (var i = 1; i <= 3; ++i) {
    console.log(i);
}

for (let i = 0; i < 5; i++) {
    console.log('★');

}

str = ''
for (let i = 0; i < 5; i++) {
    str += '★';
    console.log(str);
}

// str = ''
// for (var i = 1; i <= 9; i++) {
//     for (var j = 1; j <= i; j++) {
//         str += j + 'x' + i + '=' + (i * j < 10 ? i * j + ' ' : i * j) + " "

//     }
//     console.log(str);
//     str = ''
// }

str = ''
for (var i = 1; i <= 9; i++) {
    for (var j = 1; j <= i; j++) {
        str += j + 'x' + i + '=' + i * j + '\t'

    }
    str += '\n'
}
console.log(str);

// while

var i = 0;
do {
    console.log('how are you?');
    i++;
} while (i != 3);

// 数组
var arr1 = new Array();
var arr2 = ['1', 2, true];

console.log(arr2);
console.log(arr2[0]);
console.log(arr2.length, arr2[1]);
arr2.length += 2;
console.log(arr2.length);
console.log(arr2);
console.log(arr2[3], arr2[4]);
arr2[5] = 'fuck';
console.log(arr2);

arr1 = [2, 0, 1, 0, 16, 7, 18, 0, 0, 20, 3];
var newArr = [];
for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] != 0) {
        newArr[newArr.length] = arr1[i];
    }
}
console.log(newArr);

// 冒泡排序
// for (var i = 0; i < newArr.length; i++) {
//     for (var j = i + 1; j < newArr.length; j++) {
//         if (newArr[i] > newArr[j]) {
//             var tmp = newArr[j];
//             newArr[j] = newArr[i];
//             newArr[i] = tmp;
//         }
//     }
//     console.log(newArr);
// }

// for (var i = 0; i <= newArr.length - 1; i++) {
//     for (var j = 0; j <= newArr.length - i - 1; j++) {
//         if (newArr[j] > newArr[j + 1]) {
//             var temp = newArr[j];
//             newArr[j] = newArr[j + i];
//             newArr[j + i] = temp;
//         }
//     }
// }

// 函数
function fuck(name) {
    console.log('fuck' + ' ' + name);

}
fuck(newArr)
fuck('a', 'b', 'c')
fuck()

// return
function fuckreturn(name) {
    return 'fuck' + ' ' + name;
    console.log('code after return is not executed');

}

console.log(fuckreturn('a'));
console.log(fuck("return what?"));

// argument
function fuckArgument() {
    console.log(arguments);
    console.log(arguments[0]);
    console.log(arguments.length);

}

fuckArgument(1, 2, 3, 4, 5)
// 伪数组 可用length 无法用真正的数组的方法

// 函数相互调用
function fn1() {
    console.log('fn1');
    fn2();

}

fn1()

function fn2() {
    console.log('fn2');

}

// JavaScript 是动态语言，但 函数声明 会在代码执行前被提升，因此即使 fn2定义在 fn1调用之后，fn1仍然可以调用它。这是 JavaScript 的设计特性之一。

// 匿名函数
var fuckfun = function () {
    console.log('匿名函数');

}
fuckfun();

// 作用域
// 全局作用域：script标签之间 全局变量 局部作用域：函数内部 局部变量

// 链式作用域 就近原则
num = 10;
function fuckchain() {
    var num = 20;
    function fuckchain2() {
        console.log(num);
    }
    fuckchain2();
}
fuckchain();

// 预解析 将所有变量和函数声明"提升"到它们所在作用域（全局和局部作用域）的顶部 函数声明优先于变量声明​
// 变量提升只提升声明var preNum，不提升赋值preNum = 10 
console.log(preNum);
var preNum = 10;

fuckPreAnalysis();
function fuckPreAnalysis() {
    console.log(preNum);
}

// fuckPreAnalysis2();
// var fuckPreAnalysis2 = function () {
//     console.log('preNum');
// }

// var a = b = c = 9; 相当于 var a = 9 ; b = 9 ; c = 9; b c没有var 在函数内部但是是全局变量
// 集体声明 var a = 9, b = 9, c = 9;

fuckabc();
console.log(c, b);
console.log(a); //局部变量 会报错

function fuckabc() {
    var a = b = c = 9;
    console.log(a, b, c);

}
