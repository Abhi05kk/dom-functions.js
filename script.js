//1. 1. Write a function calculateFactorial (n) that takes a non-negative integer n and returns the factorial of n.(factorial of 5= 5*4*3*2*1=120)

    let n = 5; 
    function factorial(n) { 
        let ans = 1; 
            if(n === 0)
            return 1;
        for (let i = 2; i <= n; i++) 
        ans = ans * i; 
        return ans; 
    }
    console.log(factorial(n));


//2. Write a function isPrime(num) that takes a positive integer num and returns true if the number is prime, and false otherwise  

    function isPrime(num) {
        if (num <= 1) return false; 
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false; 
            }
        }
        return true; 
    }
    const userInput = 11;
    console.log(`Is ${userInput} a prime number? `, isPrime(userInput));


//3. Write a function sumEvenNumbers(start, end) that takes two integers start and end, and returns the sum of all even numbers in the inclusive range from start to end.

    let sum=0 
    for(i=0;i<=10;i++)
    {
        if(i%2==0)
    {
        sum=sum+i
    }
    }
    console.log(sum)


//4. Write a JavaScript program to remove items(clicking on a button) from a drop-down list.

    function fun_remove() {
        var element = document.getElementById("colorSelect");
        element.remove(element.selectedIndex);
    }


//5. Write a JavaScript program to change the  color given text in p tag

    function changeColor() {
        var color = document.getElementById("color")
        var selectColor =
            document.getElementById("selectColor");

        var selectedColor =
        selectColor.options[selectColor.selectedIndex].value;

        color.style.color = selectedColor;
    }

//6. Write a JavaScript function to get the values of First and Last names of the following form.

    function MyFunction() {
        var first, second;
        first = document.getElementById("firstname").value;
        second = document.getElementById("lastname").value;

        document.GetElementById("here").InnerHTML = first;
        document.GetElementById("here").InnerHTML = second;
    }


//7. Write a JavaScript program to display a random image (clicking on a button) from the following list.
// Sample Image information :"http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg&quot;, width: "240", height: "160"
// "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg&quot;, width: "320", height: "195"
// "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg&quot;, width: "500", height: "343"


    function display_random_image() 
    {
         var theImages = [{
            src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg&quot",
            width: "240",
            height: "160"
        }, {
            src: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg&quot",
            width: "320",
            height: "195"
        }, {
            src: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg&quot",
            width: "500",
            height: "343"
        }];
    
        var preBuffer = [];
        for (var i = 0, j = theImages.length; i < j; i++) {
            preBuffer[i] = new Image();
            preBuffer[i].src = theImages[i].src;
            preBuffer[i].width = theImages[i].width;
            preBuffer[i].height = theImages[i].height;
        }
   
    function getRandomInt(min,max) 
        {
    
    imn = Math.floor(Math.random() * (max - min + 1)) + min;
        return preBuffer[imn];
        }  
  
    var newImage = getRandomInt(0, preBuffer.length - 1);
    var images = document.getElementsByTagName('img');
    var l = images.length;
    for (var p = 0; p < l; p++) {
        images[0].parentNode.removeChild(images[0]);
    }
    document.body.appendChild(newImage);
    }