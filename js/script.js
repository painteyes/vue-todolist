Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',
        data:{
            newTodoText:'',
            todos: [
            {
               text: 'Fare x', 
               display: true,
            }, 
            {
                text: 'Fare y', 
                display: true,
            },
            {
                text: 'Fare z', 
                display: true,
            }
        ]
        }, 
        methods: {
            addNewTodo: function () {
                this.todos.push(
                    {
                        text: this.newTodoText,
                        display: true,
                    }
                );
                this.newTodoText ='';
            },
            deleteTodo: function(index) {
                this.todos.splice(index, 1)
            }
        }
    }
);
