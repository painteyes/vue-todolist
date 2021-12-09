Vue.config.devtools = true;

const app = new Vue (
    {
        el: '#root',
        data:{
            todos: [
            {
               text: 'Fare a', 
               display: true,
            }, 
            {
                text: 'Fare b', 
                display: true,
            },
            {
                text: 'Fare c', 
                display: true,
            }
        ], 
        methods: {

        }
    }
);
