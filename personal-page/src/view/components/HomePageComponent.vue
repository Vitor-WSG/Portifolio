<template>
  <div style="display: flex; height: 800px" class="row">
    <!-- lado esquerdo -->
    <div style="background-color: black; color: white" class="col-8">
      <div style="display: flex" class="justify-start q-ml-lg">
        <barra-menu-component></barra-menu-component>
      </div>

      <div style="display: flex" class="row q-gutter-md q-ml-md">
        <div class="col-8">
          <h2>
            <span>Desenvolvedor</span>
            <br />
            <span>Fron End</span>
          </h2>
        </div>
        <div class="col-8">
          <h6>
            Olá, meu nome é Vitor Gomes, sou graduado em Engenharia Elétrica, e
            Análise de Desenvolvimento de Sistemas. Atualmente atuo como
            desenvolvedor <span style="color:yellow">JavaScript</span>, com <span style="color:#2f74c0">TypeScript</span>. Minha
            especialidade é desenvolvimento front end, com <span style="color:#42b884">VueJs</span><br /><br />
            Navegue pelo meu site para saber mais sobre mim ... Have a fun !
          </h6>
        </div>
      </div>
    </div>

    <!-- lado direito -->
    <div style="background-color: grey; color: black" class="col-4">
      <div>
        <contato-component></contato-component>
      </div>
      <div
        style="
          border: 1px white;
          width: 400px;
          height: 400px;
          position: absolute;
          right: 20%;
          top: 20%;
        "
      >
        <q-img
          src="../../assets/images/fotoPerfil.jpeg"
          :ratio="1"
          class="col-1"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BarraMenuComponent from './BarraMenuComponent.vue';
import ContatoComponent from './ContatoComponent.vue';
</script>
