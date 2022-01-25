const navbar_btn = document.querySelector(".navbar_btn");
navbar_btn.onmousemove = (e) => {
  const x = e.pageX - navbar_btn.offsetleft;
  const y = e.pageY - navbar_btn.offsetTop;

  navbar_btn.style.setProperty("--x", "${x}px");
  navbar_btn.style.setProperty("--y", "${y}px");
};
