var Employee = /** @class */ (function () {
    function Employee() {
        var _this = this;
        this.printEmployee = function () {
            console.log(_this.fullName + "\uC758 \uB098\uC774\uB294 " + _this.age + "\uC0B4\uC774\uACE0 \uC9C1\uC5C5\uC740 " + _this.job + "\uC785\uB2C8\uB2E4.");
        };
    }
    return Employee;
}());
var employee1 = new Employee();
employee1.fullName = '주련';
employee1.age = 25;
employee1.job = '학생';
employee1.printEmployee();
