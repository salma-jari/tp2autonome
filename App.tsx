import { View, Text, StyleSheet } from 'react-native';

const produits = [
  { id: 1, nom: 'clavier', categorie: 'accessoires', prix: 120, stock: 5 },
  { id: 2, nom: 'souris', categorie: 'accessoires', prix: 80, stock: 8 },
  { id: 3, nom: 'ecran', categorie: 'informatique', prix: 900, stock: 0 },
  { id: 4, nom: 'casque', categorie: 'iccessoires', prix: 240, stock: 3 },
];
const lignes = produits.map((p) => `${p.nom} - ${p.prix}`);
const nbrproduits = produits.filter((p) => p.stock > 0);
const PRODUIT = produits.map((p) => p.prix * p.stock);
const total = PRODUIT.reduce((somme, valeur) => somme + valeur, 0);
const moinscher = nbrproduits.reduce((min, p) =>
  p.prix < min.prix ? p : min
);
export default function App() {
return (
<View style={styles.ecran}>
<Text style={styles.titre}>Catalogue des produits </Text>

    {produits.map((p) => (
 <Text key={p.id} style={styles.ligne}>
 {p.nom} - {p.prix} MAD - {p.stock} unités
</Text>
))
}

<Text style={styles.ligne}>
        {nbrproduits.length} produits disponibles 
     </Text>

 <Text style={styles.ligne}>
        La Somme est : {total} MAD
      </Text>

 <Text style={styles.titre}>Produit le moins cher</Text>

<Text style={styles.ligne}>Nom : {moinscher.nom}</Text>
<Text style={styles.ligne}>Catégorie : {moinscher.categorie}</Text>
 <Text style={styles.ligne}>Prix : {moinscher.prix} MAD</Text>
 <Text style={styles.ligne}>Stock : {moinscher.stock} unités</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ecran: {
 flex: 1,
  justifyContent: 'center',
  padding: 26,
  backgroundColor: '#F2F7FD',
  },
  titre: {
 fontSize: 24,
  fontWeight: 'bold',
 color: '#00235C',
  marginBottom: 16,
  },
  ligne: {
 fontSize: 17,
 paddingVertical: 8,
 color: '#00235C',
  },
});
