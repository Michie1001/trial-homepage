<script>
  import { cards } from '../assets/js/faqSlider.js'

  export default {
  name: 'FAQ',
  mounted() {
    cards();
  }
}
</script>
         
<template>
    <div class="faqSection">
        <div class="faqSection__info">
            <h5>What Our Customers Say</h5>
            <div>
                <h3>Over 35 years experience designing handmade kitchens</h3>
                <div class="faq__cards">
                    <div class="faqSection__info__individual faq__card active">
                        <p>Since my first contact I have received a very high level of customer service and advice with my kitchen plans. Ben responded very quickly to all of my emails and delivery of the kitchen was as planned.</p>
                        <p>Jane, Dundee</p>
                    </div>
                    <div class="faqSection__info__individual faq__card">
                        <p>I would really like to get this role. The learning curve doesn't scare me and I think it would actually make me churn out more work in less time to prove myself.</p>
                        <p>Michelle, Lincoln</p>
                    </div>
                    <div class="navigation">
                        <div class="prev-btn">
                            <img src="../assets/images/arrow-left.svg" alt="">
                        </div>
                        <div class="next-btn">
                            <img src="../assets/images/arrow-right.svg" alt="">
                        </div>
                    </div>
                </div>
                

            </div>
            <button>Frequently Asked Questions</button>
        </div>
    </div>
</template>