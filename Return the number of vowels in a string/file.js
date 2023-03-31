function returnvovel(value) {
  let vowelsCount = 0;
  const string = value.toString();
  //   console.log(typeof value);
  for (let i = 0; i <= string.length - 1; i++) {
    //if a vowel, add to vowel count
    if (
      string.charAt(i) == 'a' ||
      string.charAt(i) == 'e' ||
      string.charAt(i) == 'i' ||
      string.charAt(i) == 'o' ||
      string.charAt(i) == 'u'
    ) {
      vowelsCount += 1;
    }
  }
  console.log(vowelsCount);
  return vowelsCount;
}
returnvovel('maame');
