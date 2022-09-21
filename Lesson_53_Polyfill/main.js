//Polyfill; định nghĩa hàm mà trình duyệt cũ không xài được

if (!String.prototype.includes) {
    String.prototype.includes = function (search, start) {
        'use strict';

        if (search instanceof RegExp) {
            throw TypeError('first argument must be a RegExp');
        }
        if(start === undefined) {
            start = 0;
        };
        return this.indexOf(search, start) !== -1
    }
}

// var title = 'Javascript';

'Javascript course'.includes('Javascript', 0)