//23. RGB to Hexadecimal color converter
function RGBToHex(r,g,b) {
  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);

  if (r.length == 1)
    r = "0" + r;
  if (g.length == 1)
    g = "0" + g;
  if (b.length == 1)
    b = "0" + b;

  return r + g + b;
}

console.log(RGBToHex(255, 255, 255)); // FFFFFF
console.log(RGBToHex(255, 255, 300)); // FFFFFF
console.log(RGBToHex(0,0,0));         // 000000
console.log(RGBToHex(148, 0, 211));   // 9400D3
console.log(RGBToHex(16, 15, 18));    // 110F12
