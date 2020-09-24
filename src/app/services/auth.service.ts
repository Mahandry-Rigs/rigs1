export class AuthService {
isAuth = false;

signIn(){

        this.isAuth = true;
        // return new Promise(
        //    executor: (resolve, reject) => {
        //                 setTimeout(
        //                         callback:() => {
        //                                 this.isAuth = true;
        //                                 resolve(true);
        //                         }, ms:2000
        //                 );
        //         }   
        //  );
}

signOut() {
        this.isAuth = false;
}

}