import { getTime, delay } from '@ircam/sc-utils';

let timeoutId;

export async function enter(global, things, filesystem) {
  global.set('activeThingsPreset', 'transition');
}
export function exit(global, things, filesystem) {
  clearTimeout(timeoutId);
}

export async function execute(global, things, filesystem) {
  clearTimeout(timeoutId);
  console.log('hello transition')

  // ramp from -80 to 0
  // const startTime = getTime();
  // const fadeDuration = 30;
  // const min = -80;
  // const max = 4;

  // function fade() {
  //   const now = getTime();
  //   const phase = (now - startTime) / fadeDuration;

  //   if (phase > 1) {
  //     things.set({ "mix:volume": max });
  //     return;
  //   }

  //   const volume = (1 - phase) * min + phase * max;
  //   things.set({ "mix:volume": volume });

  //   timeoutId = setTimeout(fade, 50);
  // }

  // fade();
}