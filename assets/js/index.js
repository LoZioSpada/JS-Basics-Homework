//assegniamo alla variabile (contenitore) un valore (in questo caso 500)
let zuccheroBianco = 500    

//facciamo che in un secondo contenitore aggiungiamo ciò che abbiamo in zuccheroBianco con un valore 100 di una cosa non definita
let ciotolaMedia = zuccheroBianco + 100 

// andiamo a svuotare il contenitore zuccheroBianco
zuccheroBianco = null

//abbiamo della farina, di un valore non identificato
let farina

// diamo degli input a questi contenitori!!

console.log(ciotolaMedia)   // darà come risultato la somma presente nel secondo contenitore, cioè il valore assegnato a zuccheroBianco con altri 100 di cosa ignota. "600"

console.log(zuccheroBianco) // si ricollega a zuccheroBianco = null, cioè abbiamo svuotato il contenitore zuccheroBianco. Il risultato sarà di questo input sarà "null"

console.log(farina) // si ricollega al contenitore "farina". Dato che non gli abbiamo assegnato alcun valore, il risultato di questo input sarà "undefined"

