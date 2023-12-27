const text = `
  Your text here...
  Plagiarism resolution is an interesting topic that considers various aspects.
  Please insert your text here and update the 'text' variable.
`;

// Stop words list (simplified; you can expand it using the GitHub list)
const stopWords = [
  'and', 'the', 'in', 'with', 'on', 'for', 'it', 'he', 'she', 'this', 'that'
  // Add more stop words as needed
];

// Function to remove HTML tags from the text
function removeHtmlTags(text) {
  return text.replace(/<[^>]*>/g, ' ');
}

// Function to split the text into words
function getWords(text) {
  return text.split(/\s+/);
}

// Function to count the frequency of words
function countWords(words) {
  const wordCount = {};
  words.forEach(word => {
    word = word.toLowerCase().trim();
    if (!stopWords.includes(word) && word.length > 1) {
      wordCount[word] = (wordCount[word] || 0) + 1;
    }
  });
  return wordCount;
}

// Function to sort words by frequency
function sortWords(wordCount) {
  return Object.entries(wordCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);
}

// Main function for text analysis
function analyzeText(text) {
  const cleanedText = removeHtmlTags(text);
  const words = getWords(cleanedText);
  const wordCount = countWords(words);
  const sortedWords = sortWords(wordCount);

  return sortedWords;
}

// Result of the analysis
const result = analyzeText(text);
console.log('The 3 most frequent words:', result);
