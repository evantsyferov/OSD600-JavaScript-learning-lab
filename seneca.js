// [INFO] See discussion of node.js exports here:
// https://www.sitepoint.com/understanding-module-exports-exports-node-js/

/**
 * Given a string `email`, return `true` if the string is in the form
 * of a valid Seneca College email address, `false` othewise.
 */
exports.isValidEmail = function (email) {
 // if (email === /[A-Za-z]@myseneca.ca/ ||
    //email === /[A-Za-z].[A-Za-z]@senecacollege.ca/ 
    //|| email === /[A-Za-z].[A-Za-z]@senecac.on.ca/) {
   // emailval = true;
//  }
    // add multiple returns
    if(!/myseneca.ca$/.test(email.trim)){
      const varemail = /[A-Za-z].[A-Za-z]@senecacollege.ca$/.test(email.trim);
     if(!varemail){
         const varemail =/[A-Za-z].[A-Za-z]@senecac.on.ca$/.test(email.trim);
     }
     else
         return true;
        if (!varemail){
            return false;
        }
    }
   else
      return true;
    
};

/**
 * Given a string `name`, return a formatted Seneca email address for
 * this person. NOTE: the email doesn't need to be real/valid/active.
 */
exports.formatSenecaEmail = function (name) {
  name.trim; 
  const email = name.concat('@myseneca.ca');
  return email;
};
