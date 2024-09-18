        /* Webscraping - site - https://www.farmrio.com.br/novidades */

// 1
    function listarPreco() {
        let listaPrecos = []
        let precos = document.querySelectorAll(".shelf-product__price-best")

        for (let i = 0; i < precos.length; i++){
            listaPrecos.push(precos[i].textContent)
        }
        return listaPrecos 
    } 
        // listarPreco()

// 2
    function listarRoupas() {
        let roupas = document.querySelectorAll(".shelf__product")
        return roupas.length 
    }
        // listarRoupas()


//3
    function listarNomeRoupas() {
        let roupas = []
        let listaRoupas = document.querySelectorAll(".shelf-product__title")

        for (let i = 0; i < listaRoupas.length; i++){
            roupas.push(listaRoupas[i].textContent)
        }
        return roupas 
    }
        //listarNomeRoupas()

//4
    function listarItensMenu() {
        let listaItensMenu = []
        let itensMenu = document.querySelectorAll("a.menu__link--level-1 > p")

        for (let i = 0; i < itensMenu.length; i++){
            listaItensMenu.push(itensMenu[i].textContent)
        }
        return listaItensMenu
    }
        //listarItensMenu()

/*CSS*/

//1
    function alterarBackgroundHeader() {
        let header = document.querySelector("header.header.is_stuck");
        if (header) {
            header.style.backgroundColor = "#008B52"; // Cor verde 
            console.log("Background do header alterado com sucesso.");
            return true;
        } else {
            console.log("Não foi possível encontrar o elemento header.");
            return false;
        }
    }
        //alterarBackgroundHeader()

//2 

    function mudarHeaderBackgroundColor(color) {
        let header = document.querySelector('.header');
        header.style.backgroundColor = color;
    } 
        // mudarHeaderBackgroundColor('#000000')

//3
    function mudarHoverBackgroundColor(color) {
        let hoverElements = document.querySelectorAll('a.menu__link.menu__link--level-1');
        hoverElements.forEach(element => { element.style.backgroundColor = color; })
    }
        // mudarHoverBackgroundColor('#412554')

//4
    function pintarItensMenu() {
        let colorItensMenu = []
        let itensMenu = document.querySelectorAll("a.menu__link--level-1 > p")

        for (let i = 0; i < itensMenu.length; i++){
        colorItensMenu.push(itensMenu[i].style.color = "white")
        }
        return colorItensMenu 
    }
        //pintarItensMenu()