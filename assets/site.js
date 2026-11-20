(function () {
  "use strict";

  // Mobile menu
  var btn = document.querySelector(".menu-btn");
  var nav = document.getElementById("site-nav");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Footer year
  var yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();

  var inr = function (n) {
    return "\u20B9" + Math.round(n).toLocaleString("en-IN");
  };
  var $ = function (id) { return document.getElementById(id); };

  // EMI calculator
  var emi = $("emi-calc");
  if (emi) {
    var amt = $("emi-amount"), rate = $("emi-rate"), ten = $("emi-tenure");
    var run = function () {
      var P = +amt.value, r = +rate.value / 12 / 100, n = +ten.value;
      var e = r === 0 ? P / n : (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      var total = e * n, interest = total - P;
      $("emi-amount-out").textContent = inr(P);
      $("emi-rate-out").textContent = (+rate.value).toFixed(1) + "%";
      var y = Math.floor(n / 12), m = n % 12;
      $("emi-tenure-out").textContent = (y ? y + " yr" + (y > 1 ? "s" : "") : "") + (y && m ? " " : "") + (m ? m + " mo" : "");
      $("emi-result").textContent = inr(e);
      $("emi-principal").textContent = inr(P);
      $("emi-interest").textContent = inr(interest);
      $("emi-total").textContent = inr(total);
      $("emi-bar").style.width = Math.max(2, (P / total) * 100) + "%";
    };
    [amt, rate, ten].forEach(function (el) { el.addEventListener("input", run); });
    run();
  }

  // SIP calculator
  var sip = $("sip-calc");
  if (sip) {
    var mi = $("sip-amount"), rr = $("sip-rate"), yy = $("sip-years");
    var runSip = function () {
      var P = +mi.value, i = +rr.value / 12 / 100, n = +yy.value * 12;
      var fv = i === 0 ? P * n : P * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
      var invested = P * n, gain = fv - invested;
      $("sip-amount-out").textContent = inr(P);
      $("sip-rate-out").textContent = (+rr.value).toFixed(1) + "%";
      $("sip-years-out").textContent = yy.value + " yrs";
      $("sip-result").textContent = inr(fv);
      $("sip-invested").textContent = inr(invested);
      $("sip-gain").textContent = inr(gain);
      $("sip-bar").style.width = Math.max(2, (invested / fv) * 100) + "%";
    };
    [mi, rr, yy].forEach(function (el) { el.addEventListener("input", runSip); });
    runSip();
  }

  // Contact form -> opens WhatsApp with the details filled in
  var form = $("contact-form");
  if (form) {
    var params = new URLSearchParams(location.search);
    var pre = params.get("service");
    if (pre && form.elements["service"]) {
      for (var k = 0; k < form.elements["service"].options.length; k++) {
        if (form.elements["service"].options[k].value === pre) form.elements["service"].selectedIndex = k;
      }
    }
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var f = form.elements;
      var phone = (f["phone"].value || "").replace(/[^\d+]/g, "");
      var status = $("form-status");
      if (!f["name"].value.trim() || phone.replace(/\D/g, "").length < 10) {
        status.textContent = "Please enter your name and a 10-digit mobile number.";
        return;
      }
      var lines = [
        "Hello Credit Agricote, I'd like a callback.",
        "Name: " + f["name"].value.trim(),
        "Mobile: " + phone,
        "Looking for: " + f["service"].value
      ];
      if (f["message"].value.trim()) lines.push("Details: " + f["message"].value.trim());
      status.textContent = "Opening WhatsApp\u2026";
      window.open("https://wa.me/917977540128?text=" + encodeURIComponent(lines.join("\n")), "_blank", "noopener");
    });
  }
})();
