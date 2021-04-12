<template>
  <table class="responsive-table">
    <thead>
      <tr>
        <th>Turma</th>
        <th>Início</th>
        <th>Fim</th>
        <th>Público</th>
        <th>Local</th>
        <th>Atribuir</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="clas in listClasses" :key="clas.intturmaid">
        <td>{{ clas.strturma }}</td>
        <td>
          {{
            new Date(clas.dtainicio)
              | dateFormat("DD MMMM YYYY", dateFormatConfig)
          }}
        </td>
        <td>
          {{
            new Date(clas.dtafim) | dateFormat("DD MMMM YYYY", dateFormatConfig)
          }}
        </td>
        <td>{{ curso.bolpublic ? "Sim" : "Não" }}</td>
        <td>{{ clas.strlocal }}</td>
        <td>
          <p>
            <label>
              <input
                :value="{ id: clas.intturmaid, name: clas.strturma }"
                type="checkbox"
                v-model="checkedClasses"
              />
              <span>Selecionar</span>
            </label>
          </p>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {};
</script>

<style>
</style>