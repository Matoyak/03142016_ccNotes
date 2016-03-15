var AngularPractice;
(function (AngularPractice) {
    // ReSharper disable TsNotResolved
    angular.module("AngularPractice", []);
    var ContactListController = (function () {
        function ContactListController() {
            this.contactFields = [
                "Name",
                "Phone",
                "eMail",
                "Date"
            ];
            this.contacts = [
                new Contact("Mason", "555-555-5555", "example@domain.com"),
                new Contact("Rachel", "325-555-5555", "myExample@domain.net")
            ];
            this.dups = [
                1, 2, 3, 4, 5, 1, 2, 3, 4, 5
            ];
        }
        ContactListController.prototype.submitData = function (name, phone, email) { this.contacts.push(new Contact(name, phone, email)); };
        return ContactListController;
    }());
    var Contact = (function () {
        function Contact(name, phone, email) {
            this.name = name;
            this.phone = phone;
            this.email = email;
            this.friendDate = new Date();
        }
        return Contact;
    }());
    angular.module("AngularPractice").controller("contactListController", ContactListController);
    //FILTER FACTORY
    function startsWith() {
        //Actual Filter (first parameter = input) (second parameter onwards = expressions)
        return function (input, exp1, exp2) {
            return input.filter(function (ele) { return ele[exp1].startsWith(exp2); });
        };
    }
    //function unique(input: any[],exp0: string) {
    //    return (input: any[]) => {
    //        //reduce function
    //        return input.reduce((value, ele, idx) => {/*check for */}, input[0]);
    //    }
    //}
    //function unique0() {
    //    let uniqueList: any[] = [];
    //    return (input: any[]) => {
    //        //reduce function
    //        for (let i of input) {
    //            if (input.indexOf(uniqueList) === -1) {
    //            uniqueList.push(input[i]);
    //            }
    //        }
    //        return uniqueList;
    //    }
    //}
    angular.module("AngularPractice").filter("startsWith", startsWith);
})(AngularPractice || (AngularPractice = {}));
//# sourceMappingURL=App.js.map