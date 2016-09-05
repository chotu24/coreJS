
function List(){
  this.List=[];
  this.listSize = 0;
  this.add = add;
  this.remove = removeElement;
  this.find = find;
  this.size = size;
  this.string = string;
}

function add(element){
	this.List[this.listSize++]=element;
}

function find(element){
	for(var i=0;i<this.listSize; i++){
  	if(this.List[i] === element){
      console.log('element found'+element);
    return i;
    }
  }
  return -1;
}

function removeElement(element){
	var indexfound = this.find(element);
  List[this.listSize]=this.List.splice(indexfound,1);
  this.listSize--;
}

function size(){
	return this.listSize;
}
function string(){
	return this.List;
}


var list = new List();
console.log(list);
list.add('Anand kumar');
list.add('Anand');
list.add('kumar');
console.log(list.string());
list.remove('Anand');
console.log(list.string());
