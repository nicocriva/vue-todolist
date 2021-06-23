// Descrizione: Rifare l'esercizio della to do list come fatto assieme in classe:
// - stampare in pagina un item per ogni elemento contenuto in un array
// - ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
// - predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista

const app = new Vue(
    {
        el: "#container",
        data: {
            newMessage: [],
            todo: [
                'Visitare la Statua della Libertà',
                'Noleggiare una bicicletta a Central Park',
                'Memoriale dell\'11 settembre',
                'Museo d\'arte moderna - MoMA'
            ]
        },
        methods:{
            addBtn: function(){
                if (this.newMessage == ''){
                } else {
                    this.todo.push(this.newMessage[0].charAt(0).toUpperCase() + this.newMessage.substring(1).toLowerCase())
                }
                this.newMessage = ''
            },
            trash: function(){
                this.todo.splice(this.todo.index, 1)
                if(this.todo.length == 0){
                    document.getElementById('empty').innerHTML = 'To Do list vuota &#128533;'
                }
            }
        }
    }
)