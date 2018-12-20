var notify = require("gulp-notify");
var config = require('../../config.json');

exports.handleError = function() {
    if (!config.notify) {
        return false
    }
    var args = Array.prototype.slice.call(arguments);
    notify.onError({
        title: 'error',
        message: '<%=error.message %>'
    }).apply(this, args); //替换为当前对象
    this.emit(); //提交
};

/**
 * 使用notify 处理消息提示
 * @param message
 */
exports.handleNotify = function(message) {
    return notify(function() {
        if (!config.notify) {
            return false
        }
        return message
    })
}
