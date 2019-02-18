const form = document.querySelector("#contact");

form.addEventListener('submit', (e) => {
  e.preventDefault();
  db.collection('emails').add({
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  });
  form.name.value = '';
  form.email.value = '';
  form.message.value = '';
});

db.collection('cafes').orderBy('name').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        console.log(doc.data());
    })
})
