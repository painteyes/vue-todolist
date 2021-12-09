Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',
        data:{
            newTodoText:'',
            todos: [
            {
               text: 'Fare x', 
               done: false,
            }, 
            {
                text: 'Fare y', 
                done: false,
            },
            {
                text: 'Fare z', 
                done: false,
            }
        ]
        }, 
        methods: {
            addNewTodo: function () {

                if (this.newTodoText.trim() !== '') {
                    this.todos.unshift(
                        {
                            text: this.newTodoText.trim(),
                            done: false,
                        }
                    );
                }   

                this.newTodoText ='';
            },
            deleteTodo: function(index) {
                this.todos.splice(index, 1)
            },
            completeTodo: function(index) {
                this.todos[index].done = !this.todos[index].done;
            },
        }
    }
);
