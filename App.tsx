
import { View, Text, StyleSheet } from 'react-native';

const produits = [
  { id: 1, nom: 'clavier', categorie: 'accessoires', prix: 120, stock: 5 },
  { id: 2, nom: 'souris', categorie: 'accessoires', prix: 80, stock: 8 },
  { id: 3, nom: 'ecran', categorie: 'informatique', prix: 900, stock: 0 },
  { id: 4, nom: 'casque', categorie: 'iccessoires', prix: 240, stock: 3 },
];

const nbrproduits = produits.filter((p) => p.stock > 0);

const PRODUIT = produits.map((p) => p.prix * p.stock);

const total = PRODUIT.reduce((somme, valeur) => somme + valeur, 0);

export default function App() {
  return (
    <View style={styles.ecran}>
      <Text style={styles.titre}>Catalogue produits</Text>

      <Text style={styles.ligne}>
        Nombre de produits disponibles : {nbrproduits.length}
      </Text>

      <Text style={styles.ligne}>
        Valeur totale du stock : {total} MAD
      </Text>
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
    marginBottom: 20,
  },

  ligne: {
    fontSize: 17,
    paddingVertical: 8,
    color: '#00235C',
  },
});


