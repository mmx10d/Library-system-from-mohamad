

let form= document.querySelector('form');
let bookName= document.querySelector('#name');
let bookAuthor= document.querySelector('#author');
let bookPages= document.querySelector('#pages');
let bookRating= document.querySelector('#rating');
let bookRead;
// console.log(bookName);
// console.log(bookAuthor);
// console.log(bookPages);
// console.log(bookRating);




form.addEventListener('submit', (e) => {
    e.preventDefault();

    let bookState= document.querySelector('[name="bookState"]:checked');


    if(bookState){
        bookRead= bookState.value;
    }else{
        bookRead= 'not selected';
    }


  let book=new Book(bookName, bookAuthor, bookPages,bookRead, bookRating);
   console.log(book);
})



const books=[];
function Book(name,author,pages,read,rating){

    if(!new.target){
        console.log("You need to use 'new' key word!");
    }

    this.name=name.value;
    this.author=author.value;
    this.pages=pages.value;
    this.red=read;
    this.rating=rating.value;

}

function addToLibrary(book){

}






