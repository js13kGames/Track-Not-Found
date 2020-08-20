// Train
draw_train = (x,y,z) => {
  C.group({n:"train",x,y,z});
  C.plane({g:"train",w:50,h:50,y:-10,z:2,html:"🚂",css:"train",rx:-90,ry:180,o:"bottom"}); // emoji
  C.plane({g:"train",w:50,h:50,y:10,z:2,html:"🚂",css:"train",rx:-90,ry:180,o:"bottom"}); // emoji
  C.cube({g:"train",x:-15,z:10,w:18,h:35,d:19,b:"#A11"},1,0,1,1,1,1); // big red
  C.cube({g:"train",x:6,z:15,w:26,h:18,d:19,b:"#444"},1,0,1,1,1,1); // big grey
  C.cube({g:"train",x:12,z:33,w:8,h:10,d:19,b:"#666"},0,0,1,1,1,1); // chemney light
  C.cube({g:"train",x:12,z:42,w:10,h:6,d:19,b:"#444"},1,0,1,1,1,1); // chemney dark
  C.plane({g:"train",b:"#c80",w:2.5,h:19,z:34}); // orange 1
  C.plane({g:"train",b:"#c80",w:2.5,h:19,z:34,x:7.5}); // orange 2
  C.plane({g:"train",b:"#151515",w:15,h:19,z:24,x:20.5,ry:90}); // front black
  C.plane({g:"train",b:"#c33",w:15,h:19,z:10,x:21,ry:45}); // slanted red
}

// boat
draw_boat = (x, y, z) => {
  C.group({n:"boat",x,y,z});
  C.group({g:"boat",n:"boat2"});
  C.sprite({g:"boat2",w:50,h:50,y:-5,z:2,html:"⛵",css:"boat",rx:-90,ry:180,o:"bottom"}); // emoji
}

// Track 100px
draw_track = (x,y,z,pillar) => {
  C.cube({w:105,h:6,d:8,x:x,y:y+11,z:z,b:"#888",b2:"#666",b3:"#aaa",css:"iron"},1,0,0,0,1,1);
  C.cube({w:105,h:6,d:8,x:x,y:y-11,z:z,b:"#888",b2:"#666",b3:"#aaa",css:"iron"},1,0,0,0,1,1);
  for(var i=-40;i<60;i+=20){
    C.plane({w:10,h:20,y:y,z:z-1,x:x+i,b:"#a70",b2:"#960",b3:"#b80",css:"wood fixed"})
  }
  if(pillar){
    C.plane({w:10,h:600,x:x,y:y,z:z-302,b:"#555",rx:-90});
  }
}

// Hills
draw_hills = () => {
  var tree, X, Y, Z;
  
  C.plane({w:600,h:1200,x:0,z:-230,css:"river"});
  C.plane({w:300,h:1200,x:-500,z:-2,css:"hill"});
  C.plane({w:300,h:1200,x:500,z:-2,css:"hill"});
  C.plane({w:600,h:1200,x:-350,z:-2,ry:75,o:"left",css:"hill2"});
  C.plane({w:600,h:1200,x:350,z:-2,ry:-75,o:"right",css:"hill2"});
  C.plane({w:600,h:1200,x:-500,z:-602,rx:-90,sk:"15deg",css:"hill3 left"});
  C.plane({w:600,h:1200,x:500,z:-602,rx:-90,sk:"-15deg",css:"hill3 right"});
  
  C.sprite({w:60,h:60,x:X=-380-Math.random()*100,y:Y=-80-Math.random()*100,z:0,html:tree=["🌳","🌴","🌲",""][Math.random()*4|0],css:"tree fixed",o:"bottom"});
  C.plane({w:60,h:60,x:X,y:Y,z:0,html:tree,css:"tree fixed shadow",o:"bottom",rz:-25});
  
  C.sprite({w:60,h:60,x:X=380+Math.random()*100,y:Y=-80-Math.random()*100,z:0,html:tree=["🌳","🌴","🌲",""][Math.random()*4|0],css:"tree fixed",o:"bottom"});
  C.plane({w:60,h:60,x:X,y:Y,z:0,html:tree,css:"tree fixed shadow",o:"bottom",rz:-25});
  
  C.sprite({w:60,h:60,x:X=380+Math.random()*100,y:Y=80+Math.random()*100,z:0,html:tree=["🌳","🌴","🌲",""][Math.random()*4|0],css:"tree fixed",o:"bottom"});
  C.plane({w:60,h:60,x:X,y:Y,z:0,html:tree,css:"tree fixed shadow",o:"bottom",rz:-25});
  
  C.sprite({w:60,h:60,x:X=-380 -Math.random()*100,y:Y=80+Math.random()*100,z:0,html:tree=["🌳","🌴","🌲",""][Math.random()*4|0],css:"tree fixed",o:"bottom"});
  C.plane({w:60,h:60,x:X,y:Y,z:0,html:tree,css:"tree fixed shadow",o:"bottom",rz:-25});
  
}