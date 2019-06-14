export const toggleSidebar = (mode) => {
  if(window.innerWidth > 991) {
    document.body.classList.toggle('compact');
  } else {
    document.querySelectorAll(".hamburger--spring, aside, .aside-profile, .overlay, footer").forEach(element => {
      if (mode === 'toggle') element.classList.toggle("active")
      else element.classList.remove("active")
    });
  }
}

export const test = () => {}