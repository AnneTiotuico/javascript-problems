"use strict";

let textExcerpt = 'To be or not to be-that is the question:\n' +
  'Whether \'tis nobler in the mind to suffer\n' +
  'The slings and arrows of outrageous fortune,\n' +
  'Or to take arms against a sea of troubles,\n' +
  'And, by opposing, end them. To die, to sleep-\n' +
  'No more-and by a sleep to say we end\n' +
  'The heartache and the thousand natural shocks\n' +
  'That flesh is heir to-\'tis a consummation\n' +
  'Devoutly to be wished. To die, to sleep-\n' +
  'To sleep, perchance to dream. Aye, there\'s the rub,\n' +
  'For in that sleep of death what dreams may come,\n' +
  'When we have shuffled off this mortal coil,\n' +
  'Must give us pause. There\'s the respect\n' +
  'That makes calamity of so long life.\n' +
  'For who would bear the whips and scorns of time,\n' +
  'Th\' oppressor\'s wrong, the proud man\'s contumely, [F: poor]\n' +
  'The pangs of despised love, the law’s delay, [F: disprized]\n' +
  'The insolence of office, and the spurns\n' +
  'That patient merit of the unworthy takes,\n' +
  'When he himself might his quietus make\n' +
  'With a bare bodkin? Who would fardels bear, [F: these Fardels]\n' +
  'To grunt and sweat under a weary life,\n' +
  'But that the dread of something after death,\n' +
  'The undiscovered country from whose bourn\n' +
  'No traveler returns, puzzles the will\n' +
  'And makes us rather bear those ills we have\n' +
  'Than fly to others that we know not of?\n' +
  'Thus conscience does make cowards of us all,\n' +
  'And thus the native hue of resolution\n' +
  'Is sicklied o\'er with the pale cast of thought,\n' +
  'And enterprises of great pitch and moment, [F: pith]\n' +
  'With this regard their currents turn awry, [F: away]\n' +
  'And lose the name of action.-Soft you now,\n' +
  'The fair Ophelia.-Nymph, in thy orisons\n' +
  'Be all my sins remembered';

let positiveRegex = /\bfortunes?\b|\bdream(s|t|ed)?\b|love(s|d)?\b|respect(s|ed)?\b|\bpatien(ce|t)?\b|\bdevout(ly)?\b|\bnobler?\b|\bresolut(e|ion)?\b/gi;
let negativeRegex = /\bdie(s|d)?\b|\bheartached?\b|death|despise(s|d)?\b|\bscorn(s|ed)?\b|\bweary\b|\btroubles?\b|\boppress(es|ed|or('s)?)?\b/gi;

// function lowerCaseMatch(words, list) {
//   return words.filter(word => list.test(word)).map(word => word.toLowerCase());
// }

// function sentiment(text) {
//   let cleanedWords = text.match(/[a-z']+/ig);

//   let positives = lowerCaseMatch(cleanedWords, positiveRegex);
//   let negatives = lowerCaseMatch(cleanedWords, negativeRegex);

//   let calculation = positives.length - negatives.length;
//   let sentiment;
//   if (calculation > 0) sentiment = 'Positive';
//   if (calculation < 0) sentiment = 'Negative';
//   if (calculation === 0) sentiment = 'Neutral';

//   let message = `There are ${positives.length} positive words in the text.\n` +
//   `Positive sentiments: ${positives.join(', ')}\n\n` +
//   `There are ${negatives.length} negative words in the text.\n` +
//   `Negative sentiments: ${negatives.join(', ')}\n\n` +
//   `The sentiment of the text is ${sentiment}.`;

//   console.log(message);
// }

// function lowerCaseMatch(words, list) {
//   return words.filter(word => list.test(word)).map(word => word.toLowerCase());
// }

// function sentiment(text) {
//   let cleanedWords = text.match(/[a-z']+/ig);

//   let positives = lowerCaseMatch(cleanedWords, positiveRegex);
//   let negatives = lowerCaseMatch(cleanedWords, negativeRegex);

//   let sentiment;
//   if (positives.length > negatives.length) sentiment = 'Positive';
//   if (positives.length < negatives.length) sentiment = 'Negative';
//   if (positives.length === negatives.length) sentiment = 'Neutral';

//   let message = `There are ${positives.length} positive words in the text.\n` +
//   `Positive sentiments: ${positives.join(', ')}\n\n` +
//   `There are ${negatives.length} negative words in the text.\n` +
//   `Negative sentiments: ${negatives.join(', ')}\n\n` +
//   `The sentiment of the text is ${sentiment}.`;

//   console.log(message);
// }

function lowerCaseMatch(words, list) {
  return words.match(list).map(word => word.toLowerCase());
}

function sentiment(text) {
  let positives = lowerCaseMatch(text, positiveRegex);
  let negatives = lowerCaseMatch(text, negativeRegex);

  let sentiment;
  if (positives.length > negatives.length) sentiment = 'Positive';
  if (positives.length < negatives.length) sentiment = 'Negative';
  if (positives.length === negatives.length) sentiment = 'Neutral';

  let message = `There are ${positives.length} positive words in the text.\n` +
  `Positive sentiments: ${positives.join(', ')}\n\n` +
  `There are ${negatives.length} negative words in the text.\n` +
  `Negative sentiments: ${negatives.join(', ')}\n\n` +
  `The sentiment of the text is ${sentiment}.`;

  console.log(message);
}



sentiment(textExcerpt);

// console output

// There are 9 positive type words in the text.
// Positive sentiments: nobler, fortune, devoutly, dream, dreams, respect, love, patient, resolution

// There are 10 negative type words in the text.
// Negative sentiments: troubles, die, heartache, die, death, scorns, oppressor's, despised, weary, death

// The sentiment of the text is Negative.