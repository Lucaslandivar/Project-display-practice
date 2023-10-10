// *Seleção de Elementos
const menu = document.getElementById("menu");
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");

// *Eventos
openMenu.addEventListener("click", () => {
    menu.style.display = "flex";
    menu.style.right = (menu.offsetWidth * -1) + "px";
    openMenu.style.display = "none";

    setTimeout(() => {
        menu.style.opacity = "1";
        menu.style.right = "0";
    }, 10)
});

closeMenu.addEventListener("click", () => {
    menu.style.opacity = "0";
    menu.style.right = (menu.offsetWidth * -1) + "px";
    
    setTimeout(() => {
        menu.removeAttribute("style");
        openMenu.removeAttribute("style");
    }, 200)
});

// !4layout.js

document.addEventListener('DOMContentLoaded', () => {
    const copyCssButton = document.getElementById('fourLayout');
  
    // TODO: Função para copiar o código CSS especificado para a área de transferência
    function copyCssToClipboard() {
      const cssCodeToCopy = `
      /* ?Geral */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    display: flex;
    flex-wrap: wrap;
    margin: 3px;
    flex: 1 1 100vw;
    background: #a1a1a1a1;    
}

header, nav, main, aside, footer {
    background: #a1a1a1a1;
    display: flex;
    margin: 3px;
}

a {
    color: inherit;
    text-decoration: none;
}

/* *Header */
header {
    flex: 1 1 100vw;
    /* ?height: 100px; */
}

header #logo {
    flex: 0 1 200px;
    background: #c9c9c9;
}

#openMenu, #closeMenu {
    border: none;
    background: none;
    font-size: 30px;
    font-weight: bold;
    padding: 2px 5px 0px 5px;
    cursor: pointer;
    display: none;
}

/* *Nav */
nav {
    flex: 1 1 100vw;
    align-items: center;
    justify-content: flex-end;
}

nav a {
    margin: 5%;
    font-size: 20px;
}

/* *Main */
main {
    flex: 20 1 500px;
    /* ?height: calc(100vh - 224px); */
    flex-wrap: wrap;
    overflow: auto;
}

main section {
    width: 100%;
    height: 1000px;
    margin: 10px;
    background: linear-gradient(#9a9a9a, #5a5a5a, #1a1a1a);
}

/* *Aside */
aside {
    flex: 1 1 200px;
}

/* *Footer */
footer {
    flex: 1 1 100vw;
    /* ?height: 100px; */
}

/* !Responsividade */
@media only screen and (max-width: 923px) {
    header {
        order: 0;
    }
    
    main {
        order: 1;
    }

    aside {
        flex: 1 1 100vw;
        order: 2;   
    }

    footer {
        order: 3;
    }
}

@media only screen and (max-width: 717px) {
    #openMenu, #closeMenu {
        display: block;
    }

    #openMenu {
        margin-left: auto;
    }

    #closeMenu {
        position: fixed;
        right: 15px;
        top: 15px;
    }

    nav {
        position: fixed;
        flex-direction: column;
        width: 100vw;
        background: rgba(255, 255, 255, 0.8);
        align-items: center;
        justify-content: center;
        margin: 0;
        opacity: 0;
        transform: 0.3s;
    }
}`;
  
      // *Cria uma área de texto temporária para copiar o código CSS
      const tempTextArea = document.createElement('textarea');
      tempTextArea.value = cssCodeToCopy;
  
      // *Anexa a área de texto ao documento
      document.body.appendChild(tempTextArea);
  
      // *Seleciona o texto e copia para a área de transferência
      tempTextArea.select();
      document.execCommand('copy');
  
      // *Remove a área de texto temporária
      document.body.removeChild(tempTextArea);
  
      // *Fornece um feedback ao usuário (opcional)
      alert('O código CSS foi copiado para a área de transferência.');
    }
  
    // *Adiciona um ouvinte de eventos de clique ao botão
    copyCssButton.addEventListener('click', copyCssToClipboard);
  });