<template>
  <div class="chair-design-picker">
  <el-col>
  <el-collapse v-model="activeName" @change="handleChange" >
    <el-collapse-item title="Base" name="1">
      <div class="base-array" ref="base">
        <div class="base-container"  @click="selectBase($event)">
          <img class="base-image" src="../assets/Base 2.png" base="2"/>
        </div>
        <div class="base-container"  @click="selectBase($event)">
          <img class="base-image" src="../assets/Base 2.png" base="2"/>
        </div>
        <div class="base-container"  @click="selectBase($event)">
          <img class="base-image" src="../assets/Base 1.png" base="1"/>
        </div>
        <div class="base-container"  @click="selectBase($event)">
          <img class="base-image" src="../assets/Base 1.png" base="1"/>
        </div>
      </div>
    </el-collapse-item>
    <el-collapse-item title="Base finish" name="2">
      <div class="circle-container">
        <div class="circle" style="background-color:#0D0D0D;"></div>
        <div class="circle" style="background-color:#00334D;"></div>
        <div class="circle" style="background-color:#FFFFFF;"></div>
        <div class="circle" style="background-color:#B7B7B7;"></div>
        <div class="circle" style="background-color:#717184;"></div>
        <div class="circle" style="background-color:#BCB5AF;"></div>
        <div class="circle" style="background-color:#0068B4;"></div>
        <div class="circle" style="background-color:#6D6456;"></div>
        <div class="circle" style="background-color:#D0D1B0;"></div>
        <div class="circle" style="background-color:#414042;"></div>
        <div class="circle" style="background-color:#7A7A7A;"></div>
        <div class="circle" style="background-color:#CEDBBC;"></div>
      </div>
    </el-collapse-item>
    <el-collapse-item title="Board" name="3">
      <div class="square-array">
        <div class="square-container">
          <img class="square-image" src="../assets/mat1.png"/>
        </div>
        <div class="square-container">
          <img class="square-image" src="../assets/mat2.png"/>
        </div>
        <div class="square-container">
          <img class="square-image" src="../assets/mat3.png"/>
        </div>
        <div class="square-container">
          <img class="square-image" src="../assets/mat4.png"/>
        </div>
      </div>
    </el-collapse-item>
    <el-collapse-item title="Seating" name="4">
      <div class="square-array">
        <div class="square-container">
          <img class="square-image" src="../assets/mat1.png"/>
        </div>
        <div class="square-container">
          <img class="square-image" src="../assets/mat2.png"/>
        </div>
        <div class="square-container">
          <img class="square-image" src="../assets/mat3.png"/>
        </div>
        <div class="square-container">
          <img class="square-image" src="../assets/mat4.png"/>
        </div>
      </div>
    </el-collapse-item>
    <el-collapse-item title="Covering" name="5">
      <div class="square-array">
        <div class="square-container">
          <img class="square-image" src="../assets/mat5.png"/>
        </div>
        <div class="square-container">
          <img class="square-image" src="../assets/mat6.png"/>
        </div>
        <div class="square-container">
          <img class="square-image" src="../assets/mat7.png"/>
        </div>
        <div class="square-container">
          <img class="square-image" src="../assets/mat8.png"/>
        </div>
      </div>
    </el-collapse-item>
    <el-collapse-item title="Back" name="6">
      <div class="square-array">
        <div class="square-container">
          <img class="square-image" src="../assets/mat1.png"/>
        </div>
        <div class="square-container">
          <img class="square-image" src="../assets/mat2.png"/>
        </div>
        <div class="square-container">
          <img class="square-image" src="../assets/mat3.png"/>
        </div>
        <div class="square-container">
          <img class="square-image" src="../assets/mat4.png"/>
        </div>
      </div>
    </el-collapse-item>
  </el-collapse>
  </el-col>
  <el-col>
    <h3 class="pricing-count">Selling price of your current configuration: <br> <span class="price">{{price}} EUR</span> </h3>
  </el-col>
  <el-col>
    <div class="btn-container">
      <div class="btn-nav" @click="goToPrevious">Previous</div>
      <div class="btn-nav" @click="goToNext">Next</div>
    </div>
  </el-col>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  data () {
    return {
      activeName: '1',
      price: 300,
      selectedChairDesign: {
        base: '',
        baseFinish: '',
        board: '',
        seating: '',
        covering: '',
        back: ''
      }
    }
  },
  methods: {
    handleChange (val) {
    },
    goToNext () {
      var activeNameString = parseInt(this.activeName) + 1
      if (activeNameString === 8) {
        activeNameString = 7
      }
      this.activeName = String(activeNameString)
    },
    goToPrevious () {
      var activeNameString = parseInt(this.activeName) - 1
      if (activeNameString === 0) {
        activeNameString = 1
      }
      this.activeName = String(activeNameString)
    },
    selectBase (event) {
      _.forEach(this.$refs['base'].children, (base) => {
        base.style.border = 'solid 2px grey'
      })
      this.selectedChairDesign.base = event.target.getAttribute('base')
      var parent = event.target.parentElement
      parent.style.border = 'solid 2px red'
      console.log(this.selectedChairDesign)
    }
  }
}
</script>

<style lang="scss" scoped>
  .circle-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    .circle {
      cursor: pointer;
      min-width: 3.5em;
      min-height: 3.5em;
      width: 5em;
      height: 5em;
      margin: 1.5em 1.5em;
      border-radius: 50%;
      border: 2px solid grey;
    }
  }
  .base-array {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    .base-container {
      cursor: pointer;
      min-width: 3.5em;
      min-height: 3.5em;
      width: 10em;
      height: 8em;
      margin: 1.5em 3em;
      border-radius: 5%;
      border: solid 2px grey;
      .base-image {
        width: 100%;
        height: 100%;
      }
    }
  }
  .square-array {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    .square-container {
      cursor: pointer;
      min-width: 3.5em;
      min-height: 3.5em;
      width: 10em;
      height: 8em;
      margin: 1.5em 3em;
      border-radius: 5%;
      border: solid 2px grey;
      .square-image {
        width: 100%;
        height: 100%;
      }
    }
  }
  h3 {
    padding: 1em 0;
    font-weight: 500;
    color: grey;
    font-family: 'Roboto Slab', serif;
    .price {
      font-weight: 700;
      color: #ff5c00;
      font-size: 1.3em;
      word-spacing: 0.5px;
    }
  }
  .btn-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    cursor: pointer;
    .btn-nav {
      width: 40%;
      margin: 1em 5%;
      padding: 1.5em 0;
      text-align: center;
      background-color: #414042;
      border-radius: 2px;
      font-family: 'Helvetica Neue';
      color: white;
      justify-content: center;
      align-items: center;
      display: flex;
      font-size: 1.2em;
      &:hover {
        background-color: rgba(#414042,0.8);
      }
      &:active {
        background-color: #464646
      }
    }
  }
</style>
