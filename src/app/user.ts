export class User {
    constructor(
        public name: string, //typescrit shorthand syntax of a constructor
        public email: string,
        public phone: number,
        public topic: string,
        public timePreference: string,
        public subscribe: boolean
    ) { }

}
