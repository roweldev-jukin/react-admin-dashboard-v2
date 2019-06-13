export const toggleSidebar = (mode) => {
  document.querySelectorAll(".hamburger--spring, aside, .aside-profile, .overlay, footer").forEach(element => {
    if (mode === 'toggle') element.classList.toggle("active")
    else element.classList.remove("active")
  });
}

export const test = () => {}