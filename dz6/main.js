new Vue({
    el: '#app',
    data: {
        feedbacks: []
    },
    mounted(){
        that = this;
        fetch('feedback.json')
            .then(result => result.json())
            .then(data => {
                that.feedbacks = data;
            })
    },
    methods: {
        removeFeedback: function(index){
            console.log(index);
            this.feedbacks.splice(index,1);
        }
    }
})