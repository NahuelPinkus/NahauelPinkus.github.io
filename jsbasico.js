function checkAge(age){
    if(age>=18){ 
      return true;
    } else {  return confirm("Do you have permission from your parents?");}
} 

let age= prompt ("how old are you?", 18);
if (checkAge(age)){
    alert=("access granted")
}else{ 
    alert=("access denied")
}