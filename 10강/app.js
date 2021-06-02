var UserInfo = /** @class */ (function () {
    function UserInfo(_userName, _userAge, userJob) {
        var _this = this;
        this._userName = _userName;
        this._userAge = _userAge;
        this.userJob = userJob;
        this.printUserInfo = function () {
            console.log(_this._userName + "\uC758 \uB098\uC774\uB294" + _this._userAge + "\uC138 \uC785\uB2C8\uB2E4. \uC9C1\uC5C5\uC740" + _this.userJob + " \uC785\uB2C8\uB2E4.");
        };
    }
    Object.defineProperty(UserInfo.prototype, "userName", {
        get: function () {
            return this._userName;
        },
        set: function (value) {
            this._userName = value;
        },
        enumerable: false,
        configurable: true
    });
    return UserInfo;
}());
var userinfo = new UserInfo('주련', 25, '학생');
userinfo.userName = '한주련';
userinfo.printUserInfo();
