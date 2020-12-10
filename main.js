var app = new Vue({
  el: '#app',
  data: {
    product: "Socks",
    brand: 'Vue Mastery',
    selectedVariant: 0,
    altText: "A pair of socks",
    link: "https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks",
    onSale: false,
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: "img/vmSocks-green-onWhite.jpg",
        variantQuantity: 10,
        variantSale: true,
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: "img/vmSocks-blue-onWhite.jpg",
        variantQuantity: 0,
        variantSale: false,
      }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    cart: 0,

  },

  // вычисляемые свойства
  computed: {
  title() {
    return this.brand + ' ' + this.product;
  },
  image() {
    return this.variants[this.selectedVariant].variantImage;
  },
  inStock(){
    return this.variants[this.selectedVariant].variantQuantity
  },
  sale() {
          if (this.variants[this.selectedVariant].variantSale) {
            return this.brand + ' ' + this.product + ' are on sale!'
          }
            return  this.brand + ' ' + this.product + ' are not on sale'
        }
},
  methods: {
    addToCart() {
      this.cart += 1
    },
    delFromCart() {
      this.cart -= 1
    },
    updateProduct(index) {
      this.selectedVariant = index;
      //console.log(index);
    }
  }
})
