// server/testRunner.js
const cheerio = require('cheerio');

function runTests(code) {
  const testResults = [];

  // Load the HTML code using cheerio
  const $ = cheerio.load(code);

  // Test 1: Your portfolio should have a "Welcome" section with an id of welcome-section.
  testResults.push({
    description: 'Your portfolio should have a "Welcome" section with an id of welcome-section.',
    passed: $('#welcome-section').length > 0,
  });

  // Test 2: Your #welcome-section element should contain an h1 element.
  testResults.push({
    description: 'Your #welcome-section element should contain an h1 element.',
    passed: $('#welcome-section h1').length > 0,
  });

  // Test 3: You should not have any empty h1 elements within #welcome-section element.
  testResults.push({
    description: 'You should not have any empty h1 elements within #welcome-section element.',
    passed: !$('#welcome-section h1').filter(function () { return $(this).text().trim() === ''; }).length,
  });

  // Test 4: You should have a "Projects" section with an id of projects.
  testResults.push({
    description: 'You should have a "Projects" section with an id of projects.',
    passed: $('#projects').length > 0,
  });

  // Test 5: Your portfolio should contain at least one element with a class of project-tile.
  testResults.push({
    description: 'Your portfolio should contain at least one element with a class of project-tile.',
    passed: $('.project-tile').length > 0,
  });

  // Test 6: Your #projects element should contain at least one a element.
  testResults.push({
    description: 'Your #projects element should contain at least one a element.',
    passed: $('#projects a').length > 0,
  });

  // Test 7: Your portfolio should have a navbar with an id of navbar.
  testResults.push({
    description: 'Your portfolio should have a navbar with an id of navbar.',
    passed: $('navbar').length > 0,
  });

  // Test 8: Your #navbar element should contain at least one a element whose href attribute starts with #.
  testResults.push({
    description: 'Your #navbar element should contain at least one a element whose href attribute starts with #.',
    passed: $('navbar a[href^="#"]').length > 0,
  });

  // Test 9: Your portfolio should have an a element with an id of profile-link.
  testResults.push({
    description: 'Your portfolio should have an a element with an id of profile-link.',
    passed: $('#profile-link').length > 0,
  });

  // Test 10: Your #profile-link element should have a target attribute of _blank.
  testResults.push({
    description: 'Your #profile-link element should have a target attribute of _blank.',
    passed: $('#profile-link').attr('target') === '_blank',
  });

  // Test 11: Your portfolio should use at least one media query.
  testResults.push({
    description: 'Your portfolio should use at least one media query.',
    passed: $('style').text().trim().includes('@media'),
  });

  // Test 12: Your #navbar element should always be at the top of the viewport.
  testResults.push({
    description: 'Your #navbar element should always be at the top of the viewport.',
    passed: $('navbar').index() === 0,
  });

  return testResults;
}

module.exports = { runTests };
