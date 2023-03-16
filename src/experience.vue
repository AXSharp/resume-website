<template>
  <div class="wrapper">
    <div class="main">
      <h2 class="name">Skills</h2>
      <div class="skils">
        <div class="icon">
          <h3>Mulesoft</h3>
          <img src="./assets/cpu.png" alt="" />
        </div>
        <div class="text">
          <ul>
            <li>Anypoint platform / studio</li>
            <li>SAP and Salesforce integrations</li>
            <li>Flow optimizing</li>
          </ul>
          <ul>
            <li>MUnit testing</li>
            <li>Complex DataWeave transformations</li>
            <li>Kafka</li>
          </ul>
        </div>
      </div>
      <div class="skils">
        <div class="icon"><h3>Other</h3><img src="./assets/monitor.png" alt="" /></div>
        <div class="text">
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>Python (basic)</li>
            <li>Linux Ubuntu server (basic)</li>
          </ul>
          <ul>
            <li>C++/C# (Basic)</li>
            <li>SQL</li>
            <li>GitHub</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
}
.main {
  margin: auto;
  width: 60%;
  line-height: 35px;
  background-color: #294c60;
  padding: 30px;
  border-radius: 10px;
}
.skils {
  display: flex;
  height: 100px;
  margin-bottom: 70px;
}
.text {
  /* border: 2px solid red; */
  display: flex;
  height: 100px;
}
.icon {
  text-align: center;
  margin-left: 100px;
  /* border: 2px solid red; */
  width: 10%;
  margin-top: -20px;
}
img {
  width: 90%;
}
h2 {
  color: #FFC49B;
  font-size: 25pt;
  font-family: "Merriweather", serif;
  font-weight: bold;
  letter-spacing: 3pt;
  margin-left: 50px;
  margin-bottom: 50px;
}
h3{
  font-family: "Inconsolata", monospace;
  font-size: 15pt;
}
ul {
  display: flex;
  list-style-type: none;
  flex-flow: column;
  border-left: 2px solid #ffefd3;
  margin-left: 30px;
}
li {
  /* padding-left: 20px; */
  font-family: "Inconsolata", monospace;
  font-size: 15pt;
  width: 350px;
}

</style>
