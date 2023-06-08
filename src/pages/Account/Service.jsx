import { WordArray } from "crypto-js";
import { SHA256, PBKDF2 } from "crypto-js";

const PASSWORD_LENGTH = 64;
const SALT_LENGTH = 64;
const ITERATIONS = 10000;

const passwordHash = (password = new String()) => {
  return new Promise((resolve, reject) => {
    const salt = WordArray.random(SALT_LENGTH / 8).toString();
    const derivedKey = PBKDF2(password, salt, {
      keySize: PASSWORD_LENGTH / 32,
      iterations: ITERATIONS,
      hasher: SHA256,
    }).toString();

    const res = {
      hashHex: derivedKey,
      salt: salt,
      passwordLength: PASSWORD_LENGTH,
      iterations: ITERATIONS,
    };
    resolve(res);
  });
};

const passwordHashVerify = (password = new String(), salt = new String(), dbHash = new String()) => {
  return new Promise((resolve, reject) => {
    const derivedKey = PBKDF2(password, salt, {
      keySize: PASSWORD_LENGTH / 32,
      iterations: ITERATIONS,
      hasher: SHA256,
    }).toString();

    if (dbHash === derivedKey) {
      resolve(true);
    } else {
      resolve(false);
    }
  });
};

export { passwordHash, passwordHashVerify };
