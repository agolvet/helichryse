import { getTime, delay } from '@ircam/sc-utils';

let timeoutId;
const totalDuration = 120 // en secondes
const fadeOutDuration = 30;

export async function enter(global, things, filesystem) {
  global.set('activeThingsPreset', 'fado');
}
export function exit(global, things, filesystem) {
  clearAutomation(global, things, filesystem);
}

export function clearAutomation(global, things, filesystem) {
  clearTimeout(timeoutId);
  global.set({'clearAutomation': true});
}

export async function execute(global, things, filesystem) {
  clearAutomation(global, things, filesystem);
  console.log('hello fado')
  things.set({ 'audio-player:control': 'start' });
  timeoutId = setTimeout(() => global.set({ setAutomation: fadeOut }), (totalDuration-fadeOutDuration)* 1000);
  

  // const

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


const fadeOut = {
  'duration': fadeOutDuration,
  'dotpi-dev-035': [
    {
      param: "mix:volume",
      value: -80,
    },
  ],
  'dotpi-dev-071': [
    {
      param: "mix:volume",
      value: -80,
    },
  ],
  'dotpi-dev-014': [
    {
      param: "mix:volume",
      value: -80,
    },
  ],
  'dotpi-dev-053': [
    {
      param: "mix:volume",
      value: -80,
    },
  ],
  'dotpi-dev-023': [
    {
      param: "mix:volume",
      value: -80,
    },
  ],
  'dotpi-dev-021': [
    {
      param: "mix:volume",
      value: -80,
    },
  ],
  'dotpi-dev-056': [
    {
      param: "mix:volume",
      value: -80,
    },
  ],
  'dotpi-dev-012': [
    {
      param: "mix:volume",
      value: -80,
    },
  ]
}
