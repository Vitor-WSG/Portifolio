<template>
  <div class="row justify-evenly q-my-xl">
    <div class="col-6">
      <h2 class="text-brown-3">Vitor W. S. Gomes</h2>
      <h4 class="texto-animado text-brown-8">><span></span></h4>
      <p class="text-brown-2">
        Tenho cursos complementares nas áres de desenvolvimento Front End (
        HTML5, CSS3, JavaScript, Vue JS, Quasar,Swagger,Postman ) já trabalhei
        com tecnologias voltadas para banco de dados (SQL,Postgresql,MySQL), e
        cultura Devops ( Ansible, Docker). Atualmente atuo como desenvolvedor
        Front-end utilizando JavaScript junto com a Framework Vue JS.
      </p>
    </div>
    <div class="col-6">
      <q-img
        src="https://media.licdn.com/dms/image/D4D03AQHRJYWJl9AwYw/profile-displayphoto-shrink_800_800/0/1667331409116?e=1709164800&v=beta&t=20W670Iry4gOEayAQ-QnJyKZ4vCCVnNpyfYgA3jHZzI"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.texto-animado {
  font-size: 40px;
  color: white;
}

.texto-animado span {
  position: relative;
}

.texto-animado span::before {
  content: '';
  color: brown;
  animation: palavras 25s infinite;
}

.texto-animado span::after {
  content: '';
  position: absolute;
  height: 100%;
  border-left: 2px solid brown;
  right: -10px;
  animation: cursor 0.8s infinite, digitando 25s steps(15) infinite;
  width: calc(100% + 13px);
  background-color: black;
}

@keyframes digitando {
  10%,
  15%,
  30%,
  35%,
  50%,
  70%,
  90%,
  95% {
    width: 0;
  }
  5%,
  20%,
  40%,
  60%,
  65%,
  80%,
  85% {
    width: calc(100% + 13px);
  }
}

@keyframes cursor {
  0% {
    border-left: 2px solid black;
  }
}

@keyframes palavras {
  0%,
  10% {
    content: '';
  }
  11%,
  80% {
    content: 'Desenvolvedor Front End';
  }
  81%,
  100% {
    content: '';
  }
}
</style>
