function fdt(date, fmt = 0, ishm = 0) {
  let Y = String(date.getFullYear());
  let M = String(date.getMonth() + 1);
  let D = String(date.getDate());
  let H = String(date.getHours());
  let F = String(date.getMinutes());
  let FM = String(date.getSeconds());
  let HM = String(date.getMilliseconds());
  if (fmt === 0) {
    if (M.length === 1) {
      M = "0" + M;
    };
    if (D.length === 1) {
      D = "0" + D;
    };
    if (H.length === 1) {
      H = "0" + H;
    };
    if (F.length === 1) {
      F = "0" + F;
    };
    if (FM.length === 1) {
      FM = "0" + FM;
    };
    if (HM.length === 1) {
      HM = "00" + HM;
    } else if (HM.length === 2) {
      HM = "0" + HM;
    };
  }
  let rdt = Y + "-" + M + "-" + D + " " + H + ":" + F + ":" + FM
  if (ishm === 1) {
    rdt = rdt + ":" + HM
  }
  return rdt;
}

function otm(x) {
  if (x == 0) {
    document.getElementById("dt").innerHTML = "时间 : " + fdt(new Date(), 0, 1);
  } else {
    document.getElementById("shoucang").innerHTML = fdt(new Date(), 0, 1);
  };
}

setInterval("otm(0)",1)