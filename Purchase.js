
// const array = [{img1 :"ecommerce-product-page-main/images/image-product-1-thumbnail.jpg"}, 
//                {img2:"ecommerce-product-page-main/images/image-product-2-thumbnail.jpg"}, 
//                {img3 :"ecommerce-product-page-main/images/image-product-3-thumbnail.jpg"}, 
//                {img4 :"ecommerce-product-page-main/images/image-product-4-thumbnail.jpg"}]

let array = [`<li><img class="big" src="ecommerce-product-page-main/images/image-product-1.jpg" alt=""></li>`,
             `<li><img class="big" src="ecommerce-product-page-main/images/image-product-2.jpg" alt=""></li>`,
             `<li><img class="big" src="ecommerce-product-page-main/images/image-product-3.jpg" alt=""></li>`,
             `<li><img class="big" src="ecommerce-product-page-main/images/image-product-4.jpg" alt=""></li>`]

let secondArray = [`<li><img class="bigg" src="ecommerce-product-page-main/images/image-product-1.jpg" alt=""></li>`,
                   `<li><img class="bigg" src="ecommerce-product-page-main/images/image-product-2.jpg" alt=""></li>`,
                   `<li><img class="bigg" src="ecommerce-product-page-main/images/image-product-3.jpg" alt=""></li>`,
                   `<li><img class="bigg" src="ecommerce-product-page-main/images/image-product-4.jpg" alt=""></li>`]             

let thirdArray = [`<img class="thumb" src="ecommerce-product-page-main/images/image-product-1-thumbnail.jpg" alt="">`,
                  `<img class="thumb" src="ecommerce-product-page-main/images/image-product-2-thumbnail.jpg" alt="">`,
                  `<img class="thumb" src="ecommerce-product-page-main/images/image-product-3-thumbnail.jpg" alt="">`,
                  `<img class="thumb" src="ecommerce-product-page-main/images/image-product-4-thumbnail.jpg" alt="">`]   
                                  
               // console.log(array.pop()); 
               // console.log(array);
               // console.log(array.pop());
               // console.log(array);

// for (let i = 0; i < array.length; i++){
//    console.log(array[i]);
// }
const thirdSectionn = document.querySelector(".third-sectionn")
const Cart = document.querySelector(".cart")
const Wheel = document.querySelector(".wheel")
const subtractEl = document.querySelector(".subtract")
const addEl = document.querySelector(".add")
const ZeroEl = document.querySelector(".zero")
const heading = document.querySelector(".first-heading")
const Thumb = document.querySelector(".thumb")
const ThumbContainer = document.querySelector(".thumb-container")
const bigShoe = document.querySelector(".big-shoe")
const bigImg = document.querySelector(".big-img")
const Order = document.querySelector(".order")
const cartContainer = document.querySelector(".cart-container")
const Cartt = document.querySelector(".cartt")
const Total = document.querySelector(".total")
const Cartno = document.querySelector(".cart-number")
const Delete = document.querySelector(".delete")
const Empty = document.querySelector(".empty")
const smallShoes = document.querySelector(".small-shoes")
const firstSection = document.querySelector(".first-section")
const thirdSection = document.querySelector(".third-section")
const littleImg = document.querySelector(".little")
const littleeImg = document.querySelector(".littlee")
const littleeeImg = document.querySelector(".littleee")
const littleeeeImg = document.querySelector(".littleeee")
const Big = document.querySelector(".big")
const Close = document.querySelector(".close")
const secondLittle = document.querySelector(".second-little")
const secondLittlee = document.querySelector(".second-littlee")
const secondLittleee = document.querySelector(".second-littleee")
const secondLittleeee = document.querySelector(".second-littleeee")
const biggImg = document.querySelector(".bigg-img")
const Bigg = document.querySelector(".bigg")
const NextContainer = document.querySelector(".next-container")
const BackContainer = document.querySelector(".back-container")
const Menu = document.querySelector(".menu")
const MenuContainer = document.querySelector(".menu-container")
const Closee = document.querySelector(".closee")
console.log(firstSection);

let count = 0

addEl.addEventListener("click", function(){
   count ++
   console.log(count);
   ZeroEl.textContent = count
})

subtractEl.addEventListener("click", function(){
   if (count < 1) {
      count = 1
     }
   count --
   console.log(count);
   let currentCount = count
   ZeroEl.textContent = currentCount
})

