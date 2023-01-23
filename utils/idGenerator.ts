export function generateRandomCharacters() {
  var characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var randomCharacters = "";
  for (var i = 0; i < 8; i++) {
    randomCharacters += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return randomCharacters;
}
