/* Alias of Object.prototype.toString.
 *
 * |Name  |Type  |Desc                                |
 * |------|------|------------------------------------|
 * |val   |*     |Source value                        |
 * |return|string|String representation of given value|
 */

/* example
 * objToStr(5); // -> '[object Number]'
 */

/* module
 * env: all
 * test: all
 */

var ObjToStr = Object.prototype.toString;

exports = function(val) {
    return ObjToStr.call(val);
};
