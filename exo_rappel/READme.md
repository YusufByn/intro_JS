ROLES :

- Les rôles (admin/user)

USERS : 

- Les infos user, prénom nom email et mot de passe 

SIZES :

- Les tailles des articles avec 2 champs : tailles usa et eu psk les tailles sont différentes genre les unités de mesure

COLOR :

- La liste les couleurs disponibles pour les articles

MATERIALS :

- La liste les matériaux utilisés pour les articles (ex:casquettes)

PROMOS :

- Stocke les promotions avec un coeff multiplicateur pour simplifier le calcul des prix

ARTICLES :

- Contient les produits, liés à leur taille, couleur, matériau et promo 

PANIERS :

- Représente les paniers des utilisateurs et la date de création en timestamp

PANIER_ARTICLES :

- Table intermédiaire (de jonction) pour gérer plusieurs articles par panier et leur quantité

TICKETS :

- Représente les factures des utilisateurs avec le total et la date d’achat.

TICKET_ARTICLES

- Table intermédiaire pour stocker chaque article d’un ticket, sa quantité et le prix payé après promo.