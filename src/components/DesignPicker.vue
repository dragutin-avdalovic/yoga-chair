<template>
  <el-collapse v-model="activeNames" @change="handleChange">
    <el-collapse-item title="Consistency" name="1">
      <ul>
        <li class="krug" style="background-color:#0D0D0D;"></li>
        <li class="krug" style="background-color:#00334D;"></li>
        <li class="krug" style="background-color:#FFFFFF;"></li>
        <li class="krug" style="background-color:#B7B7B7;"></li>
        <li class="krug" style="background-color:#717184;"></li>
        <li class="krug" style="background-color:#BCB5AF;"></li>
        <li class="krug" style="background-color:#0068B4;"></li>
      </ul>
    </el-collapse-item>
    <el-collapse-item title="Feedback" name="2">
      <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>
      <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>
    </el-collapse-item>
    <el-collapse-item title="Efficiency" name="3">
      <div>Simplify the process: keep operating process simple and intuitive;</div>
      <div>Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;</div>
      <div>Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.</div>
    </el-collapse-item>
    <el-collapse-item title="Controllability" name="4">
      <div>Decision making: giving advices about operations is acceptable, but do not make decisions for the users;</div>
      <div>Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.</div>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
export default {
  data () {
    return {
      activeNames: ['1']
    }
  },
  methods: {
    handleChange (val) {
      console.log(val)
    }
  }
}
</script>
