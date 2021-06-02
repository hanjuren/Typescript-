# 타입 스크립트 공부하기.

[땅콩유튜브 참고](https://www.youtube.com/watch?v=VJ8rvsw2j5w&list=PLJf6aFJoJtbUXW6T4lPUk7C66yEneX7MN)
      
## 1.타입 스크립트란?  
* 자바스크립트에 타입을 부여한 언어이다.
* 자바스크립트를 확장한 언어이다.
* ES5 문법을 그대로 사용이 가능하다.
* 바벨과 같은 별도의 트랜스파일러 없이도 자바스크립트 엔진에서 실행이 가능하다.
* 변수를 지정할 때 변수 값에 데이터 타입을 지정 할 수 있다.
* 객체지향적 언어이다.


---

## 2.타입스크립트 사용방법
.ts 형식 파일을 터미널에서 컴파일 시켜준다.

```
tsc app.ts
```
명령어를 실행하면 컴파일된 app.js 파일이 생성된다.  
하지만 app.ts파일이 에러가 표시된다. 이는 다음과 같이 명령어를 입력하여 해결한다.

```
tsc --init
```
해당 명령어 실행 후 tsconfig.json 파일이 생성되며 에러가 해결된다.

파일 업데이트마다 컴파일을 일일히 해주지 않고 자동적으로 컴파일 시키기 위한 명령어
```
tsc -w
```
-w 는 .ts 파일의 변동을 감지하여 컴파일 해주는 명령어이다.

---

## 3.타입 추론
타입 표기가 없는 경우 코드를 읽고 분석하여 타입을 유추해낸다.

---

## 4.타입 명시
변수를 선언할때 변수 값의 타입을 명시하여 변수 값의 데이터 타입을 지정

:void = 아무것도 반환하지 않는 함수라는 의미

타입에 대한 명시가 많으면 좋다.

---

## 5.인터페이스
대문자로 네이밍 시작  
인터페이스는 코드 컴파일시 코드에 아무런 영향을 주지 않는다.
  
인터페이스 생성
```js
interface Student {
  studentName: string;
  age: number;
  studentId: number;
}
```

인터페이스 값은 필수로 명시되어야 하는데 선택적 프로퍼티로도 사용이 가능하다.

```js
interface Student {
  studentName: string;
  age?: number;
  studentId: number;
}
```
선택적 프로퍼티로 사용하고자 하는 변수에 ?를 사용하면 된다.

---

## 6.ReadOnly
읽기전용 프로퍼티는 객체 생성시 할당된 프로퍼티 값을 바꿀 수 없다.

```js
interface Student {
  studentName: string;
  age?: number;
  readonly studentId: number;
  addComment?: (comment: string) => string;
}
```
readonly 옵션으로 읽기전용 프로퍼티로 생성이 가능하다.  
이렇게 생성된 프로퍼티는 수정이 불가능하다.

```js
function saveStudent (student: Student):void {
  student.studentId = 2;
}
```
위 함수에서 읽기전용 프로퍼티인 studentId를 수정하려고 하면 다음과 같은 에러가 표시된다.

<span style="color:red">**읽기 전용 속성이므로 'studentId'에 할당할 수 없습니다.ts(2540)**</span>

---

## 7.Enum & Literal type
프로퍼티의 값을 타입으로 지정하지 않고 실제 값만 받기 원할때 열거형과 리터럴 타입을 이용하여 프로퍼티 값을 미리 정해줄 수 있다.

### 7-1.Enum
Enum은 연관 아이템들을 묶어서 표현할 수 있는 수단의 의미를 가진다.  
Enum적용은 다음과 같다.

```js
enum GenderType {
  Male,
  Female,
};
```
생성된 Enum을 기존의 인터페이스에 적용할 수 있다.

```js
interface Student {
  studentName: string;
  age?: number;
  gender: GenderType; // 기존 string에서 Enum타입으로 바뀜
  readonly studentId: number;
  addComment?: (comment: string) => string;
}
```

gender 값은 Male, Female 값 만을 가질 수 있기 때문에 객체의 gender 값을 재설정 해주어야 한다.

```js
function getStudent(studentName: string): Student{
  return {
    studentName: 'hahaha',
    age: 12,
    gender: GenderType.Male, // GenderType 값을 적용해준다.
    studentId: 1,
  }
}
```

Enum을 생성하고 컴파일하게 되면 js파일에서는 해당 Enum을 다음과 같이 변환해준다.

```js
var GenderType;
(function (GenderType) {
    GenderType[GenderType["Male"] = 0] = "Male";
    GenderType[GenderType["Female"] = 1] = "Female";
})(GenderType || (GenderType = {}));
;
```
생성된 프로퍼티의 순서대로 인덱스 값을 가지며 숫자 열거형으로 생성이 된다.  
이것을 타입스크립트에서는 문자열 열거형으로 사용이 가능하다.

```js
// string타입의 값을 선언
enum GenderType {
  Male = 'male',
  Female = 'female',
};

--- 
// 문자열 값을 가지게 됨
(function (GenderType) {
    GenderType["Male"] = "male";
    GenderType["Female"] = "female";
})(GenderType || (GenderType = {}));
;
```

### 7-2.리터럴 타입
Enum과 같은 결과를 보이지만 조금더 편리하고 간결하게 작성 할 수 있다.  

작성 방법은 다음과 같다.
```js
interface Student {
  studentName: string;
  age?: number;
  //gender: GenderType;
  gender: 'male' | 'female' | 'genderNeutral', // | 기호를 사용
  readonly studentId: number;
  addComment?: (comment: string) => string;
}
```

Enum에서 GenderType.???방식으로 사용했던것과 달리 | 사이에 적힌 값을 적용해주면 된다.

```js
function getStudent(studentName: string): Student{
  return {
    studentName: 'hahaha',
    age: 12,
    //gender: GenderType.Male,
    gender: 'male',
    studentId: 1,
  }
}
```

---

## 8. Any, Union Type, Type Aliases, Type Guards

### 8-1. any
어떠한 값이든 변수에 할당이 가능하다는 의미
```js
let someValue: any = 5;
someValue = 'hanjure';
```
위와 같이 어떤한 타입이든 변환이 가능하지만 타입스크립트에서 효과적인 유지 보수를 위해서 타입 정보를 정확히 명시해주면 좋다.

### 8-2. union type
변수에 제한된 타입을 동시에 지정 하고 싶을때 union type을 사용한다.
```js
let someUnionValue: string | number = 5;
someUnionValue = 'hanjuren';
```
| 기호로 사용할 타입을 지정해주기만 하면 된다. 

### type Aliases
반복하여 사용하는 코드를 타입으로 지정할 수 있다.  
재사용 측면에서의 효율성이 좋다.
```js
type strOrNum = string | number; // 타입을 코드로 지정
let aliasesType: strOrNum = 5; // 지정된 코드를 사용
```

### Type Guards
```js
type strOrNum = string | number;
let itemPrice: number;

const setItemPrice = (price: strOrNum):void => {
  itemPrice = price
};

setItemPrice(50);

>>>

//'strOrNum' 형식은 'number' 형식에 할당할 수 없습니다.
//'string' 형식은 'number' 형식에 할당할 수 없습니다.ts(2322)
```
type aliases를 사용하여 strOrNum는 string, number 타입을 사용할 수 있게 했지만 한가지의 타입만을 받는 변수에 사용한다면 에러가 난다  
이럴때는 타입을 보호하는 Type Guards를 사용하면 된다.

```js
type strOrNum = string | number;
let itemPrice: number;

const setItemPrice = (price: strOrNum):void => {
  if (typeof price === 'string') {
    itemPrice = 0;
  } else {
    itemPrice = price;
  }
};

setItemPrice(50);
```
위와 같이 typeof Operator를 사용하여 변수의 데이터 타입을 확인하는 과정을 수행 해주면 된다. 이러한 과정을 타입 가드라고 한다.

---

## 9. 함수의 타이핑 선택적 매개변수, 기본 매개변수

함수의 타입명시

함수의 반환 (return) 타입
```js
function 함수이름 (매개변수1, 매개변수2): 함수의 반환 타입 {
  ---
};
```
:void 타입 
- 아무것도 반환하지 않는 함수의 반환 값으로만 사용될 수 있는 타입

함수의 매개변수 (Parameter) 타입
```js
function 함수이름 (매개변수1: 변수의 타입, 매개변수2: 변수의 타입): 함수의 반환 타입 {
  ---
};
```
선택적 매개변수
```js
function 함수이름 (매개변수1: 변수의 타입, 매개변수2?: 변수의 타입): 함수의 반환 타입 {
  ---
};
```
- 선택적 매개변수들은 필수 매개변수 뒤에 위치해야한다.

매개변수의 기본값 지정
```js
function 함수이름 (매개변수1: 변수의 타입, 매개변수2: 변수의 타입 = '지정하고 싶은 기본값'): 함수의 반환 타입 {
  ---
};
```
- 기본값을 지정해줄때는 매개변수의 타입을 지정해주지 않아도 타입추론으로 타입이 무엇인지 알 수 있다.

---
## 10. OOP 객체지향 프로그래밍, 클래스, 오브젝트

### 객체지향 프로그래밍
연관된 변수와 함수들을 한덩어리로 묶어서 구조화하여 표현하는 방식

* Class
1. 객체를 만들어 내기 위한 설계도, 생산틀

```js
class Employee {
  fullName: string;
  age: number;
  job: string;
  
  printEmployee = (): void => {
    console.log(`${this.fullName}의 나이는 ${this.age}살이고 직업은 ${this.job}입니다.`);
  }
}

let employee1 = new Employee();
employee1.fullName = '주련';
employee1.age = 25;
employee1.job = '학생';
employee1.printEmployee();
```

```cmd
C:\Users\juren\OneDrive\바탕 화면\TypeScript\9강>node app.js
주련의 나이는 25살이고 직업은 학생입니다.
```
클래스에 각각의 프로퍼티 설정 후 인스턴스를 생성하여 호출하면 클래스를 사용할 수 있습니다.

---
## 11. 클래스 생성자, 접근 제한자, Getter, Setter

### 생성자 (Constructor)
코드를 조금더 깔끔하고 간결하게 사용 할 수 있음  
생성자는 클래스로 부터 객체를 생성할 때 호출되며 객체의 초기화를 담당한다.  

```js
class UserInfo {
  userName: string;
  userAge: number;
  userJob: string;
  // 생성자를 만들어서 인스턴스 생성시 프로퍼티의 값을 할당해준다.
  constructor(userName: string, userAge: number, userJob: string) {
    this.userName = userName;
    this.userAge = userAge;
    this.userJob = userJob;
  }

  printUserInfo = (): void => {
    console.log(`${this.userName}의 나이는${this.userAge}세 입니다. 직업은${this.userJob} 입니다.`)
  }
}
// 이전처럼 각각의 프로퍼티에 값을 지정하지 않아도 된다.
let userinfo: UserInfo = new UserInfo('주련', 25, '학생');
userinfo.printUserInfo();
```

### 접급제한자
클래스의 멤버변수와 메소드에 적용될 수 있는 키워드  
클래스 외부로 부터의 접근을 통제하여 버그를 줄이고 코드의 안정성을 향상시킬 수 있다는 장점이 있다.

* public : 어디서든 접근가능
* private: 클래스 내에서만 접근 가능
* protected: 클래스 내부, 상속받은 자식 클래스에서 접근가능

```js
class UserInfo {
  // userName을 클래스 내부에서만 접근 가능하게 수정
  private userName: string;
  userAge: number;
  userJob: string;

  constructor(userName: string, userAge: number, userJob: string) {
    this.userName = userName;
    this.userAge = userAge;
    this.userJob = userJob;
  }

  printUserInfo = (): void => {
    console.log(`${this.userName}의 나이는${this.userAge}세 입니다. 직업은${this.userJob} 입니다.`)
  }
}

let userinfo: UserInfo = new UserInfo('주련', 25, '학생');
// 직접적인 접근이 불가능..
userinfo.userName = 'jure';
/*
(property) UserInfo.userName: string
'userName' 속성은 private이며 'UserInfo' 클래스 내에서만 액세스할 수 있습니다.ts(2341)
*/
userinfo.printUserInfo();
```

### Getter, Setter
클래스 내부에서만 접근이 가능한 프로퍼티를 외부에서도 접근이 가능하게 해준다.

```js
class UserInfo {
  private _userName: string;
  userAge: number;
  userJob: string;

  constructor(userName: string, userAge: number, userJob: string) {
    this._userName = userName;
    this.userAge = userAge;
    this.userJob = userJob;
  }

  get userName () { // private으로 선언된 userName에 접근
    return this._userName;
  }
  set userName (value: string) { // private으로 선언된 userName 값을 변경
    this._userName = value; 
  }

  printUserInfo = (): void => {
    console.log(`${this._userName}의 나이는${this.userAge}세 입니다. 직업은${this.userJob} 입니다.`)
  }
}

let userinfo: UserInfo = new UserInfo('주련', 25, '학생');
userinfo.userName = '한주련'
userinfo.printUserInfo();
```
```cmd
>node app.js
한주련의 나이는25세 입니다. 직업은학생 입니
다.
```
get, set 함수는 외부에서 호출하여 사용하지만 클래스 내부에 선언해야 한다. 

### Access Mddifiers
constructor 매개변수에 직접 적용하는 방법

```js
class UserInfo {
  // constructor에 Access Mddifiers 적용
  constructor(
    private _userName: string, 
    private _userAge: number, 
    userJob: string) {
  }

}
```
객체가 생성될 때 constructor의 매개변수로 전달된 값을 자동으로 객체의 프로퍼티 값으로 초기화 할당 해준다.



