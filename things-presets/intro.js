import { getTime, delay } from '@ircam/sc-utils';

const totalDuration = 480 // en secondes, doit etre superieur à 240 (4 minutes);
const fadeOutDuration = 30;


let timeoutIds = [];

export async function enter(global, things, filesystem) {
  global.set('activeThingsPreset', 'intro');
}

export function exit(global, things, filesystem) {
  clearAutomation(global, things, filesystem);
}

export function clearAutomation(global, things, filesystem) {
  timeoutIds.forEach(timeoutId => clearTimeout(timeoutId));
  global.set({'clearAutomation': true});
}

export async function execute(global, things, filesystem) {
  clearAutomation(global, things, filesystem);
  console.log('hello intro');
  things.set({ 'audio-player:control': 'start' });

  let timeoutId;
  timeoutId = setTimeout(() => global.set({ setAutomation: automation1 }), 60*1000);
  timeoutIds.push(timeoutId);

  timeoutId = setTimeout(() => global.set({ setAutomation: automation2 }), 180 * 1000);
  timeoutIds.push(timeoutId);
  timeoutId = setTimeout(() => global.set({ setAutomation: automation3 }), 210 * 1000);
  timeoutIds.push(timeoutId);
  timeoutId = setTimeout(() => global.set({ setAutomation: automation4 }), 240 * 1000);
  timeoutIds.push(timeoutId);

  timeoutId = setTimeout(() => global.set({ setAutomation: fadeOut }), (totalDuration-fadeOutDuration) * 1000);
  timeoutIds.push(timeoutId);

  // global.set({setAutomation: automation1});

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

const automation1 = {
  'duration': 90,
  'dotpi-dev-035': [
    {
      param: "mix:volume",
      value: 6,
    },
    {
      param: "audio-player:period",
      value: 0.21,
    },
    {
      param: "audio-player:periodVar",
      value: 0,
    },
    {
      param: "audio-player:duration",
      value: 1.7,
    },
    {
      param: "audio-player:durationVar",
      value: 0.2,
    },
  ],
  'dotpi-dev-071': [
    {
      param: "mix:volume",
      value: 6,
    },
    {
      param: "audio-player:period",
      value: 0.23,
    },
    {
      param: "audio-player:periodVar",
      value: 0,
    },
    {
      param: "audio-player:duration",
      value: 1.6,
    },
    {
      param: "audio-player:durationVar",
      value: 0.2,
    },
  ],
  'dotpi-dev-014': [
    {
      param: "mix:volume",
      value: 6,
    },
    {
      param: "audio-player:period",
      value: 0.20,
    },
    {
      param: "audio-player:periodVar",
      value: 0,
    },
    {
      param: "audio-player:duration",
      value: 1.75,
    },
    {
      param: "audio-player:durationVar",
      value: 0.2,
    },
  ],
  'dotpi-dev-053': [
    {
      param: "mix:volume",
      value: 6,
    },
    {
      param: "audio-player:period",
      value: 0.218,
    },
    {
      param: "audio-player:periodVar",
      value: 0,
    },
    {
      param: "audio-player:duration",
      value: 1.65,
    },
    {
      param: "audio-player:durationVar",
      value: 0.2,
    },
  ],
  'dotpi-dev-023': [
    {
      param: "mix:volume",
      value: 6,
    },
    {
      param: "audio-player:period",
      value: 0.223,
    },
    {
      param: "audio-player:periodVar",
      value: 0,
    },
    {
      param: "audio-player:duration",
      value: 1.82,
    },
    {
      param: "audio-player:durationVar",
      value: 0.2,
    },
  ],
  'dotpi-dev-021': [
    {
      param: "mix:volume",
      value: 6,
    },
    {
      param: "audio-player:period",
      value: 0.215,
    },
    {
      param: "audio-player:periodVar",
      value: 0,
    },
    {
      param: "audio-player:duration",
      value: 1.73,
    },
    {
      param: "audio-player:durationVar",
      value: 0.2,
    },
  ],
  'dotpi-dev-056': [
    {
      param: "mix:volume",
      value: 6,
    },
    {
      param: "audio-player:period",
      value: 0.3,
    },
    {
      param: "audio-player:periodVar",
      value: 0,
    },
    {
      param: "audio-player:duration",
      value: 2.08,
    },
    {
      param: "audio-player:durationVar",
      value: 0.5,
    },
  ],
  'dotpi-dev-012': [
    {
      param: "mix:volume",
      value: 6,
    },
    {
      param: "audio-player:period",
      value: 0.35,
    },
    {
      param: "audio-player:periodVar",
      value: 0,
    },
    {
      param: "audio-player:duration",
      value: 1.93,
    },
    {
      param: "audio-player:durationVar",
      value: 0.5,
    },
  ]
}

const automation2 = {
  'dotpi-dev-056': [
    {
      param: "soundfile",
      value: "/audio-files/synth/Alex.wav",
    },
  ],
  'dotpi-dev-012': [
    {
      param: "soundfile",
      value: "/audio-files/synth/Ekayerina.wav",
    },
  ],
}

const automation3 = {
  'dotpi-dev-023': [
    {
      param: "soundfile",
      value: "/audio-files/synth/Por1.wav",
    },
  ],
  'dotpi-dev-071': [
    {
      param: "soundfile",
      value: "/audio-files/synth/Por2.wav",
    },
  ],
  'dotpi-dev-014': [
    {
      param: "soundfile",
      value: "/audio-files/synth/Por3.wav",
    },
  ],
}

const automation4 = {
  'dotpi-dev-035': [
    {
      param: "soundfile",
      value: "/audio-files/synth/Simone.wav",
    },
  ],
  'dotpi-dev-053': [
    {
      param: "soundfile",
      value: "/audio-files/synth/Elena.wav",
    },
  ],
  'dotpi-dev-021': [
    {
      param: "soundfile",
      value: "/audio-files/synth/Por1.wav",
    },
  ],
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