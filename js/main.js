function init(){var t=new Board,e=new Piece("pawn","black");t.drawBoard(),e.draw()}var canvas=document.getElementById("lienzo"),cx=canvas.getContext("2d"),Board=function(){function t(){}return t.prototype.drawBoard=function(){for(var t=canvas.width/8,e=0;e<8;e++)for(var n=0;n<8;n++)cx.fillStyle=n%2==0?e%2==0?"grey":"white":e%2==0?"white":"grey",cx.fillRect(n*t,e*t,t,t),cx.fill()},t}(),Piece=function(){function t(t,e){this.type=t,this.team=e,this.assets={bishop:"../assets/bishop"+("white"==this.team?"W":"B")+"2.png",king:"../assets/king"+("white"==this.team?"W":"B")+"2.png",queen:"../assets/queen"+("white"==this.team?"W":"B")+"2.png",pawn:"../assets/pawn"+("white"==this.team?"W":"B")+"2.png",rook:"../assets/rook"+("white"==this.team?"W":"B")+"2.png",knight:"../assets/knight"+("white"==this.team?"W":"B")+"2.png"}}return t.prototype.draw=function(){var t=new Image;t.onload=function(){cx.drawImage(t,40,40)},t.src=this.assets[this.type]},t}();init();