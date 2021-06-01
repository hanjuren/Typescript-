# 타입 스크립트 공부하기.

[땅콩유튜브 참고](https://www.youtube.com/watch?v=VJ8rvsw2j5w&list=PLJf6aFJoJtbUXW6T4lPUk7C66yEneX7MN)
      
## 타입 스크립트란?  
* 자바스크립트에 타입을 부여한 언어이다.
* 자바스크립트를 확장한 언어이다.
* ES5 문법을 그대로 사용이 가능하다.
* 바벨과 같은 별도의 트랜스파일러 없이도 자바스크립트 엔진에서 실행이 가능하다.
* 변수를 지정할 때 변수 값에 데이터 타입을 지정 할 수 있다.
* 객체지향적 언어이다.
* 

## 타입스크립트 사용방법
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

## 타입 추론
타입 표기가 없는 경우 코드를 읽고 분석하여 타입을 유추해낸다.

## 타입 명시
변수를 선언할때 변수 값의 타입을 명시하여 변수 값의 데이터 타입을 지정

:void = 아무것도 반환하지 않는 함수라는 의미

타입에 대한 명시가 많으면 좋다.

## 인터페이스
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

## ReadOnly
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

