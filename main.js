let list = {
	value: 1,
  next: {
  	value:2,
    next:{
    	value:3,
      next: null
    }
  }
}

//list - is input linked list, node is node number from end
//The rec function will return a value of selected node from the end
var rec = function(list,node,arr=[]){
	arr.push(list.value)
	return list.next == null? arr[arr.length - node] : rec(list.next, node, arr)
}

console.log(rec(list,2))