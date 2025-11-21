const people = [
  {
    fullname: "Ariana Wells",
    job: "UI/UX Designer",
    description: "Designs modern interfaces and improves user experience.",
    age: 26,
    img: "https://images.unsplash.com/photo-1615464670798-6e92fafa2a89?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW4lMjBpbWclMjBlbmdpbmVlciUyMHNpbmdsZXxlbnwwfHwwfHx8MA%3D%3D",
    etc: "Loves minimal design"
  },
  {
    fullname: "Leonard Brooks",
    job: "Backend Developer",
    description: "Builds APIs, handles server logic, and database systems.",
    age: 31,
    img: "https://images.unsplash.com/photo-1653379673174-f8a9138a39b0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvbWVuJTIwaW1nJTIwZW5naW5lZXIlMjBzaW5nbGV8ZW58MHx8MHx8fDA%3D",
    etc: "Node.js & Go expert"
  },
  {
    fullname: "Chloe Ramirez",
    job: "Digital Marketer",
    description: "Creates marketing strategies and manages brand campaigns.",
    age: 29,
    img: "https://plus.unsplash.com/premium_photo-1664301560865-e4351880f9df?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    etc: "Specialist in SEO & Ads"
  },
  {
    fullname: "Owen Mitchell",
    job: "AI Engineer",
    description: "Develops machine learning models and automation tools.",
    age: 34,
    img: "https://plus.unsplash.com/premium_photo-1682431574564-c1bd6761fbf6?q=80&w=945&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    etc: "Works with Python & TensorFlow"
  },
  {
    fullname: "Hana Suzuki",
    job: "Content Creator",
    description: "Produces engaging social media content and short videos.",
    age: 23,
    img: "https://plus.unsplash.com/premium_photo-1682431791187-8e434e3ac014?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    etc: "Skilled in video editing"
  }
];

sum = '' 
people.forEach(function(val){
    sum = sum +  `<div class="card">
            <img src="${val.img}"
                alt="">
            <h3>${val.fullname}</h3>
            <p>${val.description}</p>
        </div>`
})

var main =document.querySelector("#main")

main.innerHTML = sum


