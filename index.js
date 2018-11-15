const Nightmare = require('nightmare')
const nightmare = Nightmare({show: true })
const count = 1;

nightmare
  .goto('https://www.surveymonkey.com/results/SM-DTFD6LTLV/browse/')
  .wait("div[view-role|='respondentArrowBtnsView']")
  .wait('.response-question-content')
  .evaluate(handler)
  .click("a[class$=' wds-button wds-button--util wds-button--arrow-left']")
  .end()
  .then(function(content) {
    console.log(content);
  })
  .catch(error => {
    console.error('Search failed:', error)
  })

  //#response-text

  function handler() {
    let i = 0
    alert('hey')
    var elements = Array.from(document.getElementsByClassName('response-question-content'));
    return elements.map(function(element) {
      return `Q${i++%6}: ${element.innerText}`
    });
  }