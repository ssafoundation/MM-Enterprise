(function($) {
    "use strict";
    // ==============nav toggle ===============
    var monyrtoggle = {
        navToggle: document.querySelector('.nav-toggle'),
        doToggle: function(e) {
            e.preventDefault();
            this.navToggle.classList.toggle('expanded');
        }
    };
    monyrtoggle.navToggle.addEventListener('click', function(e) { monyrtoggle.doToggle(e); });
    $(".nav-toggle").click(function() {
        $(".header-navbar ul").slideToggle('slow');
    });
})(jQuery);