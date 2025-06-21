// ! write linked list and and first 2 elements and add last elements

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class linkedList {
//   constructor() {
//     this.head = null;
//     this.size=0
//   }

//   isEmpty(){
//    return this.size==0
//   }
//   listLength(){
//     return this.size
//   }

//   addFirst(value) {
//     const newNode = new Node(value);

//     newNode.next = this.head;
//     this.head =newNode;
//     this.size++
//   }

//   addLast(value){
//     const newNode =new Node(value);

//     if(this.isEmpty()){
//          this.head = newNode;
//     }else{
//         let prev=this.head;
//         while(prev.next){
//             prev=prev.next;
//         }
//         prev.next=newNode;
//     }
//     this.size++
//   }
//   printList(){
//     let current=this.head;
//     let output = ''
//     while(current !==null){
//         output+=current.value + ' ';
//         current =current.next;
//     }
//     console.log(output)
//   }
// }

// const list = new linkedList()

// list.addFirst(3)
// list.addFirst(2)
// list.addFirst(1)
// list.addLast(4)

// list.printList()



//! 1. Add a node at the beginning

// class Node{
//     constructor(value){
//         this.value=value;
//         this.next=null;
//     }
// }

// class linkedList{
//     constructor(){
//         this.head=null;
//         this.size=0
//     }
//     getSize(){
//         return this.size;
//     }
//    addFirst(value){
//     const newNode = new Node(value);

//     newNode.next =this.head;
//     this.head = newNode
//     this.size++
//    }

//    printList(){
//     let current =this.head;
//     let output = '';

//     while(current){
//         output+=current.value +' ';
//         current=current.next;
//     }
//     console.log(output)
//    }
// }

// const list = new linkedList();

// list.addFirst(4)
// list.addFirst(3)
// list.addFirst(2)
// list.addFirst(1)
// list.printList()

// console.log(list.getSize())





//! 2. Add a node at the end

// class Node{
//    constructor(value){
//     this.value =value;
//     this.next =null;

//    }
// }

// class linkedList{
//     constructor(){
//         this.head=null;
//         this.size=0;
//     }
//     getSize(){
//         return this.size
//     }
//     isEmpty(){
//         return this.size==0;
//     }
//     addEnd(value){
//         const newNode=new Node(value);

//         if(this.isEmpty()){
//             this.head=newNode;
//         }else{
//             let prev=this.head;
//             while(prev.next){
//                 prev =prev.next;
//             }
//             prev.next =newNode;
//         }
//         this.size++
//     }

//     printList(){
//         let current =this.head;
//         let output ='';

//         while(current !==null){
//             output+=current.value +' ';
//             current=current.next;
//         }
//         console.log(output)
//     }
// }

// const list = new linkedList()

// list.addEnd(1)
// list.addEnd(2)
// list.addEnd(3)
// list.printList()
// console.log(list.getSize())






//! 3. Print all elements (1 to 5) and
//!  [//search//]
// ! delete [last & first]


// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class linkedList {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }
//   isEmpty() {
//     return this.size == 0;
//   }
//   listSize() {
//     return this.size;
//   }
//   addFirst(value) {
//     const newNode = new Node(value);
//     newNode.next = this.head;
//     this.head = newNode;

//     this.size++;
//   }
//   addEnd(value) {
//     const newNode = new Node(value);
//     if (this.isEmpty()) {
//       this.head = newNode;
//     } else {
//       let prev = this.head;
//       while (prev.next) {
//         prev = prev.next;
//       }
//       prev.next = newNode;
//     }
//     this.size++;
//   }
//   search(value) {
//     let current = this.head;
//     while (current) {
//       if (current.value == value) return true;
//       current = current.next;
//     }
//     return false;
//   }

//   deleteFirst() {
//     if (!this.head) return;
//     this.head = this.head.next;
//     this.size--;
//   }



//   deleteLast() {
//     if (!this.head) return;
//     if (!this.head.next) {
//       this.next = null;
//     } else {
//       let current = this.head;
//       while (current.next.next) {
//         current = current.next;
//       }
//       current.next = null;
//     }
//     this.size--;
//   }

  

//   printList() {
//     let current = this.head;
//     let output = "";
//     while (current !== null) {
//       output += current.value + " ";
//       current = current.next;
//     }
//     console.log(output);
//   }
// }

// const list = new linkedList();
// list.addFirst(2);
// list.addFirst(1);
// list.addEnd(3);
// list.addEnd(4);
// list.deleteFirst()
// list.deleteLast()

// console.log(list.search(5));
// list.printList();
// console.log(list.listSize())






// ! linked list (mid value operation)

// class Node {
//     constructor(value) {
//       this.value = value;
//       this.next = null;
//     }
//   }
  
//   class linkedList {
//     constructor() {
//       this.head = null;
//       this.size = 0;
//     }
//     isEmpty() {
//       return this.size == 0;
//     }
//     listSize() {
//       return this.size;
//     }
//     addFirst(value) {
//       const newNode = new Node(value);
//       newNode.next = this.head;
//       this.head = newNode;
  
//       this.size++;
//     }
//     addEnd(value) {
//       const newNode = new Node(value);
//       if (this.isEmpty()) {
//         this.head = newNode;
//       } else {
//         let prev = this.head;
//         while (prev.next) {
//           prev = prev.next;
//         }
//         prev.next = newNode;
//       }
//       this.size++;
//     }
//     search(value) {
//       let current = this.head;
//       while (current) {
//         if (current.value == value) return true;
//         current = current.next;
//       }
//       return false;
//     }
  
//     deleteFirst() {
//       if (!this.head) return;
//       this.head = this.head.next;
//       this.size--;
//     }
  
  
  
//     deleteLast() {
//       if (!this.head) return;
//       if (!this.head.next) {
//         this.next = null;
//       } else {
//         let current = this.head;
//         while (current.next.next) {
//           current = current.next;
//         }
//         current.next = null;
//       }
//       this.size--;
//     }
  
//    addValue(value,index){
//        if(index<0){
//            console.log('index not found')
//            return
//        }
//        if(index==0){
//            this.addFirst(value)
//                return
           
//        }
       
//        let current=this.head;
//        const newNode =new Node(value)
//        for(let i=0;i<index-1;i++){
//             current=current.next;
//        }
       
//        newNode.next=current.next
//        current.next=newNode;
       
//        this.size++
       
//    }
   
//    deleteValue(index){
//        let current=this.head
       
//        for(let i=0;i<index-1;i++){
//            current=current.next;
//        }
//        current.next=current.next.next;
//        this.size--
//    }
     
     
//      findMid(){
//          let current=this.head;
//          let size=0;
//          while(current){
//              current=current.next;
//              size++
//          }
//          let mid = Math.floor(size/2)
//          current=this.head
//          let i=0;
//          while(i<mid){
//              current=current.next;
//              i++
//          }
//          console.log(current.value)
//      }
     
     
//      addMid(value){
//          let current=this.head;
//          let size=0;
//          while(current){
//              current=current.next;
//              size++
//          }
//          let mid=Math.floor(size/2)
//          let i=0;
//          current=this.head;
         
//          const newNode =new Node(value);
//          while(i<mid){
//              current=current.next
//              i++
//          }
//          newNode.next=current.next;
//          current.next=newNode;
         
//          size++
         
//      }
     
     
//      deleteMid(){
//          let current=this.head;
//          let size=0;
//          while(current){
//              current=current.next;
//              size++
//          }
//          let mid=Math.floor(size/2)
//          current=this.head;
//          let i=0;
         
//          while(i<mid-1){
//              current=current.next;
//              i++
//          }
//          current.next=current.next.next;
//          size--
         
//      }
  
    
  
//     printList() {
//       let current = this.head;
//       let output = "";
//       while (current !== null) {
//         output += current.value + " ";
//         current = current.next;
//       }
//       console.log(output);
//     }
//   }
  
  
  
  
  
  
//   const list = new linkedList();
//   list.addFirst(2);
//   list.addFirst(1);
//   list.addEnd(3);
//   list.addEnd(4);
//   list.addEnd(5);
//   list.findMid()
//   //! list.addMid(9)
//   list.deleteMid()
  
  
  
//   list.printList()
//   console.log(list.listSize())










// ! day2 sree


// class Node{
//     constructor(value){
//         this.value =value;
//         this.next=null
//     }
// }

// class linkedList{
//     constructor(){
//         this.head=null;
//         this.size=0;
//     }
//     isEmpty(){
//       return  this.size==0;
//     }
//     listSize(){
//         return this.size
//     }
//     addFirst(value){
//         const newNode=new Node(value);
//         newNode.next=this.head;
//         this.head=newNode
//         this.size++
//     }
//     addLast(value){
//         let current=this.head;
//         const newNode=new Node(value)
//         while(current.next){
//             current=current.next
//         }
//         current.next=newNode;
//         this.size++
        
//     }
//     deleteFirst(){
//         if(!this.head){
//             return 
//         }else{
//             this.head=this.head.next
//         }
        
//         this.size--
        
//     }
//     deleteLast(){
//         let current=this.head;
//         let prev=null;
//         while(current.next){
//             prev=current
//             current=current.next
//         }
//         if(prev){
//         prev.next=null
            
//         }else{
//             this.head=null
//         }
//         this.size--
//     }
//     findValue(value){
        
//         let current =this.head
//         while(current){
//             if(current.value==value){
//                 return true
//             }else{
//                current=current.next 
//             }
         
         
//         }
//         return false
        
//     }
//     addValue(index,value){
//         if(index<0){
//             return console.log("index not found")
//         }
//         if(index==0){
//             this.addFirst(value)
//         }
//         let current=this.head
//         let newNode=new Node(value)
//         for(let i=0;i<index-1;i++){
//             current=current.next
//         }
//         newNode.next=current.next
//         current.next=newNode
//         this.size++
//     }
    
//     deleteValue(index){
//         if(index<0){
//             return console.log("index not found")
//         }
//         if(index==0){
//             this.deleteFirst()
//         }
//         let current=this.head
        
//         for(let i=0;i<index-1;i++){
           
//             current=current.next 
//         }
//         current.next=current.next.next 
//         this.size--
        
//     }
//     findMid(){
//         let current=this.head;
//         let size=0
//         while(current){
//             current=current.next
//             size++
//         }
//         let mid =Math.floor(size/2)
//         current=this.head
//         let i=0
//         while(i<mid){
//             current=current.next
//             i++
//         }
//         console.log(current.value)
        
        
        
//     }
//     addMidValue(value){
//         let current =this.head
//         let size=0;
        
//         while(current){
//           current=current.next
//           size++
//         }
//         let mid=Math.floor(size/2)
//         const newNode =new Node(value)
//         current =this.head
//         let i=0;
//         while(i<mid){
//             current=current.next
//             i++
//         }
//         newNode.next=current.next
//         current.next=newNode
        
//         size++
        
//     }
    
//     printList(){
//         let current=this.head
//         let output='';
//         while(current){
//             output+=current.value+' ';
//             current=current.next;
//         }
//         console.log(output)
//     }
    
    
// }



// const list =new linkedList()

// list.addFirst(3)
// list.addFirst(2)
// list.addFirst(1)
// list.addLast(4)
// // list.deleteFirst()
// // list.deleteLast()
// // console.log(list.findValue(2))
// // console.log(list.findValue(6))
// list.addValue(4,5)
// // list.deleteValue(3)
// list.findMid()
// list.addMidValue(3)
// list.printList()





















