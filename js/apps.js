// Here all versions are located, the same as app.js but this time its apps.js because all versions info is located in this one file
// To add more versions, copy the versions.v1 and replace with versions.v2, and the same with others (it support more than 9 versions)
versions.v1 = {
  name: "Afternoon",
  version: "1",
  date: "2025",
  folder: "asset-v1/", // ← If you are adding more versions, make sure follder is correct, for example "asset-v2/" for v2
  looptime: 5853,
  bpm: 164,
  totalframe: 280,
  nbpolo: 7,
  bonusloopA: true, // ← It makes bonus start on loop A, if its false, bonus will start after 1 loop
  bonusendloopA: false,
  colBck: "#10052f",
  col0: "#ffffff",
  col1: "#163fb6",
  col2: "#63aaf9",
  col3: "#63aaf9",
  col4: "#63aaf9",
  animearray: [
    {
      name: "1_kicknsnare",
      color: "fc5e0c",
      uniqsnd: !0, // ← !0 means that polo will use only _a audio, if its !1 - it will use _a and _b
    },
    {
      name: "2_clap",
      color: "fc5e0c",
      uniqsnd: !0,
    },
    {
      name: "3_hats",
      color: "fc5e0c",
      uniqsnd: !0,
    },
    {
      name: "4_clicks",
      color: "fc5e0c",
      uniqsnd: !1,
    },
    {
      name: "5_cah",
      color: "fc5e0c",
      uniqsnd: !1,
    },
    {
      name: "6_bass",
      color: "fe597b",
      uniqsnd: !1,
    },
    {
      name: "7_wiao",
      color: "fe597b",
      uniqsnd: !1,
    },
    {
      name: "8_endpluck",
      color: "fe597b",
      uniqsnd: !1,
    },
    {
      name: "9_arcadearp",
      color: "fe597b",
      uniqsnd: !1,
    },
    {
      name: "10_woo",
      color: "fe597b",
      uniqsnd: !1,
    },
    {
      name: "11_synth",
      color: "2dc2d0",
      uniqsnd: !1,
    },
    {
      name: "12_pad",
      color: "2dc2d0",
      uniqsnd: !1,
    },
    {
      name: "13_woodwind",
      color: "2dc2d0",
      uniqsnd: !1,
    },
    {
      name: "14_hazy",
      color: "2dc2d0",
      uniqsnd: !1,
    },
    {
      name: "15_bell",
      color: "2dc2d0",
      uniqsnd: !1,
    },
    {
      name: "16_choir",
      color: "ad1aa2",
      uniqsnd: !1,
    },
    {
      name: "17_golden",
      color: "ad1aa2",
      uniqsnd: !1,
    },
    {
      name: "18_afternoon",
      color: "ad1aa2",
      uniqsnd: !1,
    },
    {
      name: "19_velvet",
      color: "ad1aa2",
      uniqsnd: !1,
    },
    {
      name: "20_whistle",
      color: "ad1aa2",
      uniqsnd: !1,
    },
  ],
  bonusarray: [
    {
      name: "Painted Dream",
      src: "v1-b1-painted_dream",
      code: "1,6,8,11,18",
      sound: "bonus-painted_dream",
      aspire: "aspire-painted_dream",
      loop: 8,
    },
     {
      name: "Disco",
      src: "v1-b2-disco",
      code: "1,2,6,12,14",
      sound: "bonus-disco",
      aspire: "aspire-disco",
      loop: 4, 
    },
    {
      name: "Last Sunset",
      src: "v1-b3-last_sunset",
      code: "5,6,10,16,20",
      sound: "bonus-last_sunset",
      aspire: "aspire-last_sunset",
      loop: 8, 
    },
  ],

}

