Vue.config.devtools= true;

var app= new Vue({
    el:"#app",
    data:{
        contacts:[
            {
                name: 'Michele',
                avatar: "./img/avatar_1.jpg",
                visible: true,
                messages: [
                {
                    date: '10/01/2020 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    text: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    text: 'Tutto fatto!',
                    status: 'recieved'
                },
                {
                    date: '10/01/2020 16:18:45',
                    text: 'Fatto? Bene!',
                    status: 'sent'
                }
            ],

            },
            {
                name: 'Fabio',
                avatar: "./img/avatar_2.jpg",
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'recieved'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
        
            {
                name: 'Samuele',
                avatar: "./img/avatar_3.jpg",
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'recieved'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'recieved'
                    }
                ],

            },
            {
                name: 'Luisa',
                avatar: "./img/avatar_4.jpg",
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'recieved'
                    }
                ],
            }
        ],
        user:{
            name:"Tony",
            avatar:"./img/avatar_6.jpg" ,
        },
        indexContact:0,
    },

    
    

    methods:{
        AvatarPic(contact){
            
            return `img/avatar${contact.avatar}.jpg`;
        },
        
        changeContact(index){
            console.log(index)
            this.indexContact = index;
            

        },
    }
})

