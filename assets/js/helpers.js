// JS by Dan Høegh
// UCN MMD 2021

const h = {
  find: (strSelector) => {
    return document.querySelectorAll(strSelector)
  },
  setInner: (strSelector, content) => {
    h.find(strSelector).forEach(item => {
      item.innerHTML = content;
    });
  },
  joinInner: (strSelector, content) => {
    h.find(strSelector).forEach(item => {
      item.innerHTML += content;
    });
  },
  delInner: (strSelector) => {
    h.find(strSelector).forEach(item => {
      item.innerHTML = "";
    });
  },
  delElm: (strSelector) => {
    h.find(strSelector).forEach(item => {
      item.parentNode.removeChild(item);
    });
  },
  class: {
    add: (strSelector, className) => {
      h.find(strSelector).forEach(item => {
        item.classList.add(className);
      });
    },
    remove: (strSelector, className) => {
      h.find(strSelector).forEach(item => {
        item.classList.remove(className);
      });
    },
    toggle: (strSelector, className) => {
      h.find(strSelector).forEach(item => {
        item.classList.toggle(className);
      });
    }
  }
}