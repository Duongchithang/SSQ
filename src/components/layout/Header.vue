<template>
  <div>
    <div class="wrapper-header">
      <div class="container-header">
        <span>Icon</span>
        <ul class="menu-list">
          <li class="menu-item">
            <router-link to="/">Home</router-link>
          </li>
          <li class="menu-item">
            <router-link to="/Introduction">Introduction</router-link>
          </li>
          <li class="menu-item">
            <router-link to="/Blog">Blog</router-link>
          </li>
          <li class="menu-item">
            <router-link to="/Contact">Contact</router-link>
          </li>
          <li class="menu-item">
            <router-link to="/Product">Product</router-link>
          </li>
        </ul>
        <div class="container-icon">
          <i class="fa-solid fa-magnifying-glass"></i>
          <span class="material-symbols-outlined">close</span>
        </div>
        <div class="menu-btn">
          <div class="menu-btn_burger"></div>
        </div>
        <div class="input-search">
          <input type="text" placeholder="Search..." />
          <span class="material-symbols-outlined">search</span>
        </div>
      </div>
      <div class="container-repons-header">
        <div class="overlay"></div>
        <div class="menu-list-repons">
          <ul class="menu-list-repons-navbar">
            <li class="menu-item">
              <router-link to="/">Home</router-link>
            </li>
            <li class="menu-item">
              <router-link to="/Introduction">Introduction</router-link>
            </li>
            <li class="menu-item">
              <router-link to="/Blog">Blog</router-link>
            </li>
            <li class="menu-item">
              <router-link to="/Contact">Contact</router-link>
            </li>
            <li class="menu-item">
              <router-link to="/Product">Product</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    var checksearch = false;
    //start open bar
    var menubtn = document.querySelector(".menu-btn");
    var menuitem = document.querySelectorAll(".menu-item");
    var Overlay = document.querySelector(".overlay");
    var wrapperHeader = document.querySelector(".wrapper-header");
    var AroundIconSearch = document.querySelector(".container-icon");
    var IconSearch = document.querySelector(".container-icon i");
    var IconClose = document.querySelector(".container-icon span");
    var AroundSearch = document.querySelector(".input-search");
    var body = document.body;
    window.onscroll = function (e) {
      if (window.scrollY > 200 && window.scrollY < 1200) {
        wrapperHeader.style.transition = "all 0.5s";
        wrapperHeader.style.transform = "translateY(-100px)";
      } else {
        wrapperHeader.style.transition = "all 0.5s";
        wrapperHeader.style.transform = "translateY(0)";
      }
    };
    var menuListRepons = document.querySelector(".menu-list-repons");
    console.log(menubtn);
    let checkOpen = false;
    menubtn.addEventListener("click", function () {
      if (!checkOpen) {
        menubtn.classList.add("open");
        menuListRepons.classList.add("active-repons");
        body.style.overflowY = "hidden";
        Overlay.style.display = "block";
        checkOpen = true;
      } else {
        menubtn.classList.remove("open");
        menuListRepons.classList.remove("active-repons");
        Overlay.style.display = "none";
        body.style.overflowY = "auto";
        checkOpen = false;
      }
    });
    menuitem.forEach((value, index) => {
      value.onclick = function () {
        body.style.overflowY = "auto";
        menubtn.classList.remove("open");
      };
    });
    AroundIconSearch.onclick = function () {
      if (!checksearch) {
        AroundSearch.style.display = "block";
        IconSearch.style.display = "none";
        IconClose.style.display = "block";
        checksearch = true;
      } else {
        AroundSearch.style.display = "none";
        IconSearch.style.display = "block";
        IconClose.style.display = "none";
        checksearch = false;
      }
      // end open bar
    };
  },
};
</script>

<style scoped>
/*start style header */

.wrapper-header {
  max-width: 1440px;
  height: 55px;
  background: #1c1c1e;
  position: fixed;
  display: block;
  top: 0;
  right: 0;
  z-index: 100;
  left: 0;
}

.container-header {
  height: 100%;
  margin: 0 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 17px;
  color: white;
  position: relative;
  font-weight: 400;
}
.container-icon {
  z-index: 100;
  cursor: pointer;
}
.container-icon span {
  line-height: 55px;
  display: none;
  transition: all 0.3s linear;
}
.menu-list {
  display: flex;
  gap: 50px;
  position: absolute;
  left: 150px;
}

