const params = new URLSearchParams(window.location.search);
const content = params.get('t') || '';
const color = params.get('c') || '#fff';
const decoration = params.get('d') || '#00000000';
const type = Number(params.get('a')) || 0;
const textColor = params.get('b') || '#fff';
const typeBefore = ['空想','',''];
const typeAfter = ['','都ふぁん','くらぶ'];

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 120;
canvas.height = 120;
ctx.fillStyle = color;
ctx.fillRect(0,0,canvas.width,canvas.height);

function drawPath(d){
  ctx.save();
  const path = new Path2D(d);
  ctx.fillStyle = decoration;
  ctx.fill(path);
  ctx.restore();
}
function lengthAdjust(text, x, y, width) {
  const actualWidth = ctx.measureText(text).width;
  const scaleX = width / actualWidth;
  ctx.save();
  ctx.fillStyle = textColor;
  ctx.textAlign = "center";
  ctx.translate(x, y);
  ctx.scale(scaleX, 1);
  ctx.fillText(text, 0, 0);
  ctx.restore();
}
function downloadImg(){
  const download = document.createElement("a");
  const dataURL = canvas.toDataURL("image/png");
  download.href = dataURL;
  download.download = typeBefore[type] + content + typeAfter[type] + ".png";
  download.click();
  const link = document.createElement('a');
  link.href = "https://memo.zu-ga.net/26360"
  link.click();
}
if (type === 0){
  drawPath("m -8,82 c 0,0 10,-9 24,-9 14,0 42,15 42,15 0,0 24,15 39,15 C 112,103 130,91 130,91 l 0,14 c 0,0 -21,9 -33,9 -12,0 -38,-12 -38,-12 0,0 -33,-18 -44,-18 -12,0 -23,10 -23,10 z");
  document.fonts.load("16px 'ヒラギノ角ゴ ProN'").then(() => {
    ctx.font = "bold 56px 'ヒラギノ角ゴ ProN', 'モリサワ新ゴ', 'Noto Sans JP', sans-serif";
    lengthAdjust('空想', 60, 54, 112);
    lengthAdjust(content, 60, 108, 112);
    downloadImg();
  });
} else if(type === 1) {
  document.fonts.load("16px 'Mochiy Pop P One'").then(() => {
    drawPath("M 113,47 85,73 91,110 58,92 24,109 31,72 4,45 42,40 59,6 75,40 Z");
    ctx.font = "normal 54px 'Mochiy Pop P One', sans-serif";
    lengthAdjust(content, 58.4, 54.8, 106);
    lengthAdjust('くらぶ', 61.2, 106.4, 112);
    downloadImg();
  });
} else if(type === 2) {
    drawPath("M 60,12 108,60 60,108 12,60 Z")
    document.fonts.load("16px 'Kosugi Maru'").then(() => {
    ctx.font = "normal 48px 'HG丸ｺﾞｼｯｸM-PRO','Kosugi Maru', sans-serif";
    lengthAdjust(content, 60.4, 50.8, 105.6);
    lengthAdjust('都', 33.6, 102, 51.6);
    ctx.font = "normal 24px 'HG丸ｺﾞｼｯｸM-PRO','Kosugi Maru', sans-serif";
    lengthAdjust('ふぁ', 88, 83.6, 52.8);
    lengthAdjust('ん', 90.8, 106, 28.8);
    downloadImg();
  });
}
