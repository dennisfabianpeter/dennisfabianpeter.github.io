var controls =
[  
  'play',
  'progress',
  'duration',
  'mute',
  'volume',
];

const players = Plyr.setup('.js-player', { controls });

  // Expose player so it can be used from the console
  window.player = player;