/* Bar */

.menu-btn {
  height: 30px;
  display: flex;
  align-items: center;
  display: none;
}

.menu-btn_burger {
  width: 30px;
  height: 3px;
  background: white;
  border-radius: 5px;
  transition: all 0.5s ease-in-out;
}

.menu-btn_burger::before,
.menu-btn_burger::after {
  content: "";
  position: absolute;
  width: 30px;
  height: 3px;
  border-radius: 5px;
  background: white;
  transition: all 0.5s ease-in-out;
}

/* Animation reponsive Bar */
.menu-btn_burger::before {
  transform: translateY(-10px);
}

.menu-btn_burger::after {
  transform: translateY(10px);
}

.menu-btn.open .menu-btn_burger {
  transform: translateX(-50px);
  background: transparent;
}

.menu-btn.open .menu-btn_burger::before {
  transform: rotate(45deg) translate(35px, -35px);
}

.menu-btn.open .menu-btn_burger::after {
  transform: rotate(-45deg) translate(35px, 35px);
}

/* End Animation End Bar */
/* End Bar */

/* Start Repon Header */
.container-repons-header {
  display: none;
}
.input-search {
  padding: 20px 25px;
  background: rgb(57, 67, 77);
  position: absolute;
  display: none;
  top: 50px;
  right: -20px;
  box-shadow: 0 2px 4px 0 rgba(158, 158, 158, 0),
    0 2px 15px 0 rgba(0, 0, 0, 0.3);
  transition: all 0.3s linear;
}
.input-search::before {
  content: "";
  border: 20px solid;
  border-color: transparent transparent rgb(57, 67, 77) transparent;
  position: absolute;
  right: 10px;
  top: -32px;
}
.input-search input {
  color: black;
  position: relative;
  height: 35px;
  width: 280px;
  outline: none;
  border: none;
  padding-left: 10px;
  padding-right: 40px;
}
.input-search span {
  position: absolute;
  color: black;
  top: 50%;
  transform: translateY(-50%);
  right: 10%;
}
.meunu-item {
  transition: all 0.3s linear;
}
.menu-item:hover {
  color: #02a3cb;
}

@media screen and (max-width: 850px) {
  .container-header {
    margin: 0 50px;
  }
  .menu-list {
    display: none;
  }
  .container-icon {
    display: none;
  }
  .menu-btn {
    display: block;
    display: flex;
    align-items: center;
  }
  .overlay {
    width: 100%;
    height: 100vh;
    top: 55px;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.2);
    display: none;
    position: fixed;
  }
  .container-repons-header {
    display: block;
    width: 100%;
    position: relative;
  }
  .menu-list-repons {
    width: 300px;
    transform: translateX(300px);
    height: 100vh;
    right: 0;
    position: fixed;
    top: 55px;
    bottom: 0;
    background: #26262b;
    color: white;
    transition: all 0.5s linear;
    z-index: 50;
  }
  .active-repons {
    transform: translateX(0);
  }
  .menu-list-repons-navbar {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .menu-item {
    padding: 20px 0;
    font-size: 18px;
    width: 100%;
    text-align: center;
    border-bottom: 1px solid white;
  }
}
@media screen and (max-width: 450px) {
  .menu-list {
    display: none;
  }

  .container-header {
    margin: 0 20px;
  }

  .container-icon {
    display: none;
  }

  .menu-btn {
    display: block;
    display: flex;
    align-items: center;
  }

  .container-repons-header {
    display: block;
    width: 100%;
    position: relative;
  }

  .overlay {
    width: 100%;
    height: 100vh;
    top: 55px;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.2);
    display: none;
    position: fixed;
  }

  .menu-list-repons {
    width: 200px;
    transform: translateX(200px);
    height: 100vh;
    right: 0;
    position: fixed;
    top: 55px;
    bottom: 0;
    background: #26262b;
    color: white;
    transition: all 0.5s linear;
    z-index: 50;
  }
  .menu-list-repons-navbar {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .menu-item {
    padding: 20px 0;
    font-size: 18px;
    width: 100%;
    text-align: center;
    border-bottom: 1px solid white;
  }
  .active-repons {
    transform: translateX(0);
  }
}
</style>
