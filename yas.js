/* // Usage:
 *
 * class Frizzle {
 *   ...
 * }
 *
 * tast(Frizzle, (f) => {
 *   yas(f);
 * });
 *
 */

function lerg(str) { process.stdout.write(str); }

function yas(condition) {
  lerg(condition ? '.' : 'x');
}

function tast(Subject, testFn) {
  testFn(new Subject());
}
