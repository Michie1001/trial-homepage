<script>
 export default{
    name: "Footer",
    data: () => ({
      about: [
        'shop',
        'plan my kitchen',
        'About Us',
        'Gallery',
      ],   
      services: [
        'FAQ',
        'Contact',
        'How to Buy',
        'Downloads',
      ], 
      info: [
        'Delivery',
        'Terms',
        'Privacy',
      ]
    })
  }
</script>

<template>
    <div class="footer">
        <img src="../assets/images/jumbotron/Bitmap.png" alt="">
        <div class="footer__block">
            <div class="footer__logo">
                <img src="../assets/images/logo.svg" class="logo" />
            </div>
            <div class="footer__content">
                <div class="footer__content__individual">
                    <h4>About</h4>
                    <ul v-for="item in about" :key="item.id">
                        <li>{{ item }}</li>
                    </ul>
                </div>
                <div class="footer__content__individual">
                    <h4>Service</h4>
                    <ul v-for="item in services" :key="item.id">
                        <li>{{ item }}</li>
                    </ul>
                </div>
                <div class="footer__content__individual">
                    <h4>Info</h4>
                    <ul v-for="item in info" :key="item.id">
                        <li>{{ item }}</li>
                    </ul>
                </div>
                <div class="footer__content__individual">
                    <h4>Follow</h4>
                    <ul>
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
                </div>
            </div>
            <p class="footer__caption">Copyright Online MTC Home Kitchens {{(new Date().getFullYear())}} - All rights reserved. Responsive website design, Development & Hosting by mtc.</p>
        </div>
    </div>
</template>