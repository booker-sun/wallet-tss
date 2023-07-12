import * as crypto from 'crypto';
import { config, generateKey, SerializedKeyPair } from 'openpgp';
/**
 *
 * @param identify
 * @param type
 * @returns
 */
export async function createGpgKey(
  identify: string,
  type: string
): Promise<SerializedKeyPair<string>> {
  const randomHexString = crypto.randomBytes(12).toString('hex');
  config.rejectCurves = new Set();
  const key = await generateKey({
    userIDs: [
      {
        name: randomHexString,
        email: `${type}-${identify}@${randomHexString}.com`,
      },
    ],
    curve: 'secp256k1',
  });
  return key;
}
