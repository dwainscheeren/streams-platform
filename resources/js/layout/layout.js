(function (window, document) {

    const layout = document.querySelector('textarea[name="sections"]');
    const start = layout.closest('.card');

    document.querySelector('a[data-add="tabs"]').addEventListener('click', function () {

        start.insertAdjacentHTML('afterEnd', '<div class="card ">' +

            '<ul class="nav nav-sections ">' +
            '<li class="nav-item  active">' +
            '<a href="#tab-general" data-toggle="tab" class="nav-link">' +
            'General' +
            '</a>' +
            '</li>' +
            '</ul>' +

            '<div class="card-block">' +

            '<div class="tab-pane  active" id="tab-general">' +

            '<div class="field-group">' +
            '<div lang="en" class="form-group">' +

            '<label class="control-label">' +
            'Title' +

            '<span class="required">*</span>' +

            '</label>' +

            '<p class="text-muted">Specify a short descriptive name for this page.</p>' +

            '<div>' +
            'INPUT' +
            '</div>' +

            '</div>' +

            '</div>' +

            '<div class="field-group">' +
            '<div class="form-group">' +

            '<label class="control-label">' +
            'Slug' +

            '<span class="required">*</span>' +

            '</label>' +

            '<p class="text-muted">The slug is used in building the page\'s URL.</p>' +


            '<div>' +
            'INPUT' +
            '</div>' +

            '</div>' +

            '</div>' +

            '</div>' +

            '</div>' +

            '</div>');

        return false;
    });

    document.querySelector('a[data-add="section"]').addEventListener('click', function () {

        start.insertAdjacentHTML('afterEnd', '<div class="card ">' +

            '<div class="card-block">' +

            '<div class="field-group">' +
            '<div lang="en" class="form-group">' +

            '<label class="control-label">' +
            'Title' +

            '<span class="required">*</span>' +

            '</label>' +

            '<p class="text-muted">Specify a short descriptive name for this page.</p>' +

            '<div>' +
            'INPUT' +
            '</div>' +

            '</div>' +

            '</div>' +

            '<div class="field-group">' +
            '<div class="form-group">' +

            '<label class="control-label">' +
            'Slug' +

            '<span class="required">*</span>' +

            '</label>' +

            '<p class="text-muted">The slug is used in building the page\'s URL.</p>' +


            '<div>' +
            'INPUT' +
            '</div>' +

            '</div>' +

            '</div>' +

            '</div>' +

            '</div>');

        return false;
    });

})(window, document);