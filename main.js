

let form= document.querySelector('form');
let bookName= document.querySelector('#name');
let bookAuthor= document.querySelector('#author');
let bookPages= document.querySelector('#pages');
let bookRating= document.querySelector('#rating');
let table= document.querySelector('.tableBody');
let bookRead;


// if(localStorage.getItem("books") !=null){
//     books= JSON.parse(localStorage.getItem("books"))
// }else{
// }

let books=[];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let bookState= document.querySelector('[name="bookState"]:checked');
    if(bookState){
        bookRead= bookState.value;
    }else{
        bookRead= 'not selected';
    }


  let book=new Book(bookName, bookAuthor, bookPages,bookRead, bookRating);
   books.push(book);
   display(books);
})


// localStorage.setItem('books', JSON.stringify(books));



function Book(name,author,pages,read,rating){

    if(!new.target){
        console.log("You need to use 'new' key word!");
    }

    this.name=name.value;
    this.author=author.value;
    this.pages=pages.value;
    this.read=read;
    this.rating=rating.value;

}


function display(books){
    let data='';

    for(let i=0; i<books.length; i++){
        data+=`
       <td>${i}<td>
       <td>${books[i].name}<td>
       <td>${books[i].author}<td>
       <td>${books[i].pages}<td>
       <td>${books[i].rating}<td>
       <td>.<td>
       <td>${books[i].read}<td>
     `
    }

    table.innerHTML=data;
}






