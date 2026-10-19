// Tap the email chip to copy the address; a checkmark confirms for 2 seconds.
// Without clipboard access (old browsers), it opens the mail app instead.
document.querySelectorAll('.email-chip').forEach(function (chip) {
  chip.addEventListener('click', function () {
    var email = chip.dataset.email;
    var done = function () {
      chip.classList.add('copied');
      setTimeout(function () { chip.classList.remove('copied'); }, 2000);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(done, function () { window.location.href = 'mailto:' + email; });
    } else {
      window.location.href = 'mailto:' + email;
    }
  });
});
