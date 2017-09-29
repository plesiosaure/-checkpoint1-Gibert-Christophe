## Qu'est ce qu’un navigateur ?

```
Un navigateur est un logiciel permettant de lire des ressources disponibles sur le web principalement via le protocole http.



```



## Définissez l’ensemble HTML/CSS/JavaScript et leur utilités.


```

- HTML est un langage de balisage permettant de structurer des contenus de type texte ou multimédia de façon standard afin  qu'ils puissent être lus et interprétés par les navigateurs.
- CSS est un langage permettant de modifier l'apparence et certains comportements des éléments HTML  de façon indépendante du code HTML 
- Javascript est un langage permettant de créer ou modifier la structure et le comportement d'une page HTML/CSS une fois que celle-ci est téléchargée sur le navigateur en tenant compte de l'interaction de l'utilisateur avec celui-ci et sans avoir nécessairement besoin d'interagir avec le serveur. Il peut aussi être interprété au niveau du serveur afin de délivrer du contenu au client 


```



## Qu’est-ce qu’un élément HTML ? Un attribut ?

```

Un élément HTML est une balise décrivant un objet texte (par ex. un paragraphe) ou multimédia (par ex. une image)  ou encore un élément de structure (par ex. un pied de page). Un attribut permet de préciser  les propriétés de cet élément (par ex. son identifiant ou sa taille)


```



## Dans quels cas utilisez-vous des id au lieu des classes (et vice-versa) ?


```

Un id permet d'identifier de façon unique un élément HTML dans une page alors qu'une classe permet d'associer un ensemble de propriétés communes à plusieurs éléments



```



## Qu’est-ce que EcmaScript ?

```

EcmaScript est une norme permettant de définir un cadre standard pour les langages de script dont fait partie Javascript


```



## Pourquoi est-il important de bien indenter vos fichiers ?

```
Pour faciliter la lecture du code et sa modification mais également pour identifier rapidement les erreurs qui peuvent être dues à des blocs mal fermés ou à des morceaux de code situés dans le mauvais bloc



```



## Quelle est la différence entre margin et padding ? 

```
margin représente la marge extérieure d'un élément alors que padding définit sa marge intérieure



```




## Citez au moins 3 types de positionnement en CSS et expliquer leurs rôles.

```
- le positionnement statique est le comportement par défaut : les élement se positionnent en fonction de leur emplacement dans le flux normal du document et de leurs propres propriétés d'affichage. La position de l'élément dépend des autres éléments statiques de la page.
- le positionnement absolu permet de retirer un élément du flux normal : il n'est donc plus pris en compte par les autres éléments et se positionne indépendamment à l'endroit précis où on lui spécifie
- le positionnement relatif  permet de déplacer un élément par rapport à sa position dans le flux normal sans pour autant affecter les autres éléments autour



```


## Qu’est-ce qu’une variable ?

```

Une variable est un emplacement mémoire identifié par un nom permettant de stocker des valeurs de différents types pour y recourir à d'autres moments dans un programme en lecture comme en écriture.


```



## Citez le plus de types JavaScript possible et définissez les rapidement.


```

- le type String permet de définir une chaîne de caractères
- le type Number permet de définir un nombre qui peut être entier ou à virgule
- le type Boolean permet de définir une valeur vraie ou fausse
- le type Object permet de définir un élément complexe pouvant comporter des propriétés de divers types et des méthodes  incluant notamment les éléments de type  Array permettant de définir un tableau d'éléments à une ou plusieurs dimensions


```



##  À quoi sert le mot-clef “if” ?

```

if  sert à tester la validité d'une condition pour exécuter un bloc d'instructions seulement dans le cas où cette condition est remplie


```



##  Définissez l’objet XHR en JavaScript, son abréviation. À quoi sert-il ?


```

L'objet XHR est une abréviation pour XMLHttpRequest. Il permet en Javascript d'effectuer des requêtes http vers un serveur à l'intérieur d'une page  sans recharger la page du navigateur


```



## Qu’est-ce qu’une requête HTTP ? 

```
Une requête HTTP est une demande effectuée par une machine dite cliente à une machine dite serveur généralement différente et située ailleurs sur le réseau en respectant une nomenclature standard afin d'obtenir une réponse comme par exemple la délivrance d'une ressource située sur ce serveur.  



```



## Quelle sont les deux types de requêtes permettant de récupérer et d’envoyer de la donnée sur un serveur HTTP ?

```

une requête de type GET permete de récupérer des données alors qu'une requête de type POST permet d'envoyer des informations


```



## À quoi sert le Header d’une requête ? Le “Content-Type” ?

```
Une requête HTTP contient un Header afin d'identifier le contenu et l'orgine de la requête avant de traiter son contenu proprement dit. 
Le Content-Type permet d'identifier le format dans lequel la donnée est transmise (par exemple du texte ou une image JPG)



```



## Donnez au moins 3 codes de réponse HTTP et définissez les.


```
Le code 200 est renvoyé lorsque la ressouce est disponible et a été correctement retournée
Le code 404 est renvoyé lorsque la ressource n'existe pas à l'adresse demandée
Le code 301 est renvoyé lorsque la ressource a définitivement changé d'adresse



```



## Définissez les rôles de Scrum Master et Product Owner.


```
Le Scrum Master garantit le fonctionnement en mode agile de l'équipe en organisant les réunions et s'assurant que l'ensemble de l'équipe respecte les principes définis par la méthode Scrum.
Le Product Owner est responsable du produit et de sa conformité aux souhaits du client ou du commanditaire tout au long de son cycle de vie



```



## Citer 4 commandes utilisées avec GIT et expliquer leurs rôles.
```

la commande init permet de démarrer le suivi d'un répertoire pour le versionner
la commande status permet de connaître la situation du système de version à tout moment (fichiers modifiés ou ajoutés, suivis ou en attente de  suivi..)
la commande commit permet d'enregistrer un ensemble de modifications correspondant à une version du code
la commande push permet d'envoyer toutes les versions du code d'une branche sur une branche située dans un autre répertoire afin de les synchroniser  


```



## Expliquer le code suivant et indiquer le résultat retourné par la fonction.

```
function counter(){
        const sentence = "Validation de la première phase";
        const words = sentence.split(' ');
        let count = 0;


        for (let i = 0; i < words.length; i++) {
            var word = words[i];
            count += word.length;
        }
        return count;
}
```
```

Ce code permet d'additionner le nombre de lettres de chaque mot dans la phrase "Validation de la première phase" ce qui donne 10 + 2 + 2 + 8 + 5 = 27


```



## Algo 

Ecrire l’algorithme d’une fonction prenant en paramètre 2 arguments : le premier est une chaîne de caractère et le second correspondant au caractère recherché. Cette fonction retourne le nombre de fois que le caractère recherché est rencontré dans la chaîne de caractères.
Ex. 
   * chaîne : ‘examen’, caractère : ‘x’ => 1
   * chaîne : ‘wild code school’, caractère : ‘w’ => 1



```

FONCTION searchChar (str, chr) : ENTIER
    str : chaîne de caractères
    chr : caractère		

    l <- longueur de str
    c <- 0
     
    Pour i de 0 jusqu'à l-1 avec un pas de 1
        Si str[i] = chr
	Alors c <- c + 1
    Fin pour
     
   Retourner c

Fin Fonction


```


