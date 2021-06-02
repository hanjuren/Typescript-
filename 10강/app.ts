class UserInfo {

  constructor(
    private _userName: string, 
    private _userAge: number, 
    public userJob: string) {
  }

  get userName () {
    return this._userName;
  }
  set userName (value: string) {
    this._userName = value; 
  }

  printUserInfo = (): void => {
    console.log(`${this._userName}의 나이는${this._userAge}세 입니다. 직업은${this.userJob} 입니다.`)
  }
}

let userinfo: UserInfo = new UserInfo('주련', 25, '학생');
userinfo.userName = '한주련';
userinfo.printUserInfo();