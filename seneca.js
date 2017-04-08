// [INFO] See discussion of node.js exports here:
// https://www.sitepoint.com/understanding-module-exports-exports-node-js/

/**
 * Given a string `email`, return `true` if the string is in the form
 * of a valid Seneca College email address, `false` othewise.
 */
exports.isValidEmail = function (email) {
  if (typeof email !== 'string') {
    return false;
  }
  email.trim();
  if (!/@myseneca.ca$/.test(email) && !/[A-Za-z].[A-Za-z]@senecacollege.ca$/.test(email)
    && !/[A-Za-z].[A-Za-z]@senecac.on.ca$/.test(email)) {
    return false;
  }
  return true;
};

/**
 * Given a string `name`, return a formatted Seneca email address for
 * this person. NOTE: the email doesn't need to be real/valid/active.
 */
exports.formatSenecaEmail = function (name) {
  if (typeof name === 'string') {
    const nname = name.trim();
    const email = nname.concat('@myseneca.ca');
    return email.trim();
  }
  return false;
};
