class FeedBacks {
    constructor(source, container, containerForm) {
        this.source = source;
        this.container = container;
        this.containerForm = containerForm;
        this._init();
    }
    _init() {
        fetch(this.source)
            .then(result => result.json())
            .then(data => {
                for (let dataItem of data) {
                    let fb = new FeedBack(dataItem.id, dataItem.author, dataItem.text, dataItem.isApproved, this.container);
                }
            })
            .then(this._renderForm())
    }
    _renderForm() {
        let $form = $('<form class="fbForm"></form>');
        let $fieldset = $('<fieldset class="fbFieldset"></fieldset>');
        let $legend = $('<legend>Оставьте свой отзыв</legend>');

        let $idLabel = $('<label/>', {
            class: 'id-label',
            text: 'id'
        });

        let $id = $('<input/>', {
            class: 'input-id',
            name: 'input-id',
            placeholder: 'id отзыва'
        })

        let $authorLabel = $('<label/>', {
            class: 'author-label',
            text: 'Имя'
        });

        let $author = $('<input/>', {
            name: 'author',
            class: 'input-author',
            placeholder: 'Имя автора'
        })

        let $txtLabel = $('<label/>', {
            class: 'txt-label',
            text: 'Отзыв'
        });

        let $txt = $('<textarea/>', {
            name: 'feedbackTxt',
            placeholder: 'Текст отзыва'
        });

        let $sendBtn = $('<button/>', {
            class: 'send-btn',
            text: 'Отправить'
        });

        $sendBtn.on('click', (e) => {
            e.preventDefault();
            let newFB = new FeedBack($id.val(), $author.val(), $txt.val(), false, this.container);
            $id.val('');
            $author.val('');
            $txt.val('');
        });

        $idLabel.append($id);
        $authorLabel.append($author);
        $txtLabel.append($txt);

        $fieldset.append($legend);
        $fieldset.append($idLabel);
        $fieldset.append($authorLabel);
        $fieldset.append($txtLabel);
        $fieldset.append($sendBtn);

        $fieldset.appendTo($form);
        $form.appendTo(this.containerForm);
    }
}
