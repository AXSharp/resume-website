<template>
  <div class="wrapper">
    <div class="title">
      <div class="titleNav">
        <div>
          <h2 class="name">Artis Stepens</h2>
          <p class="occupation">Mulesoft developer</p>
        </div>
        <div class="navbar">
          <ul class="md:flex md:items-center">
            <li class="md:mx-4">Resume</li>
            <li>Experience</li>
            <li>Contact me</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="title">
      <div class="child_title">
        <img class="profileImg" src="./assets/titleImage.jpg" alt="" />
      </div>
      <div class="child_title">
        <h2 class="about">A little bit about me:</h2>
        <p>
          Hi there! I'm a Junior Mulesoft Developer at Intrum Global
          Technologies, passionate about creating innovative solutions and
          enhancing the user experience. With a year of experience in Mulesoft
          development, I'm always looking for new challenges and opportunities
          to expand my skill set.
        </p>
        <p>
          When I'm not working, you can find me playing volleyball or indulging
          in my love for video games such as Rainbow Six siege and Valheim. I
          also have two adorable cats, one of which I rescued from the streets.
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.title {
  margin: auto;
  width: 60%;
  line-height: 35px;
  overflow: hidden;
  background-color: #294c60;
  padding: 30px;
  border-radius: 10px;
  margin-bottom: -30px;
}
.about {
  padding-bottom: 30px;
}
.child_title {
  width: 50%;
  float: left;
  padding: 20px;
  border-radius: 0px;
}
h2 {
  font-size: 25pt;
  font-family: "Merriweather", serif;
  font-weight: bold;
  letter-spacing: 3pt;
}
p {
  line-height: 15pt;
  font-family: "Inconsolata", monospace;
  font-size: 15pt;
  opacity: 100%;
  margin-bottom: 30px;
}
.name {
  font-size: 30pt;
  margin-left: 50px;
}
.occupation {
  margin-left: 50px;
  font-size: 15pt;
  margin-bottom: 0px;
}

.profileImg {
  width: 90%;
  border-radius: 50%;
  align-content: center;
}
.wrapper {
  padding-top: 30px;
}
.titleNav {
  display: flex;
}
.navbar {
  justify-content: flex-end;
  display: flex;
  width: 60%;
  font-family: "Inconsolata", monospace;
  font-size: 15pt;
}
ul {
  display: flex;
  align-items: right;
  list-style-type: none;
}
li {
  padding-left: 20px;
}
li:hover {
  color: #FFC49B;
}
</style>
