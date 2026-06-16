function getFirst<T>(arr : T[]): T {  /// generics 
    return arr[0]
}
getFirst<number> ([1, 2, 3])
getFirst<string> (["a", "b", "c"])


 function add  <T> ( a : T  ,  b : T) {
    return  a  

}
add<number|string> (2 + "b")


