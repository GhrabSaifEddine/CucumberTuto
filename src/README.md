Cucumber : outil permettant de mettre en place de tests fonctionnels automatisés en se basant sur le langage "GHERKIN"

Les étapes nécessaires pour cette mise en place sont :

 1) Décrire le comportement en langage naturel (.feature)
 2) Implémenter le code de test des steps (méthodes java)
 3) Implémenter le code métier de l'application
 4) Exécuter les tests jusqu'à ce qu'ils passent au VERT ! sans oublier bien sûr de configurer le lanceur de tests (RunCucumberTest.java)
 

Cucumber permet de paramétriser les steps en proposant l'utilisation d'expressions régulières (regex) dans les steps Java pour matcher (détecter) un motif 
dans la description textuelle d'une étape. Par exemple :
 
 1) L'expression (.*) permettra de matcher un string
 2) L'expression (\\d+) permettra de matcher un entier
 
 
 Le scénario paramétré commence par le mot clé Scenario Outline.
 Il est rédigé comme un scénario classique avec, dans les étapes, des paramètres notés entre < et > : c'est une sorte de template de scénario.
 Lors de l'exécution, les paramètres seront remplacés par les valeurs présentes dans les lignes de la table introduite par le mot clé Examples.
 Lors de l'exécution, il y aura donc autant de scénarios exécutés que d'exemples (lignes valuées) présents dans la table Examples.
 
 
 Il est possible de factoriser une(ou plusieurs) étape(s) Given en utilisant le mot clé Background en amont de la description des scénarii.
 
 
 Parmi les options qu'on peut trouvers dans @CucumberOptions, on cite :
 
 1) L'option strict à true pour faire en sorte que les tests passent au ROUGE dès lors qu'une step reste à implémenter.
 2) l'option feature pour indiquer où se trouvent les scénarii à tester ;
 3) l'option monochrome pour améliorer la lisibilité dans la console des résultats liés à l'exécution des scénarios ;
 4) l'option plug-in pour générer un rapport de tests.