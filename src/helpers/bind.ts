
const binds = [
  {
    id: 0,
    bind: '+',
    function: () => {
      const inputfield = document.getElementById("add-task") as HTMLInputElement;
      inputfield.focus();
    },
  },
];

document.onkeyup = function(e) {
  binds.forEach(bind => {
    if (e.key === bind.bind) {
      bind.function();
    }
  })
}

export {}