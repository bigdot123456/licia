/* Check if predicate return truthy for any element.
 *
 * |Name     |Type        |Desc                                          |
 * |---------|------------|----------------------------------------------|
 * |obj      |array object|Collection to iterate over                    |
 * |predicate|function    |Function to invoked per iteration             |
 * |ctx      |*           |Predicate context                             |
 * |return   |boolean     |True if any element passes the predicate check|
 */

/* example
 * some([2, 5], function (val) {
 *     return val % 2 === 0;
 * }); // -> true
 */

/* module
 * env: all
 * test: all
 */

_('safeCb isArrLike keys');

exports = function(obj, predicate, ctx) {
    predicate = safeCb(predicate, ctx);

    var _keys = !isArrLike(obj) && keys(obj),
        len = (_keys || obj).length;

    for (var i = 0; i < len; i++) {
        var key = _keys ? _keys[i] : i;
        if (predicate(obj[key], key, obj)) return true;
    }

    return false;
};
