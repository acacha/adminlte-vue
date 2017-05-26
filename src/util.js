const exports = {
  todo: {}
}

export default exports

/**
 * todo
 * @returns {string}
 */
export function todo () {
  return 'TODO'
}

/**
 * todo2
 * @returns {string}
 */
export function todo2 () {
  return 'TODO2'
}
//
// /**
//  * Allows a field to add/remove errors to the form
//  * @param {Object} form
//  * @param {String} key
//  * @param {String} err
//  * @param {Bool} isError
//  */
// export function setError (form, key, err, isError, message = false) {
//   if (!form.$errors[key]) form.$errors[key] = {}
//   form.$errors[key][err] = isError ? message || isError : false
// }
