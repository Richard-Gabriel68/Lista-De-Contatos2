let app = new Vue ({
    el: '#app',
    data: {
        lista: [
            {nome: 'João', tel: 23543455},
            {nome: 'Maria', tel: 73283335},
            {nome: 'Marta', tel: 21245644}
        ],
        pesquisa: '',
        nome: '',
        tel: '',

        adicionar : false,
        pesquisar: false,
        mostrar: true
    },
    methods: {
        create: function(){
            this.adicionar = true;
            this.pesquisar = false;
            this.mostrar = false;
        },
        add: function(){
            let newContact = {nome: this.nome, tel: this.tel};
            
            this.lista.push(newContact);
            this.nome = '';
            this.tel = '';
        },
        goBack: function(){
            this.adicionar = false;
            this.pesquisar = true;
            this.mostrar = false;

        },
        show: function(e){
            this.adicionar = false;
            this.pesquisar = false;
            this.mostrar = true;

            let nome = document.querySelector('.mostrar .t');

            nome.innerHTML = e.target.innerHTML

           console.log(e.target.innerHTML)
            
            
        }
    },
    computed: {
        listaF: function (){
            return this.lista.filter(function(item){
                if (this.pesquisa != ''){
                    
                    if (item.nome.indexOf(this.pesquisa) > -1) {
                        return true;
                    }

                    else {
                        return false;
                    }
                }
                else {
                    return true;
                }
            }, this)
        }
    }
})