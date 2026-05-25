
ScrollReveal().reveal('.reveal', {
distance:'60px',
duration:1200,
interval:200,
origin:'bottom'
});

function showResult(type){

const resultBox = document.getElementById('result-box');

let html = '';

if(type === 'rostov'){
html = `
<h3>Семья Ростовых — «Война и мир»</h3>
<p>
Вы цените эмоциональную близость, поддержку и семейное тепло.
</p>
`;
}

if(type === 'mironov'){
html = `
<h3>Семья Мироновых — «Капитанская дочка»</h3>
<p>
Для вас важны честность, верность и взаимное уважение.
</p>
`;
}

if(type === 'bolkonsky'){
html = `
<h3>Семья Болконских — «Война и мир»</h3>
<p>
Вы считаете главными ответственность, дисциплину и долг.
</p>
`;
}

if(type === 'bazarov'){
html = `
<h3>Герои «Отцов и детей»</h3>
<p>
Вы цените свободу взглядов, независимость и личный выбор.
</p>
`;
}

resultBox.style.display = 'block';
resultBox.innerHTML = html;
}
