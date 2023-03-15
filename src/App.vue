<template>
  <header>
    <div class="wrapper">
      <div class="title">
        <h2 class="name">Artis Stepens</h2>
        <p class="occupation">Mulesoft developer</p>
      </div>
      <div class="title">
        <div class="child_title">
          <img class="profileImg" src="./assets/titleImage.jpg" alt="" />
        </div>
        <div class="child_title">
          <h2 class="about">A little bit about me:</h2>
          <p>
            Hi there! I'm a Mulesoft Developer at Intrum Global Technologies,
            passionate about creating innovative solutions and enhancing the
            user experience. When I'm not working, you can find me playing
            volleyball or indulging in my love for video games such as Rainbow Six
            siege and Valheim. I also have two adorable cats, one of which I
            rescued from the streets. With a year of experience in Mulesoft
            development, I'm always looking for new challenges and opportunities
            to expand my skill set.
          </p>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.title {
  margin: auto;
  width: 50%;
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
}
.name {
  font-size: 30pt;
  margin-left: 50px;
}
.occupation {
  margin-left: 50px;
  font-size: 15pt;
}

.profileImg {
  width: 100%;
  border-radius: 50%;
  align-content: center;
}
.wrapper {
  padding-top: 30px;
  border-color: green;
  border-style: solid;
  border-width: medium;
}
</style>
