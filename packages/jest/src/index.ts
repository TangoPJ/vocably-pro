import { expect } from '@jest/globals';
import { difference } from 'lodash-es';

// @ts-ignore
declare global {
  namespace jest {
    interface Matchers<R> {
      toHaveSomeOf(expected: string | string[]): CustomMatcherResult;
    }
  }

  namespace jasmine {
    interface Matchers<T> {
      toHaveSomeOf(expected: string | string[]): CustomMatcherResult;
    }
  }
}

expect.extend({
  toHaveSomeOf(
    received: string,
    expected: string | string[]
  ): jest.CustomMatcherResult {
    if (Array.isArray(expected)) {
      const pass = expected.includes(received);

      return {
        pass,
        message: () => {
          return pass
            ? ''
            : `The received value '${received}' has more values than expected:\n${expected.join(
                '\n'
              )}`;
        },
      };
    }

    const receivedArray = received.split(',').map((s) => s.trim());
    const expectedArray = expected.split(',').map((s) => s.trim());

    const pass = difference(receivedArray, expectedArray).length === 0;

    return {
      pass,
      message: () => {
        return pass
          ? ''
          : `The received value '${received}' has more values than expected: ${expected}`;
      },
    };
  },
});
