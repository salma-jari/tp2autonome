const produits = [
 {id : 1 , nom : 'clavier' , categorie : 'accessoires' , prix : 120 , stock : 5},
{id : 2, nom : 'souris' , categorie : 'accessoires' , prix : 80 , stock : 8},
{id : 3 , nom : 'ecran' , categorie : 'informatique' , prix : 900 , stock : 0},
 {id : 4 , nom : 'casque' , categorie : 'iccessoires' , prix : 240 , stock : 3},
    
];
const lignes = produits.map ((p) => {
return `${p.nom} - ${p.prix}`;
});
for ( const ligne of lignes ){
    console.log(ligne);
}
const stocke = produits.map((p) => p.stock);
const nbrproduits = produits.filter(
    (p) => p.stock > 0 
);
console.log( nbrproduits.length , 'produits disponibles');

const PRODUIT = produits.map((p) => p.prix * p.stock);
const total = PRODUIT.reduce(
    (somme, valeur) => somme + valeur, 0
);

console.log('La Somme est :' , total , 'MAD');

if ( produits.length === 0) {
    console.log("aucun produit ");
} else {

let min = produits[0].prix;
let nom = produits[0].nom;

for (const ligne of produits) {
if (ligne.prix < min) {
min = ligne.prix;
 nom = ligne.nom;
 
 }
}

console.log('Le produit le moins cher :', nom, 'Prix :', min);


    const ligne = produits.map(
  p => `${p.nom} - ${p.prix} MAD - ${p.stock} unités`
);

console.log(ligne);

}    



function estValide(produit) {
 return Number.isFinite(produit.prix) &&
produit.prix >= 0 &&
 Number.isFinite(produit.stock) &&
 produit.stock >= 0;
}




const moinscher = nbrproduits.reduce((min, p) => {
return p.prix < min.prix ? p : min;
});
const { nom, categorie, prix, stock } = moinscher;
console.log(`Le produit disponible le moins cher est ${nom},
 catégorie : ${categorie}, prix : ${prix} MAD, stock : ${stock} unités.`);

