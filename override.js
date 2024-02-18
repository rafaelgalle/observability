(function () {
  const _debug = console.debug
  const _log = console.log
  const _warn = console.warn
  const _error = console.error

  const structure = function (arg1, arg2, severity) {
    const object= { severity }
    object.message = arg1.toString()
    if (typeof arg1 === 'object') object.object = { ...arg1 }
    if (typeof arg2 === 'object') object.object = { ...arg2 }
    return JSON.stringify(object)
  }

  console.debug = function (arg1, arg2) {
    _debug.call(console, structure(arg1, arg2, 'DEBUG'))
  }
  console.log = function (arg1, arg2) {
    _log.call(console, structure(arg1, arg2, 'INFO'))
  }
  console.warn = function (arg1, arg2) {
    _warn.call(console, structure(arg1, arg2, 'WARNING'))
  }
  console.error = function (arg1, arg2) {
    _error.call(console, structure(arg1, arg2, 'ERROR'))
  }
})()