console.log("こんにちは");

const numbers =  [1,2,3,4,5]
console.log(numbers);

const doubled = numbers.map(num => num * 2);
console.log("2倍にした結果:",doubled);

//変数とデータ型練習
const name = "太郎";
let age = 20;
age = 21;

console.log(name);
console.log(age);

//データ型
const text = "文字列";
const number = 100;
const boolean = true;
const nothing = null;
const notdefind = undefined;

console.log(typeof text);
console.log(typeof number);
console.log(typeof boolean);

//テンプレートリテラル練習
const userName = "山田"
const useAge = 22

const message1 = "私の名前は" + userName + "年齢は" + useAge;

console.log(message1);

//テンプレートリテラル
const message2 = `私の名前は${userName}で、年齢は${useAge}です`

console.log(message2);

//計算ver
const price = 1000
console.log(`税込価格:${price*1.1}円`);

const line =`
1
2
3`

console.log(line);


//条件分岐練習
const score = 10;

if (score >= 11) {
  console.log("11点です");
} else if (score >=9) {
  console.log("良好です");
} else if (score >=8) {
  console.log("合格です");
} else {
  console.log("不合格です");
}

//比較演算子
const num1 =10;
const num2 =10;

console.log(num1===num2);

//論理演算子←ここの理解いまいち？
const age1 =20;
const License =true;

if(age1 >=18 && License) {
  console.log("運転できます");
}

if (age < 18 || !License) {
  console.log("運転できません");
}


const testscore =100;

if(testscore >=100) {
  console.log("満点です！");
} else if (testscore >= 90) {
  console.log("惜しい！");
} else if (testscore >=80) {
  console.log("頑張りました！");
} else {
  console.log("頑張りましょう！")
}

const num3 =20;
const num4 =18;

console.log(num3===num4);

//三項演算子
const age3 =17;

const status2 = age3 >= 18 ? "成人":"未成年";
console.log(status2);

const point =150;
const rank = point >= 100 ? "ゴールド":"シルバー";
console.log(`あなたのランク:${rank}`);

//switch文
const fruit ="apple";

switch (fruit) {
  case "apple":
    console.log("りんごです");
    break;
  case "banana":
    console.log("バナナです");
    break;
  case "orange":
    console.log("オレンジです")
    break;
  default:
    console.log("不明な果物です");
}

//曜日判定
const day =3;

switch(day) {
  case 1:
    console.log("月曜日");
    break;
  case 2:
    console.log("火曜日");
    break;
  case 3:
    console.log("水曜日");
    break;
  case 4:
    console.log("木曜日");
    break;
  case 5:
    console.log("金曜日");
    break;
    default:
      console.log("その他の曜日です");
}

//for文
//基本的なfor文
for (let i =0;i<5;i++) {
  console.log(`カウント:${i}`);
}

//1～10まで足し算
let sum =0;
for (let i=1;i<=10;i++) {
  sum +=i//ここよく分からない！
}
console.log(`合計:${sum}`);

for (let i=0;i < 10;i +=2) {
  console.log(i);
}

for (let i=5;i>0;i--) {
  console.log(i);
}

const practice =100 
for (let i=1;i<100;i++) {
  console.log(i);
}

//while文
let count =0;
while(count < 5) {
  console.log(`カウント:${count}`);
  count++
}

let count1=1;
while(count1 < 100) {
  console.log(`カウント:${count1}`);
  count1++
}

//do-while(最低1回は実行される)
let num=0;
do {
  console.log(`実行:${num}`);
  num++;
} while (num < 3);



let x=0;
while (x <=5) {
  console.log(x);
  x++;//←ここないと無限ループ！
}

//配列
//配列の作成
const fruits = ["apple","banana","orange"];
console.log(fruits);

//要素へのアクセス
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

//配列の長さ
console.log(fruits.length);

//配列の要素の変更
fruits[1]="grape";
console.log(fruits);

//様々な型を混在させる
const mixed = [1,"text",true,null];
console.log(mixed);

//配列メソッド
const numbers1 = [1,2,3]

//push:末尾に追加する
numbers1.push(4);
console.log(numbers1);

numbers1.push(5,6);
console.log(numbers1);

//pop:末尾を削除して取得
const last = numbers1.pop();
console.log(last);
console.log(numbers1);

//unshift:先頭に追加
numbers1.unshift(0);
console.log(numbers1);
console.log(numbers1);

//shift:先頭を削除して取得
const first = numbers1.shift();
console.log(first);
console.log(numbers1);

const colors = ["red","green","blue"];

//従来のfor文
for (let i =0;i < colors.length;i++) {
  console.log(colors[i]);
}

//forEachを使う
colors.forEach(function(color) {
  console.log(color);
});

