<template>
  <div>
    <div class="convert">
      <div>
        <h2>Text</h2>
        <textarea name="text" id="text" cols="30" rows="10" v-model="textRaw" @keypress.enter="convertToMorse"></textarea>
      </div>
      <div>
        <h2>Code Morse</h2>
        <textarea name="morse" id="morse" cols="30" rows="10" v-model="codeMorse"></textarea>
      </div>
    </div>
    <div class="btn-list">
      <button @click="convertToMorse">Ubah</button>
    </div>
  </div>
</template>

<script>
import code from "@/assets/code.json";

export default {
  data() {
    return {
      textRaw: "",
      codeMorse: "",
      code: code,
    };
  },
  methods: {
    convertToMorse() {
      const text = this.textRaw.toUpperCase();
      let listText = text.split("");

      let result = [];
      listText.forEach((item) => {
        this.code.forEach((element) => {
          if (item === element.letter) {
            result.push(element.code);
          }
        });
      });

      this.codeMorse = result.join("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.convert {
  display: flex;
  gap: 20px;

  textarea {
    font-size: 18px;
    padding: 10px;
    resize: none;
  }
}

.btn-list {
  display: flex;
  gap: 20px;
  button {
    padding: 10px 30px;
    font-size: 16px;
    background: rgb(0, 141, 19);
    color: white;
    font-weight: bolder;
    border: 2px rgb(0, 141, 19) solid;
    cursor: pointer;
  }
  button:hover {
    background: white;
    color: rgb(0, 141, 19);
  }
}
</style>
