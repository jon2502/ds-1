const ViginereCipher = () => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const key = 'password'.split('');

  const encrypt = (message) => {
    const messageArray = message.split('');
    const encryptedMessage = messageArray.map((char, index) => {
      const charIndex = alphabet.indexOf(char);
      const keyIndex = alphabet.indexOf(key[index % key.length]);
      const encryptedCharIndex = (charIndex + keyIndex) % alphabet.length;
      return alphabet[encryptedCharIndex];
    });
    return encryptedMessage.join('');
  };

  const decrypt = (message) => {
    const messageArray = message.split('');
    const decryptedMessage = messageArray.map((char, index) => {
      const charIndex = alphabet.indexOf(char);
      const keyIndex = alphabet.indexOf(key[index % key.length]);
      const decryptedCharIndex = (charIndex - keyIndex + 26) % alphabet.length;
      return alphabet[decryptedCharIndex];
    });
    return decryptedMessage.join('');
  };

  return {
    encrypt,
    decrypt,
  };
}
ViginereCipher().encrypt('hello');