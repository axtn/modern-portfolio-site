// Prevent bots from spamming my email

(function() {
    var emailButton = document.querySelector('.button--email');
    var axtnEmail = 'hi@' + 'axtn.io';

    var addEmail = function() {
        this.href="mailto:" + axtnEmail;
    }

    emailButton.addEventListener('click', addEmail);
    emailButton.addEventListener('contextmenu', addEmail);
})();