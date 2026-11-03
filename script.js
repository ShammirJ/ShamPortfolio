const dlg = document.getElementById("email-dialog");
document.getElementById("email-btn").onclick = () => dlg.showModal();
document.getElementById("email-close").onclick = () => dlg.close();
// clicking the backdrop (the dialog element itself) closes it
dlg.onclick = (e) => e.target === dlg && dlg.close();
