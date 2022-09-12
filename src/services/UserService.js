import axios from "axios";
export class UserService {
  static url = "https://gorest.co.in/public/v2/users";
  static getAllUsers() {
    let usersUrl = this.url;
    return axios.get(usersUrl);
  }
  static getSingleUser(userId) {
    let userIdUrl = `${this.userIdUrl}/${userId}`;
    return axios.get(userIdUrl);
  }
  static createSingleUser(user) {
    return axios.post(this.url, user);
  }
  static updateUser(user, userId) {
    let userIdUrl = `${this.userIdUrl}/${userId}`;
    return axios.put(userIdUrl, user);
  }
  static deleteUser(userId) {
    let userIdUrl = `${this.userIdUrl}/${userId}`;
    return axios.delete(userIdUrl);
  }
}
