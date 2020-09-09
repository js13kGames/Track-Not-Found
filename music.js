

music = () => {
  n = -2;
  A = new AudioContext;
  G=A.createGain();
  note();  
}

note = () => {
  // Theme (64 notes, 2 tracks)
  var t = [
    "`dgd`dgd`dgd`dgdbeiebeiebeiebeieY]`]Y]`]Y]`]Y]`][_b_[_b_[_b_[_b_", 
    "l(((k(((g(((((gkl(((n(((n(p(pnlki(((((((i(((k(ikl(((n(((((nlkgik"
  ];
  
  if(state){

    O1=A.createOscillator();
    O2=A.createOscillator();
    
    if(state && t[0][n%64]!="("){
      O1.connect(G),
      G.connect(A.destination),
      O1.start(A.currentTime),
      O1.frequency.setValueAtTime(440*1.06**(n >= 0 ?-105+t[0].charCodeAt(n%64) : 0),A.currentTime),
      O1.type = cam == "2d" ? 'sine' : 'triangle',
      G.gain.setValueAtTime(n >= 0 ? .06 : .001,A.currentTime),
      G.gain.setTargetAtTime(.001,A.currentTime+.1,.05),
      O1.stop(A.currentTime+.24);
    }
    
    if(state && t[1][n%64]!="("){
      O2.connect(G),
      G.connect(A.destination),
      O2.start(A.currentTime),
      O2.frequency.setValueAtTime(440*1.06**(n >= 0 ?-105+t[1].charCodeAt(n%64) : 0),A.currentTime),
      O2.type = cam == "2d" ? 'sine' : 'triangle',
      G.gain.setValueAtTime(n >= 0 ? .08 : .001,A.currentTime),
      G.gain.setTargetAtTime(.001,A.currentTime+.1,.05),
      O2.stop(A.currentTime+.24);
    }
    
    n++;
  
    console.log(n, n%64);
  }
  
  setTimeout(note, 270);
  
}