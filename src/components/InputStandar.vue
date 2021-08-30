<template>
  <div
    class="container px-4 mx-auto flex flex-wrap items-center justify-between mt-2"
  >
    <div
      class="border-2 border-red-400 rounded-full bg-white shadow flex w-full "
    >
      <label
        class=" text-white bg-red-400 rounded-tl-full rounded-bl-full  py-2 px-4 text-lg	"
        :for="idString"
        >{{ text }}:
      </label>
      <input
        class="w-full rounded-tr-full rounded-br-full py-2 px-4 outline-none	"
        @input="change(idString)"
        :type="typeString"
        :id="idString"
        v-model="data[idString]"
      />
      <p v-if="val[idString] == false" class="error">
        {{ errorText }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputStandar",
  props: {
    idString: { String, default: "", required: true },
    text: { String, default: "", required: true },
    errorText: {
      String,
      default: "Este campo es obligatorio",
      required: false,
    },
    typeString: { String, default: "text", required: false },
    data: { Object, default: {}, required: true },
    val: { Object, default: {}, required: false },
    change: { Function, default: () => console.log("unUsed"), required: false },
  },
};
</script>

<style scoped>
.error {
  margin-left: 20px;
  color: indianred;
  font-size: 15px;
}
</style>
