// First require (e.g., load) our seneca.js module
var seneca = require('./seneca');

/**
 * Tests for seneca.isValidEmail()
 */
describe('seneca.isValidEmail()', function() {

  test('returns true for simple myseneca address', function() {
    var simpleEmail = 'someone@myseneca.ca';
    expect(seneca.isValidEmail(simpleEmail)).toBe(true);
  });

  test('returns false for a non-myseneca address', function() {
    var gmailAddress = 'someone@gmail.com';
    expect(seneca.isValidEmail(gmailAddress)).toBe(false);
  });
  test('returns false for a non-myseneca address', function() {
    var hotmailAddress = 'someone@hotmail.com';
    expect(seneca.isValidEmail(hotmailAddress)).toBe(false);
  });
    
  test('returns false if email is  a number', function() {
    const numemail = 1;
    expect(seneca.formatSenecaEmail(numemail)).toBe(false);
  }); 
  test('returns false if email is a boolean', function() {
    const boolemail = true;
    expect(seneca.formatSenecaEmail(boolemail)).toBe(false);
  }); 
    
  test('returns false for value that is null', function() {
    const fakeAddress = null;
    expect(seneca.isValidEmail(fakeAddress)).toBe(false);
  });
    
  test('returns true for  professor seneca address', function() {
    const professorEmail = 'someone.lastname@senecacollege.ca';
    expect(seneca.isValidEmail(professorEmail)).toBe(true);
  });
    
  test('returns true for  old seneca address', function() {
    const oldEmail = 'david.humphrey@senecac.on.ca';
    expect(seneca.isValidEmail(oldEmail)).toBe(true);
  });
});

/**
 * Tests for seneca.formatSenecaEmail()
 */
describe('seneca.formatSenecaEmail()', function() {

  test('adds @myseneca.ca to the end of name', function() {
    const name = 'mshaw';
    expect(seneca.formatSenecaEmail(name)).toBe('mshaw@myseneca.ca');
  });
  test('adds @myseneca.ca to the end of name that has spaces', function() {
    const name = ' mshaw ';
    expect(seneca.formatSenecaEmail(name)).toBe('mshaw@myseneca.ca');
  });
  test('name is null', function() {
    const name = null;
    expect(seneca.formatSenecaEmail(name)).toBe(false);
  });
  test('name is  a number', function() {
    const name = 1;
    expect(seneca.formatSenecaEmail(name)).toBe(false);
  }); 
  test('name is  a boolean', function() {
    const name = true;
    expect(seneca.formatSenecaEmail(name)).toBe(false);
  }); 
 
});
