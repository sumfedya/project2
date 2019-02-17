Vue.component('feedback', {
    props: ['fb'],
    computed: {
       isApproved: function(){
           let txt = this.fb.isApproved?'Отзыв одобрен':'Отзыв на рассмотрении';
           return txt;
       }  
    },
    methods:{
    approveFeedback: function(){
        this.fb.isApproved = true;           
      }  
    },
    template: `
    <article class="feedback">
        <div class="author-is-approved">
            <p>Автор <span class="feedback-author">{{fb.author}}</span></p>
            <p class="feedback-approved">{{isApproved}}</p>            
        </div>
        <p class="feedback-txt">{{fb.text}}</p>
        <button @click="$emit('deletefb')" class="remove-btn">Удалить</button> 
        <button v-if="!this.fb.isApproved" @click="approveFeedback" class="approve-btn">Одобрить</button>        
    </article>
    `

})
