/**
 * Created by author on time
 */

class tempCtrl {
    constructor(http) {
        [this.http, this.name] = [http, 'temp'];
    }
}
tempCtrl.$inject = ['http'];
export default tempCtrl