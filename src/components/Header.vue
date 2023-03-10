<script>
 export default{
    name: "Header",
    data: () => ({
      menu: [
        'shop',
        'plan my kitchen',
        'About Us',
        'Gallery',
      ]
    })
  }
</script>

<template>
  <div class="header"> 
    <ul class="header__socials">
      <li>
        <img src="../assets/images/facebook-icon.svg" class="icon" />
      </li>
      <li>
        <img src="../assets/images/twitter-icon.svg" class="icon" />
      </li>
      <li>
        <img src="../assets/images/instagram-icon.svg" class="icon" />
      </li>
    </ul>
    <ul class="header__menuItems">
      <li>shop</li>
      <li>plan my kitchen</li>
      <li>
          <img src="../assets/images/logo.svg" class="logo" />
      </li>
      <li>About Us</li>
      <li>Gallery</li>
    </ul>

    <div class="mobile" id="menuToggle">
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>
      <ul class="header__menuItems" id="menu"  v-for="item in menu"
          :key="item.id">
        <li>{{item}}</li>
      </ul>
    </div>
    <div class="mobile">
        <img src="../assets/images/logo.svg" class="logo" />
    </div>
    
    <button>
      My Order
    </button>
  </div>
</template>
