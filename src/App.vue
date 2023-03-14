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
            I remember as a child, and as a young budding naturalist, spending
            all my time observing and testing the world around me—moving pieces,
            altering the flow of things, and documenting ways the world
            responded to me. Now, as an adult and a professional naturalist,
            I’ve approached language in the same way, not from an academic point
            of view but as a curious child still building little mud dams in
            creeks and chasing after frogs. So this book is an odd thing: it is
            a naturalist’s walk through the language-making landscape of the
            English language, and following in the naturalist’s tradition it
            combines observation, experimentation, speculation, and
            documentation—activities we don’t normally associate with language.
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
  border: 3px solid green;
  line-height: 35px;
  overflow: hidden;
}
.about{
  padding-bottom: 30px;
  
}
.child_title {
  width: 50%;
  float: left;
  padding: 20px;
  border: 2px solid yellow;
}
h2 {
  font-size: 25pt;
  font-family: "Inconsolata", monospace;
  font-weight: bold;
}
p{
  line-height: 15pt;
  font-family: "Inconsolata", monospace;

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
}
</style>