bigImg.addEventListener("click", function(){
      thirdSectionn.style.visibility = "visible"
      thirdSection.style.visibility = "visible"

})

Close.addEventListener("click", function(){
   thirdSectionn.style.visibility = "hidden"
   thirdSection.style.visibility = "hidden"
   bigImg.innerHTML = biggImg.innerHTML
   bigImg.style.width = "25rem"
})

console.log(array[3]);

littleImg.addEventListener("click", function(){ 
   bigImg.innerHTML = array[0] 
   bigImg.style.width = "29rem"  
})

littleeImg.addEventListener("click", function(){
   bigImg.innerHTML = array[1]
   bigImg.style.width = "29rem"
})

littleeeImg.addEventListener("click", function(){
   bigImg.innerHTML = array[2]
   bigImg.style.width = "29rem"
})

littleeeeImg.addEventListener("click", function(){
   bigImg.innerHTML = array[3]
   bigImg.style.width = "29rem"
})

secondLittle.addEventListener("click", function(){
   biggImg.innerHTML = secondArray[0]
})

secondLittlee.addEventListener("click", function(){
   biggImg.innerHTML = secondArray[1]
})

secondLittleee.addEventListener("click", function(){
   biggImg.innerHTML = secondArray[2]
})

secondLittleeee.addEventListener("click", function(){
   biggImg.innerHTML = secondArray[3]
})

let check = 0

NextContainer.addEventListener("click", function(){
   if (check > 2){
    return check = 3
   }
   check++
   biggImg.innerHTML = secondArray[check]
   
})

BackContainer.addEventListener("click", function(){
   if (check < 1){
      check = 1
   }
   check--
   biggImg.innerHTML = secondArray[check]
   
})

Cart.addEventListener("click", function(){
   if (Wheel.classList.contains("show-wheel")){
      if(Wheel.classList.remove("show-wheel")){
         Empty.style.visibility = "visible"
      }
      Wheel.classList.remove("show-wheel")
      Empty.style.visibility = "hidden"
   }

   else{
      Wheel.classList.add("show-wheel")
      Empty.style.visibility = "hidden"
   }
})

   
   // let Price = CarttPrice.textContent

Cartt.addEventListener("click", function(){
   render()
   cartContainer.style.display = "block"
   Empty.style.visibility = "hidden"

   if (count == 0){
      cartContainer.style.display = "none"
      Empty.style.visibility = "visible"
   }
})

function render(){
   Cartno.textContent = count
   
   if (biggImg.innerHTML == secondArray[0]) {
      ThumbContainer.innerHTML = thirdArray[0]
      Cartno.textContent = count
   }

   if (biggImg.innerHTML == secondArray[1]) {
      ThumbContainer.innerHTML = thirdArray[1]
      Cartno.textContent = count
   }

   if (biggImg.innerHTML == secondArray[2]) {
      ThumbContainer.innerHTML = thirdArray[2]
      Cartno.textContent = count
   }

   if (biggImg.innerHTML == secondArray[3]) {
      ThumbContainer.innerHTML = thirdArray[3]
      Cartno.textContent = count
   }




   if (bigImg.innerHTML == array[0]) {
      ThumbContainer.innerHTML = thirdArray[0]
      Cartno.textContent = count
   }

   if (bigImg.innerHTML == array[1]) {
      ThumbContainer.innerHTML = thirdArray[1]
      Cartno.textContent = count
   }

   if (bigImg.innerHTML == array[2]) {
      ThumbContainer.innerHTML = thirdArray[2]
      Cartno.textContent = count
   }

   if (bigImg.innerHTML == array[3]) {
      ThumbContainer.innerHTML = thirdArray[3]
      Cartno.textContent = count
   }

   let Totall = 125.00 * count
   console.log(Totall);
   Total.textContent = Totall

   Wheel.classList.add("show-wheel")

}

Delete.addEventListener("click", function(){
   cartContainer.style.display = "none"
   Empty.style.visibility = "visible"
})

Menu.addEventListener("click", function(){
   MenuContainer.classList.add("show-menu")
   MenuContainer.style.visibility = "visible"
})

Closee.addEventListener("click", function(){
   MenuContainer.classList.remove("show-menu")
   MenuContainer.style.visibility = "hidden"
})
