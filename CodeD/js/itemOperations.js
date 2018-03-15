const itemOperations = {
    itemList :[],
   
    add(item){
       
        this.itemList.push(item);
    },
    getItems(){
        return this.itemList;
    },
    delete(){
        this.itemList = this.itemList.filter(itemObject=>!itemObject.isMarked);
    },
    search(id){
        return this.itemList.filter(itemObject=>itemObject.id ==id)[0];
    },

    totalMark(){
       return  this.itemList.filter(itemObject=>itemObject.isMarked).length;
    },
    toggle(id){
       var itemObject =  this.search(id);
       itemObject.isMarked = !itemObject.isMarked;
    },
    sort(key){
      return this.itemList.sort((first,second)=>first[key]-second[key]);  
    }
}