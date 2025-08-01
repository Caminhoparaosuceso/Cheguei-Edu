// =====================
// ChegueiEdu - script.js
// =====================

// 1️⃣ Carregar dados salvos do navegador (LocalStorage)
function carregarDadosSalvos() {
  document.getElementById('aluno').value = localStorage.getItem('aluno') || '';
  document.getElementById('turma').value = localStorage.getItem('turma') || '';
}

// 2️⃣ Enviar notificação "Cheguei!" para o Firebase
function enviarCheckin() {
  const aluno = document.getElementById('aluno').value.trim();
  const turma = document.getElementById('turma').value.trim();

  if (!aluno || !turma) {
    alert("Preencha o nome do aluno e a turma!");
    return;
  }

  // Salvar no navegador
  localStorage.setItem('aluno', aluno);
  localStorage.setItem('turma', turma);

  // Criar objeto da notificação
  const checkin = {
    aluno: aluno,
    turma: turma,
    horario: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
    acao: "Liberar o aluno para saída"
  };

  // Enviar para o Firebase (nó "checkins")
  db.ref("checkins").push(checkin)
    .then(() => {
      alert("Notificação enviada! Aguarde a liberação do aluno.");
    })
    .catch((error) => {
      console.error("Erro ao enviar:", error);
    });
}

// 3️⃣ Atualizar painel da recepção em tempo real
function iniciarRecepcao() {
  const lista = document.getElementById('lista-checkins');
  if (!lista) return; // Só roda na recepção

  db.ref("checkins").on("child_added", (snapshot) => {
    const checkin = snapshot.val();
    
    // Criar elemento visual para a notificação
    const item = document.createElement('div');
    item.className = "notificacao";
    item.innerHTML = `
      <strong>${checkin.aluno}</strong> - ${checkin.turma}<br>
      <small>${checkin.horario} - ${checkin.acao}</small>
    `;

    // Adicionar na tela
    lista.prepend(item);
  });
}

// 4️⃣ Iniciar funções corretas dependendo da página
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById('aluno')) {
    carregarDadosSalvos();
  }
  iniciarRecepcao();
});