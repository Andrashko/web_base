class List{
    constructor (items = [], parrent = document.body){
        this.items = items;
        this.parrent = parrent;
    }

    #mount(parrent, list){
        parrent.innerHTML = "";
        let ol = document.createElement("ol");       
        for (let emlent of list){
            let li = document.createElement("li");
            li.innerText = emlent;
            ol.appendChild(li);
        }
        parrent.appendChild(ol);   
    }

    mount(){
          this.#mount(this.parrent, this.items);  
    }

    filtredItems(searchString){
        return this.items.filter(item=>item.toUpperCase().includes(searchString.toUpperCase()));
    }

    mountFiltred(searchString){
        this.#mount(this.parrent, this.filtredItems(searchString));
    }
}



let list = new List(["some test","one", "two", "three", "test", "test2"], document.getElementById("list"));
list.mount();

function filterList(){
    let searchString = document.getElementsByName("search")[0].value;
    console.log(searchString);
    list.mountFiltred(searchString);
}

document.getElementsByName("sb")[0].onclick = function(e){
        console.log('button'); 
        e.stopPropagation();
    };