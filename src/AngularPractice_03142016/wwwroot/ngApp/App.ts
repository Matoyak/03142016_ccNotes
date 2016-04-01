namespace AngularPractice {
    // ReSharper disable TsNotResolved
    angular.module("AngularPractice", []);


    class ContactListController {

        public contactFields: any = [
            "Name",
            "Phone",
            "eMail",
            "Date"
        ];

        public contacts: Contact[] = [
            new Contact("Mason", "555-555-5555", "example@domain.com"),
            new Contact("Rachel", "325-555-5555", "myExample@domain.net")
        ];

        public dups: number[] = [
            1, 2, 3, 4, 5, 1, 2, 3, 4, 5
        ];

        public submitData(name: string, phone: string, email: string) { this.contacts.push(new Contact(name, phone, email)); }
    }

    class Contact {
        public friendDate: Date;
        constructor(public name: string, public phone: string, public email: string) { this.friendDate = new Date(); }
    }

    angular.module("AngularPractice").controller("contactListController", ContactListController);

    //FILTER FACTORY
    function startsWith() {
        //Actual Filter (first parameter = input) (second parameter onwards = expressions)
        return (input: Contact[], exp1: string, exp2: string) => {
            return input.filter((ele: any) => ele[exp1].startsWith(exp2));
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
    //angular.module("AngularPractice").filter("unique", unique0);
    // ReSharper restore TsNotResolved
}

