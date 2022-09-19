process.stdin.resume();
process.stdin.setEncoding('utf8');
// Your code here!
var personas
personas = [
    {
        nombre: "luis"
    }]
    
    personas.push({
        nombre: "Michael",
        edad: 10
    })
    
    personas[1].amigos = ['roberto', 'ana'];
    console.log(personas);
    
    var usuarios = personas;
    console.log(usuarios)