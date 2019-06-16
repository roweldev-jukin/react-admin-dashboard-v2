/* eslint-disable guard-for-in, no-restricted-syntax, no-useless-escape */

/**
 * 
 * @param needle	string	string to compare
 * @param haystack 	array	array list
 * 
 * @returns boolean
 */

export const inArray = (needle, haystack) => {
  for (const i in haystack) {
    if (haystack[i] === needle) return true;
  }
  return false;
};


export const validate = {
  email: (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  },
  url: (webUrl) => {
    const url = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
    return url.test(webUrl);
  },
  password: (password) => {
    const pd = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{8,}$/;
    return pd.test(password);
  }
};

 /**
 * 
 * @param parentNode string the parent tag/class/id you are looking for
 * @param childNode any html event target e.i event.target
 * @param type string tag/id/class
 */

export const getParent = (parentNode: string, childNode: any, type: string) => {
  let obj = childNode.parentNode;
  if (type === 'tag' || type == null) {
    try {
      while (obj.tagName !== parentNode) {
        obj = obj.parentNode;
      }
    } catch(e) {
      return null
    }
  }
  else if (type === 'id') {
    try {
      while (obj && obj.id !== parentNode) {
        obj = obj.parentNode;
      }
    } catch(e) {
      return null;
    }
     
    
    return null;
  }
  else if (type === 'class') {
    while (obj.classList.contains(parentNode) === false) {
      obj = obj.parentNode;
    }
  }
  return obj;
}

export const toggleSidebar = () => {

  document.querySelectorAll("aside, .overlay").forEach(elem => {
    elem.classList.toggle('active');
  });

  if (document.querySelector('.bottom-toggler').classList.contains('active')) {
    document.querySelector('.bottom-toggler').classList.remove('active');
  }

  // if (document.querySelector('aside').classList.contains('active')){

  // }

  // $("aside, .overlay").toggleClass("active");
  // if ($(".bottom-toggler").hasClass("active")) {
  //   $(".bottom-toggler").removeClass("active");
  // }
  // if ($("aside").hasClass("active")) {
  //   _self.collapseSpandedNav(false);
  // } else {
  //   _self.collapseSpandedNav(true);
  // }
    
}