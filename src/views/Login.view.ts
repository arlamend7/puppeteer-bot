import axios from "axios";
import { from, Observable } from "rxjs";

export class LoginView {
  static Signin(
    username: string,
    password: string,
    rememberMe: boolean = null
  ): Observable<any> {
    var body = { username, password, rememberMe };

    return from(
      axios
        .post<any>("", body)
        .then((x) => x.data)
    );
  }
}
