const container = new Vue({
    el: '#container',
    data: {
        listaSpesa: [
            {
                text: "pane",
                done: false,
            },
            {
                text: "pasta",
                done: false,
            },
            {
                text: "pesce",
                done: false,
            },
        ],
        articolo: "",
    },
    methods: {
        preso(index){
            this.listaSpesa[index].done = true;
        },
        remove(index){
            /* this.listaSpesa[index].done = true; */
            this.listaSpesa.splice(index, index + 1)
        },
        aggiungi(){
            const nuovaCosa = {
                text: this.articolo,
                done: false,
            }
            this.listaSpesa.push(nuovaCosa)
        },
    },
})