//アロー関数で書く
colors.forEach(color => {
  console.log(color);
} );

//インデックスも取得
colors.forEach((color,index) => {
  console.log(`${index}: ${color}`);
});

//配列メソッド(map)
const prices =[100,200,300];

//全ての価格を2倍にする
const double = prices.map(price => price*2);
console.log(double);

//元の配列は変わらない
console.log(prices);

//税込価格を計算
const taxIncluded = prices.map(price => price * 1.1);
console.log(taxIncluded);

//文字列の配列を作る
const names = ["太郎","花子","次郎"];
const greetings = names.map(name => `こんにちは、${name}さん`);
console.log(greetings);    //↑ここにnamesで定義した太郎・花子・次郎を入れている。

const dog = ["shiba","tiwawa","buldog"]
const dogs = dog.map(wanko => `こんにちは、${wanko}`);
console.log(dogs);

//配列メソッドfilter
const ages =[15,22,18,30,12,25];

//18歳以上だけを取得
const adults = ages.filter(age => age >= 18);
console.log(adults);

//偶数だけ
const evenNumbers = ages.filter(age => age % 2 ===0 );
console.log(evenNumbers);

//文字列の配列で長さが5以上のものだけ
const words =["apple","car","banana","dog","elephant"];
const longWords = words.filter(word => word.length >= 5);
console.log(longWords);

//配列メソッドfind
const users = [
  {id: 1,name:"太郎",age:25},
  {id:2,name:"花子",age:30},
  {id:3,name:"次郎",age:20}
];

//idが2のユーザーを探す
const user = users.find(user => user.id===2);
console.log(user);

//30歳以上のユーザーを探す
const over30 = users.find(user => user.age>=30);
console.log(over30);

//見つからない場合はundifind
const notfound = users.find(user => user.id ===999);
console.log(notfound);

//オブジェクト
const person = {
  name :"山田太郎",
  age:25,
  city:"東京"
};

//プロパティへのアクセス
console.log(person.name);
console.log(person.age);

//ブラケット記法
console.log(person["city"]);

//プロパティの変更
person.age=26;
console.log(person.age);

//プロパティの追加
person.job ="エンジニア";
console.log(person);

//メソッド
const car= {
  brand:"Toyota",
  model:"Prius",
  start: function() {
    console.log("エンジンスタート");
  }
};

car.start();

//関数の基本
//関数宣言
function greet(name) {
  console.log(`こんにちは、${name}さん`);
}

greet("太郎");

//戻り値がある関数
function add(a,b) {
  return a+b;
}

const result = add(5,3);
console.log(result);

//デフォルト引数
function introduce(name,age =20) {
  console.log(`${name}、${age}歳です`);
}

introduce("花子",25);
introduce("次郎");

//アロー関数
function multiplay(a,b) {
  return a*b;
}

//アロー関数を使った場合
const multiplay2 = (a,b) => {
  return a*b;
};

//1行なら{}とreturnを省略できる
const multiplay3 = (a,b) => a*b;

console.log(multiplay3(4,5));

//引数が1つなら()も省略可能
const doubles = num => num *2;
console.log(doubles(10));

//引数がない場合は()が必要
const sayHello = () => console.log("Hello!");
sayHello();

//オブジェクトを返す場合
const makePerson = (name,age) => ({ name:name,age:age});
console.log(makePerson("太郎",25));

//分割代入
//配列から値を取り出す
const colors2 = ["red","green","blue"];
const first2 = colors2[0];
const second = colors2[1];
const third = colors2[2];

//分割代入
const [color1,color2,color3] = ["red","green","blue"];
console.log(color1);
console.log(color2);
console.log(color3);

//必要なもののみ取得
const [firstColor,secondColor, thirdColor] = ["red","green","blue"];
console.log(firstColor);
console.log(thirdColor);

const [a,b,c ="yellow"] = ["red","green"];
console.log(a);
console.log(c);

//値の入れ替え
let x2 = 10;
let y2 = 20;
[x2 ,y2] = [y2,x2];
console.log(x2);
console.log(y2);


//分割代入(オブジェクト)
const user2 = {
  name2:"太郎",
  age2 :25 ,
  city:"東京"
};

const name2 =user2.name2;
const age2 = user2.age2;

console.log(name2);
console.log(age2);

//分割代入
const {name: userName2,age:userAge,userCity:city} = user;
console.log(userName2);
console.log(userAge);

const {country = "日本"} = user;
console.log(country);

const employee = {
  id: 1,
  name:"山田",
  addres: {
    city:"大阪",
    zip:"123-4567"
    }
};

const {addres: {city:empCity,zip}} = employee;
console.log(empCity);
console.log(zip);