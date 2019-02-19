class FeedBack {
    constructor(id, author, text, isApproved, container) {
        this.id = id;
        this.author = author;
        this.text = text;
        this.isApproved = isApproved;
        this.container = container;
        this._render();
    }
    _render() {        
        let $wrapper = $('<article/>', {
            class: 'feedback'            
        });
        let $divAuthorIsApproved = $('<div/>', {
            class: 'author-is-approved'
        });
        let $txt = $('<p/>', {
            class: 'feedback-txt',
            text: this.text
        });
        let $author = $(`<p>Автор: <span class="feedback-author">${this.author}</span></p>`);
        let $isApproved = $('<p/>', {
            class: 'feedback-approved',
            text: this.isApproved?'Отзыв одобрен':'Отзыв на рассмотрении'
        });
        let $approveBtn = $('<button/>', {
            class: 'approve-btn',
            text: 'Одобрить'
        });
        
        $approveBtn.on('click', () => {
            this.isApproved = true;
            $isApproved.text('Отзыв одобрен');
            $approveBtn.remove();
        })
        
        let $removeBtn = $('<button/>', {
            class: 'remove-btn',
            text: 'Удалить'
        });
        
        $removeBtn.on('click', () => $removeBtn.closest('.feedback', '#feedbacks-div').remove()); //по нажатию удалим всего ближайшего родителя - блока с отзывом
        
        //Структура
        $author.appendTo($divAuthorIsApproved);
        $isApproved.appendTo($divAuthorIsApproved);
        $divAuthorIsApproved.appendTo($wrapper);
        $txt.appendTo($wrapper)
        if (!this.isApproved){
            $approveBtn.appendTo($wrapper);
        };
        $removeBtn.appendTo($wrapper);
        $(this.container).append($wrapper);          
    }
}
